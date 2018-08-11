import { SHIPS, DEFENSE_SYSTEMS } from "./constants";
import Ship from "./ship";
import { DefenseSystem } from "./defense-system";
import ShipFactory from "./ship-factory";
import { isShip } from "./utils";
import DefenseFactory from "./defense-factory";
import shipTemplates from "./ship-templates";
import defenseSystemTemplates from "./defense-system-templates";
import IUnit from "./iunit";
import * as Random from 'random-js';

export default class Battle {
    constructor(private attackerForcesData: Map<SHIPS, number>, private defenderForcesData: Map<SHIPS|DEFENSE_SYSTEMS, number>) {
        this.attackerFleet = [];
        this.defenderFleet = [];
        this.defenderDefense = [];
        this.random = new Random(Random.engines.mt19937().autoSeed());
    }
    public letsTheBattleBegin() {
        this.prepareBattle();
        this.roundCounter = 0;
        while(!this.isBattleFinished()) {
            this.preRoundJob();
            this.nextRound();
            this.postRoundJob();
            this.roundCounter++;
        }
    }
    public getResult() {
        return {
            winner: this.getWinner(),
            attackerForces: this.attackerForcesToMap(),
            defenderForces: this.defenderForcesToMap()
        };
    }
    /**
     * Performs next battle round
     */
    private nextRound() {
        //Attacker
        this.attackerFleet.forEach(ship => {
            let target = this.pickRandomTargetForAttacker();
            this.attack(ship, target);
        })
        //Defender
        this.defenderFleet.forEach(ship => {
            let target = this.pickRandomTargetForDefender();
            this.attack(ship, target);
        })
        this.defenderDefense.forEach(defenseSystem => {
            let target = this.pickRandomTargetForDefender();
            this.attack(defenseSystem, target);
        })
    }
    private preRoundJob() {
        this.resetShields();
    }
    private postRoundJob() {
        this.deleteDestroyedObjects();
    }
    private isBattleFinished() {
        /* Holy crap, so battle ends
           after max 6 rounds or when one or all sides are down
        */
        return this.roundCounter >= 6 ||
            this.attackerFleet.length === 0 ||
            (this.defenderFleet.length === 0 && this.defenderDefense.length === 0);
    }
    private getWinner(): "attacker" | "defender" | "draw" {
        let attackerDown: boolean = false;
        let defenderDown: boolean = false;
        if(this.attackerFleet.length === 0)
            attackerDown = true;
        if(this.defenderFleet.length === 0 && this.defenderDefense.length === 0)
            defenderDown = true;
        
        if(attackerDown === defenderDown)
            return "draw";
        else if(attackerDown)
            return "defender";
        else return "attacker";
    }
    private resetShields() {
        this.attackerFleet.forEach(ship => {
            ship.shield = shipTemplates.get(ship.id).shield;
        });
        this.defenderFleet.forEach(ship => {
            ship.shield = shipTemplates.get(ship.id).shield;
        });
        this.defenderDefense.forEach(defenseSystem => {
            defenseSystem.shield = defenseSystemTemplates.get(defenseSystem.id).shield;
        });
    }
    private pickRandomTargetForAttacker(): IUnit {
        let totalEnemies = this.defenderFleet.length + this.defenderDefense.length;
        let randomTarget = this.random.integer(0, totalEnemies - 1);
        if(randomTarget < this.defenderFleet.length) {
            return this.defenderFleet[randomTarget];
        }
        else return this.defenderDefense[randomTarget];
    }
    private pickRandomTargetForDefender(): IUnit {
        let totalEnemies = this.attackerFleet.length;
        let randomTarget = this.random.integer(0, totalEnemies - 1);
        return this.attackerFleet[randomTarget];
    }
    private attack(attacker: IUnit, target: IUnit) {
        //http://ogame.wikia.com/wiki/Combat
        //If the Weaponry of the shooting unit is less than 1% of the Shielding of the target unit,
        //the shot is bounced, and the target unit does not lose anything (i.e. shot is wasted).
        if(attacker.attack < target.shield * 0.01)
            return;
        else if(attacker.attack <= target.shield) {
            return target.shield -= attacker.attack;
        }
        else {
            target.hull -= attacker.attack - target.shield;
            target.shield = 0;
            //If it's already dead it's pointless to check explosion
            if(target.hull <= 0) return;
            if(this.checkExplosion(target)) {
                return target.hull = 0;
            }
        }
    }
    private checkExplosion(unit: IUnit) {
        let template: IUnit;
        if(isShip(unit.id))
            template = shipTemplates.get(unit.id);
        else template = defenseSystemTemplates.get(unit.id);
        if(unit.hull > template.hull * 0.7) return false;
        
        let explosionPropability = 1 - unit.hull / template.hull;
        return this.random.bool(explosionPropability);
    }
    private deleteDestroyedObjects() {
        this.attackerFleet = this.attackerFleet.filter(ship => ship.hull > 0);
        this.defenderFleet = this.defenderFleet.filter(ship => ship.hull > 0);
        this.defenderDefense = this.defenderDefense.filter(defenseSystem => defenseSystem.hull > 0);
    }
    private prepareBattle() {
        this.attackerForcesData.forEach((amount, shipId) => {
            for(let i = 0; i < amount; i++) {
                this.attackerFleet.push(ShipFactory.createShip(shipId))
            }
        });
        this.defenderForcesData.forEach((amount, forceId) => {
            for(let i = 0; i < amount; i++) {
                if(isShip(forceId))
                    this.defenderFleet.push(ShipFactory.createShip(<SHIPS>forceId));
                else
                    this.defenderDefense.push(DefenseFactory.createDefenseSystem(<DEFENSE_SYSTEMS>forceId));
            }
        });
    }
    private attackerForcesToMap() {
        let attackerForces = new Map<SHIPS, number>();
        this.attackerFleet.forEach(ship => {
            if(!attackerForces.has(ship.id)) {
                attackerForces.set(ship.id, 0);
            }
            attackerForces.set(ship.id, attackerForces.get(ship.id) + 1);
        });
        return attackerForces;
    }
    private defenderForcesToMap() {
        let defenderForces = new Map<SHIPS | DEFENSE_SYSTEMS, number>();
        this.defenderFleet.forEach(ship => {
            if(!defenderForces.has(ship.id)) {
                defenderForces.set(ship.id, 0);
            }
            defenderForces.set(ship.id, defenderForces.get(ship.id) + 1);
        });
        this.defenderDefense.forEach(defenseSystem => {
            if(!defenderForces.has(defenseSystem.id)) {
                defenderForces.set(defenseSystem.id, 0);
            }
            defenderForces.set(defenseSystem.id, defenderForces.get(defenseSystem.id) + 1);
        });
        return defenderForces;
    }
    
    private attackerFleet: Ship[];
    private defenderFleet: Ship[];
    private defenderDefense: DefenseSystem[];
    private roundCounter: number;
    private random: Random;
}
