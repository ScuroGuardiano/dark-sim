import { SHIPS, DEFENSE_SYSTEMS } from "./constants";

export default class RapidFire {
    constructor(against: SHIPS | DEFENSE_SYSTEMS, rate: number) {
        this.against = against;
        this.rate = rate;
    }
    against: SHIPS | DEFENSE_SYSTEMS;
    rate: number;
}
