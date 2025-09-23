// Array of names

const names = ['Sam', 'James', 'Arthur', 'Ashley', 'Jack', 'John', 'Karen', 'Mary']


// Sort names

names.sort((a, b) => {
    if(a.length === b.length) {
        return a.localeCompare(b)
    }

    return a.length - b.length
})

console.log(names)