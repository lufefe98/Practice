// Create String

const sentence = 'This is the one that is going. That is the one that is staying'
const cleanSentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").split(' ')

function wordCount(str) {
    const wordFreq = new Map()

    for (const word of str) {
        // Clean up your string first, before putting it in the if statement. Remove upon waking up

        if(wordFreq.has(word)) {
            wordFreq.set(word, wordFreq.get(word) + 1)
        } else {
            wordFreq.set(word, 1)
        }
    }

    return wordFreq
}

console.log(wordCount(cleanSentence))