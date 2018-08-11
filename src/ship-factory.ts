import { SHIPS } from "./constants";
import ShipTemplates from './ship-templates';
import Ship from "./ship";

export default class ShipFactory {
    static createShip(id: SHIPS): Ship {
        let template = ShipTemplates.get(id);
        if(!template)
            throw new Error("Ship does not exist");
        let ship = Object.create(template);
        return Object.assign(ship, template);
    }
}
