import { DefenseSystem } from "./defense-system";
import { DEFENSE_SYSTEMS } from "./constants";

let rocketlauncher = new DefenseSystem(
    DEFENSE_SYSTEMS.ROCKETLAUNCHER,
    { hull: 200, shield: 20, attack: 80 }
);
let lightLaser = new DefenseSystem(
    DEFENSE_SYSTEMS.LIGHT_LASER,
    { hull: 200, shield: 25, attack: 100 }
);
let heavyLaser = new DefenseSystem(
    DEFENSE_SYSTEMS.HEAVY_LASER,
    { hull: 800, shield: 100, attack: 250 }
);
let gaussCanon = new DefenseSystem(
    DEFENSE_SYSTEMS.GAUSS_CANNON,
    { hull: 3500, shield: 200, attack: 1100 }
);
let ionCannon = new DefenseSystem(
    DEFENSE_SYSTEMS.ION_CANNON,
    { hull: 800, shield: 500, attack: 150 }
);
let plasmaTurret = new DefenseSystem(
    DEFENSE_SYSTEMS.PLASMA_TURRET,
    { hull: 10000, shield: 300, attack: 3000 }
);
let smallShield = new DefenseSystem(
    DEFENSE_SYSTEMS.SMALL_SHIELD,
    { hull: 2000, shield: 2000, attack: 1 }
);
let largeShield = new DefenseSystem(
    DEFENSE_SYSTEMS.LARGE_SHIELD,
    { hull: 10000, shield: 10000, attack: 1 }
);

export default new Map<DEFENSE_SYSTEMS, DefenseSystem> ([
    [DEFENSE_SYSTEMS.ROCKETLAUNCHER, rocketlauncher],
    [DEFENSE_SYSTEMS.LIGHT_LASER, lightLaser],
    [DEFENSE_SYSTEMS.HEAVY_LASER, heavyLaser],
    [DEFENSE_SYSTEMS.GAUSS_CANNON, gaussCanon],
    [DEFENSE_SYSTEMS.ION_CANNON, ionCannon],
    [DEFENSE_SYSTEMS.PLASMA_TURRET, plasmaTurret],
    [DEFENSE_SYSTEMS.SMALL_SHIELD, smallShield],
    [DEFENSE_SYSTEMS.LARGE_SHIELD, largeShield]
]);
