// Array

const prices = [50, 120, 300, 25, 600, 400];


// Function

function filterPrices(arr, min, max) {

    if (!min && !max) {
        return
    }

        return arr.filter(price => {
            if (price >= min && price <= max) {
                return true
            } else {
                return false
            }
        })
}

filterPrices(prices, 100, 400)