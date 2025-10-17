// Array

const numArray = [1, 2, 2, 3, 4, 4, 5]


// Function

function removeDuplicates(arr) {
    const noDuplicatArr = []

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i]

        if (!noDuplicatArr.includes(currNum)) {
            noDuplicatArr.push(currNum)
        }
    }
    console.log(noDuplicatArr)

    return noDuplicatArr
}

removeDuplicates(numArray)