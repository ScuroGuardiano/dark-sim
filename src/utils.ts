export function isShip(id: number) {
    if(id >= 0 && id < 3000)
        return true;
    return false;
}
export function isDefenseSystem(id: number) {
    if(id >= 3000)
        return true;
    return false;
}
