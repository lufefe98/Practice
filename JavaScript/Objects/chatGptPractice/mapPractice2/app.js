// Create Map

const newMap = new Map()

newMap.set('South Africa', 'Pretoria')
newMap.set('Morocco', 'Rabat')
newMap.set('Belgium', 'Brussels')
newMap.set('England', 'London')


for (let capital of newMap.values()) {
    console.log(capital)
}

for (let capital of newMap.keys()) {
    console.log(capital)
}

for (let [country, capital] of newMap) {
    console.log(country, capital)
}