interface Coordinate{
    x:number,
    y:number,
}

function parseCo(obj: Coordinate):Coordinate{
    return {...obj}
}

