import Battle from "./battle";
import { SHIPS } from "./constants";

module.exports = function main() {
    let attacker = new Map([
        [SHIPS.LIGHT_FIGHTER, 1 * 1000 * 1000]
    ]);
    let defender = new Map([
        [SHIPS.LIGHT_FIGHTER, 1 * 1000 * 1000]
    ]);
    console.log("Starting simulating battle 1mln light fighters vs 1mln light fighters...");
    let beginTime = Date.now();
    let battle = new Battle(attacker, defender);
    battle.letsTheBattleBegin();
    let endTime = Date.now();
    console.log(`Finished after ${(endTime - beginTime) / 1000}s`);
    console.log(battle.getResult());
}
