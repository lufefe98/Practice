// Array

const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"]


// Function

function groupAnagrams(words) {
    const map = new Map()

    for (let word of words) {
        const key = word.split('').sort().join()

        if(!map.has(key)) {
            map.set(key, [])
        }

        map.get(key).push(word)
    }

    return [...map.values()]
}

console.log(groupAnagrams(anagrams))