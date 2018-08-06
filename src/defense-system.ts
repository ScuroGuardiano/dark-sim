import { DEFENSE_SYSTEMS } from "./constants";
import IDefenseSystemParameters from "./idefense-params";

export class DefenseSystem {
    constructor(defenseId: DEFENSE_SYSTEMS, params: IDefenseSystemParameters) {
        this.id = defenseId;
        this.hull = params.hull;
        this.shield = params.shield;
        this.attack = params.attack;
    }
    id: DEFENSE_SYSTEMS;
    hull: number;
    shield: number;
    attack: number;
}
