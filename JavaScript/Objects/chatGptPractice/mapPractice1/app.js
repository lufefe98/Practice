// new Map

const map = new Map()
// Create a new map

map.set('Kazakhstan', 'Astana')
map.set('Ukraine', 'Kiev')
map.set('Japan', 'Tokyo')

// Set the values for the map object, with the first argument being the key
// and the second argument being the value

const kazakhCapital = map.get('Kazakhstan')
// you can get a value out of the object by using the get() method
console.log(kazakhCapital)

for (let [country, capital] of map) { // To access the key-value pairs, you should destructure your values
        // (they can hold any name, as long as you know what they represent), then you should use the object
        // you are extracting your key-value pairs
        // (if you had chained on values(), you would have only gotten the value and not the key from the object)
    console.log(country, capital)
}