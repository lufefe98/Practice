// String

const string = 'he is dressed in a rather manner hideous today'


function getMaxWindowCount(str, k) {
    let windowCount = 0
    let maxVowels = 0
    let vowels = 'aeiou'

    // How we increment the window count
    for (let i = 0; i < k; i++) {
        if(vowels.includes(str[i])) {
            windowCount++
        }
    }

    maxVowels = windowCount


    // Code for when the window moves forward
    for (let right = k; right < str.length; right++) {
        // right is moving forward because we are incrementing it
        // in this for loop
        if (vowels.includes(str[right - k])) {
            windowCount--
            // if the first element in the window of the string
            // includes a vowel, we decrcemenet windowount so we remove
            // the previous element before we add the next vowel 
            // (this allows us a fresh start)
        }

        // We decrement windowCount and then increment (in 
        // the if-block below) to move the window to the right.
        // We do this because we don't have a left pointer
    
        if (vowels.includes(str[right])) {
            windowCount++
            // if the element at the end of the window in the string
            // we are searching in contains a vowel, we incremement 
            // windowCount so we can add the next vowel in out window
        }
        
        maxVowels = Math.max(maxVowels, windowCount)
    }

    return maxVowels
}

console.log(getMaxWindowCount(string, 5))