import IUnit from "./iship-params";
import RapidFire from "./rapidfire";
import { SHIPS } from "./constants";

export default class Ship implements IUnit {
    constructor(shidId: SHIPS, params: IUnit, rapidfire?: Array<RapidFire>) {
        this.id = shidId;
        this.hull = params.hull;
        this.shield = params.shield;
        this.attack = params.attack;
        this.rapidfire = rapidfire || [];
    }
    id: SHIPS;
    hull: number;
    shield: number;
    attack: number;
    rapidfire: Array<RapidFire>
}
