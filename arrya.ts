const heros: string[] = [];

heros.push("spiderman") // the plain [] is of type never and cannot push or add vlues in it

// but when it is added we can write hero and shit

type User = {
    name: string
    isActive: boolean
}