// String

const string = 'aldjfihdjakssoens'


// Function 

function maxNoDupeStr(str) {
    const seenStr = new Set()

    let left = 0
    let maxCount = 0


    for (let right = 0; right < str.length; right++) {
        const char = str[right]

        while(seenStr.has(char)) {
            seenStr.delete(str[left])
            left++
        }

        seenStr.add(char)
        maxCount = Math.max(maxCount, right - left + 1)
        
    }

    return maxCount
}



console.log(maxNoDupeStr(string))