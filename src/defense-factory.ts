import { DEFENSE_SYSTEMS } from "./constants";
import { DefenseSystem } from "./defense-system";
import defenseSystemTemplates from "./defense-system-templates";

export default class DefenseFactory {
    static createDefenseSystem(id: DEFENSE_SYSTEMS): DefenseSystem {
        let template = defenseSystemTemplates.get(id);
        if (!template)
            throw new Error("Defense system does not exist");
        let defenseSystem = Object.create(template);
        return Object.assign(defenseSystem, template);
    }
}
