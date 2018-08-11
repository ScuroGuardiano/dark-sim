import Ship from "./ship";
import { SHIPS, DEFENSE_SYSTEMS } from "./constants";
import RapidFire from "./rapidfire";

//Militar ships
const lightFigher = new Ship(
    SHIPS.LIGHT_FIGHTER,
    { hull: 400, shield: 10, attack: 50 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5)
    ]
);
const heavyFighter = new Ship(
    SHIPS.HEAVY_FIGHTER,
    { hull: 1000, shield: 25, attack: 150 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5),
        new RapidFire(SHIPS.SMALL_CARGO, 3)
    ]
);
const cruiser = new Ship(
    SHIPS.CRUISER,
    { hull: 2700, shield: 50, attack: 400 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5),
        new RapidFire(SHIPS.LIGHT_FIGHTER, 6),
        new RapidFire(DEFENSE_SYSTEMS.ROCKETLAUNCHER, 10)
    ]
);
const battleship = new Ship(
    SHIPS.BATTLESHIP,
    { hull: 6000, shield: 200, attack: 1000 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5)
    ]
);
const battlecruiser = new Ship(
    SHIPS.BATTLECRUISER,
    { hull: 7000, shield: 400, attack: 700 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5),
        new RapidFire(SHIPS.SMALL_CARGO, 3),
        new RapidFire(SHIPS.LARGE_CARGO, 3),
        new RapidFire(SHIPS.HEAVY_FIGHTER, 4),
        new RapidFire(SHIPS.CRUISER, 4),
        new RapidFire(SHIPS.BATTLESHIP, 7)
    ]
);
const bomber = new Ship(
    SHIPS.BOMBER,
    { hull: 7500, shield: 500, attack: 1000 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5),
        new RapidFire(DEFENSE_SYSTEMS.ROCKETLAUNCHER, 20),
        new RapidFire(DEFENSE_SYSTEMS.LIGHT_LASER, 20),
        new RapidFire(DEFENSE_SYSTEMS.HEAVY_LASER, 10),
        new RapidFire(DEFENSE_SYSTEMS.ION_CANNON, 10)
    ]
);
const destroyer = new Ship(
    SHIPS.DESTROYER,
    { hull: 11000, shield: 500, attack: 2000 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5),
        new RapidFire(DEFENSE_SYSTEMS.LIGHT_LASER, 10),
        new RapidFire(SHIPS.BATTLECRUISER, 2)
    ]
);
const deathStar = new Ship(
    SHIPS.DEATH_STAR,
    { hull: 900000, shield: 50000, attack: 200000 },
    [
        new RapidFire(SHIPS.SMALL_CARGO, 250),
        new RapidFire(SHIPS.LARGE_CARGO, 250),
        new RapidFire(SHIPS.LIGHT_FIGHTER, 200),
        new RapidFire(SHIPS.HEAVY_FIGHTER, 100),
        new RapidFire(SHIPS.CRUISER, 33),
        new RapidFire(SHIPS.BATTLESHIP, 30),
        new RapidFire(SHIPS.COLONY_SHIP, 250),
        new RapidFire(SHIPS.RECYCLER, 250),
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 1250),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 1250),
        new RapidFire(SHIPS.BOMBER, 25),
        new RapidFire(SHIPS.DESTROYER, 5),
        new RapidFire(DEFENSE_SYSTEMS.ROCKETLAUNCHER, 200),
        new RapidFire(DEFENSE_SYSTEMS.LIGHT_LASER, 200),
        new RapidFire(DEFENSE_SYSTEMS.HEAVY_LASER, 100),
        new RapidFire(DEFENSE_SYSTEMS.GAUSS_CANNON, 50),
        new RapidFire(DEFENSE_SYSTEMS.ION_CANNON, 100),
        new RapidFire(SHIPS.BATTLECRUISER, 15),
    ]
);
//Civil ships
const smallCargo = new Ship(
    SHIPS.SMALL_CARGO,
    { hull: 400, shield: 10, attack: 5 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5)
    ]
);
const largeCargo = new Ship(
    SHIPS.LARGE_CARGO,
    { hull: 1200, shield: 25, attack: 5 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5)
    ]
);
const colonyShip = new Ship(
    SHIPS.COLONY_SHIP,
    { hull: 3000, shield: 100, attack: 50 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5)
    ]
);
const recycler = new Ship(
    SHIPS.RECYCLER,
    { hull: 1600, shield: 10, attack: 1 },
    [
        new RapidFire(SHIPS.ESPIONAGE_PROBE, 5),
        new RapidFire(SHIPS.SOLAR_SATELLITE, 5)
    ]
);
const espionageProbe = new Ship(
    SHIPS.ESPIONAGE_PROBE,
    { hull: 100, shield: 0.01, attack: 0.01 }
);
const solarSatellite = new Ship(
    SHIPS.SOLAR_SATELLITE,
    { hull: 200, shield: 1, attack: 1 }
);


export default new Map<SHIPS, Ship>(
    [
        [SHIPS.LIGHT_FIGHTER, lightFigher],
        [SHIPS.HEAVY_FIGHTER, heavyFighter],
        [SHIPS.CRUISER, cruiser],
        [SHIPS.BATTLESHIP, battleship],
        [SHIPS.BATTLECRUISER, battlecruiser],
        [SHIPS.BOMBER, bomber],
        [SHIPS.DESTROYER, destroyer],
        [SHIPS.DEATH_STAR, deathStar],
        [SHIPS.SMALL_CARGO, smallCargo],
        [SHIPS.LARGE_CARGO, largeCargo],
        [SHIPS.COLONY_SHIP, colonyShip],
        [SHIPS.RECYCLER, recycler],
        [SHIPS.ESPIONAGE_PROBE, espionageProbe],
        [SHIPS.SOLAR_SATELLITE, solarSatellite]
    ]
);
