const marvel_heros=["thor", "ironman", "spiderman"]
const dc_heros=["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
console.log(marvel_heros)

const all_heroes=marvel_heros.concat(dc_heros)
console.log(all_heroes)//arrays are merged

const all_heroes_new=[...marvel_heros,...dc_heros]
console.log(all_heroes_new)

const another_array=[1,2,3,4,[2,3,4],[3,[4,6]]]
const real_an_array=another_array.flat(Infinity)
console.log(real_an_array)


console.log(Array.isArray("arunima"))
console.log(Array.from("arunima"))
console.log(Array.from({name:"arunima"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))