// SELECT ELEMENTS
const body = document.querySelector('body')
const display = document.querySelector('#display')
const askJoke = document.querySelector('#ask')

const imgs = {
    1: {
        a: document.querySelector('#mbappe1'),
        b: document.querySelector('#mbappe2')
    },
    2: {
        a: document.querySelector('#muta1'),
        b: document.querySelector('#muta2')
    },
    3: {
        a: document.querySelector('#sturridge1'),
        b: document.querySelector('#sturridge2')
    }
}

// Selected all of the images by their individual id names and stored them
// using an object so that the images which are the same can be grouped
// together, but they are still separated by selecting them using their
// individual id names so that it can account for the diffence in their
// animations.


// Variables
let num
let countdownNum
let selectImg

// The variable num has been created and will be initiallized to a value
// later on in the code.

// selectImg is set to math.floor of math.random * 4 so that it can select
// a number between 0 - 4, this will be used later to select the images
// from their objects, but there will be tweaks done to account for the numbers
// falling outside of the 1-3 range.
// The number 4 was used so that the 3rd image can get selected more often
// than when the random number is floored to 3.





// Jokes
const question = {
    1: 'What did the dairy farmers say when their daughter was born?',
    2: 'How do you start a party in the Solar System?',
    3: 'Why did the bike fall?',
    4: 'Why did the cat get a fine?',
    5: 'Why did the thief wear red gloves?',
    6: 'What did the herbalist say when he was running late?',
    7: 'What did the cop say to the Ice Cube? ',
    8: 'What do you call a criminal taking their own mug-shot?',
    9: 'Why are celebrities so cool?',
    10: 'What music do fish listen to?',
    11: 'Why are fish so easy to weigh?',
    12: 'What do you call a self driving cannoe?',
    13: 'How do Spartans lubricate the wheels on their chariots?',
    14: 'What do diamonds and nothing have in common?',
    15: 'Why does the locksmith hate working on Thanks Giving Day?',
    16: 'What is the difference between a guitar and fish?',
    17: 'What did the salesman say about the limited edition Mexican sneaker?',
    18: 'Why does Jesus not like Pita Bread?',
    19: 'Why are skeletons so calm?',
    20: 'Why do I feel so blessed when I\'m eating food?',
    21: 'What do you call a fake noodle?',
    22: 'Why are functional doors so cute?',
    23: 'What do you call a pig that knows Karate?',
    24: 'What do you call a funny hill?',
    25: 'Why do some people get lost in thought?',
    26: 'Why does a golfer need 2 pairs of pants?',
    27: 'What do you call an owl that knows magic?',
    28: 'What do you call an argument between 2 electric companies?',
    29: 'How did the farmer find his lost cow?',
    30: 'Wanna hear a joke about construction?'
}


const answer = {
    1: 'Cheese a girl!!!',
    2: 'Ya Planet!!!',
    3: 'Because it was 2-tired!!!',
    4: 'Because it littered!!!',
    5: 'So he doesn\'t get caught red handed',
    6: 'I wish I had more thyme!!!',
    7: 'FREEZE!!!',
    8: 'A "cell-fie/"',
    9: 'They have a lot of fans!!!',
    10: 'Something catchy...',
    11: 'because they come with their own scales',
    12: 'A row-bot',
    13: 'They Greece them up!!!',
    14: 'They both last forever',
    15: 'Because they always want-Turkeys!!!',
    16: 'You can\'t tuna fish...',
    17: 'It\'s really Juan of a kind',
    18: 'Because he knows it\'s going to deny him...',
    19: 'Because you can\'t get under their skin...',
    20: 'Because I-chew',
    21: 'An im-pasta',
    22: 'Because they are so a-door-able',
    23: 'A pork-chop',
    24: 'Hill-arious!!!',
    25: 'Because it\'s not familiar territory for them',
    26: 'In case he gets a hole-in-one',
    27: 'Whooo-Dini',
    28: 'A power struggle',
    29: 'He tractor down',
    30: 'I\'m still working on it'
}





// FUNCTIONS

// Generate Random Background Colors
function genColor1() {
    let r1 = Math.floor(Math.random() * 255)
    let g1 = Math.floor(Math.random() * 255)
    let b1 = Math.floor(Math.random() * 255)
    return `${r1} ${g1} ${b1}`
}
function genColor2() {
    let r2 = Math.floor(Math.random() * 255)
    let g2 = Math.floor(Math.random() * 255)
    let b2 = Math.floor(Math.random() * 255)
    return `${r2} ${g2} ${b2}`
}
function genColor3() {
    let r3 = Math.floor(Math.random() * 255)
    let g3 = Math.floor(Math.random() * 255)
    let b3 = Math.floor(Math.random() * 255)
    return `${r3} ${g3} ${b3}`
}
function genColor4() {
    let r4 = Math.floor(Math.random() * 255)
    let g4 = Math.floor(Math.random() * 255)
    let b4 = Math.floor(Math.random() * 255)
    return `${r4} ${g4} ${b4}`
}
function genColor5() {
    let r5 = Math.floor(Math.random() * 255)
    let g5 = Math.floor(Math.random() * 255)
    let b5 = Math.floor(Math.random() * 255)
    return `${r5} ${g5} ${b5}`
}

const color1 = genColor1()
const color2 = genColor2()
const color3 = genColor3()
const color4 = genColor4()
const color5 = genColor5()

// All the above functions have been saved to variables to make it easier and more
// readable when used later on in other parts of my code.



// Select Joke
const getJoke = function () {
    display.style.fontSize = '2.5rem'

    return question[num]
}
const showJoke = function () {
    display.style.fontSize = '4rem'

    return answer[num]
}
// The above functions return the setup for the joke and the 
// punchline, respectively, by chaining the num variable to access the
// values from the object literals (num is assigned to a random number
// between 1 to 30 inside the event listener)





// Animate Images
const animateImg = function () {
    imgs[selectImg]['a'].classList.add('img-left')
    imgs[selectImg]['b'].classList.add('img-right')
    imgs[selectImg]['a'].style.display = 'block'
    imgs[selectImg]['b'].style.display = 'block'

    return
}

// The function expression selects random images by chaining on the random
// number that is generated by selectImg and then chaining on the individual
// element from inside the nested object.
// The animation is achieved by adding the class names of img-left and right
// which contains the CSS rules for their animations which are achieved in the
// keyframes rules from the CSS files.
// The images are given a display of block to override the display that was
// set in the CSS file for the images (this was done so the images don't interfere
// with the rest of the application before the button for the joke is clicked)

const hideImg = function () {
    imgs[selectImg]['a'].classList.remove('img-left')
    imgs[selectImg]['a'].classList.add('hide-left-img')
    imgs[selectImg]['b'].classList.remove('img-right')
    imgs[selectImg]['b'].classList.add('hide-right-img')

    return
}





// EVENT LISTENERS
askJoke.addEventListener('click', function () {
    // variables
    selectImg = Math.floor(Math.random() * 4)


    // Display Joke

    display.style.display = "flex"


    num = Math.floor(Math.random() * 30)

    if (num === 0) {
        num = 1
    }

    // num has been initialized to a random number that is used inside the
    // getJoke() and showJoke() function expressions and is used to access
    // the values from the question and answer objects above in a random.
    // manner so the jokes do not appear in the same order every time a user
    // clicks the askJoke button.
    // The num variable is assigned to the random number inside this event
    // listener so that the joke is generated everytime the button is clicked
    // instead of having to reload the page to get a new random number.


    setTimeout(() => display.textContent = getJoke(), 1000)

    // Show the question one second after the display pops up on the 
    // screen.

    const setupJoke = getJoke()


    if (setupJoke.length >= 55) {
        setTimeout(() => {
            display.textContent = showJoke()

            // Image Popup
            if (selectImg === 0) {
                selectImg = 1
            } else if (selectImg === 4) {
                selectImg = 3
            }
            animateImg()
            // If the random number for accessing images out of the imgs
            // objects is equal to 0, then the value for selectImg should be
            // overriden to be 1 and if it is 4, then it should be overriden to
            // be overriden to be 3.

            setTimeout(() => hideImg(), 5000)
            // After 5 seconds, the images should be hidden with the hideImg()
            // function expression.


        }, 8000)
    } else {
        setTimeout(() => {
            display.textContent = showJoke()

            // Image Popup
            if (selectImg === 0) {
                selectImg = 1
            } else if (selectImg === 4) {
                selectImg = 3
            }
            animateImg()

            setTimeout(() => hideImg(), 5000)
                
        }, 6000)
    }





    // Show the answer 6 seconds after the question appears but if the
    // length of the string for the setup of the joke is exceeds 55 characters
    // or equal to 55 characters, then set the timer to 8 seconds.
    // This should give users extra time to read set ups that might take a
    // a bit longer to read.

    // Wrapped the code for showing the punchline of the joke inside a try...catch
    // block so the error concerning '.length' does not occur and affect
    // the user experience and instead sends an alert to tell the user to reload
    // the page.
    // The display should remain hidden so it doesn't give the user mixed signals
    // as to whether the application is working or not, hence why it was set to 'none'.





    // Countdown Timer

    const newSpan = document.body.appendChild(document.createElement('span'))
    newSpan.classList.add("countdown-timer")

    // Appended the span and gave it a class of "countdown-timer" so it
    // can take on the styles for that class in the CSS file.

    if (setupJoke.length < 55) {
        countdownNum = 6
        // Set the timer to 6 to account for the one second it takes
        // for the joke to display.

        timer = setInterval(() => {
            countdownNum--
            newSpan.textContent = countdownNum
            // For each second that passes, the number that is used for the
            // countdown should be decremented by one.
            // The text content for the span should be set to countdownNum
            // in order to show the actual countdown

            if (countdownNum === 0) {
                setTimeout(() => newSpan.textContent = "", 1000)
                clearInterval(timer)
                // Once countdownNum has reached 0, the span should 
                // have no text inside of it. because the countdown is now
                // over, but it should be delayed by a second so it doesn't
                // look too abrupt and make the countdown a bit smoother.

                // Once the countdown is over, the interval should clear and
                // stop executing the function.
            }
        }, 1000)
    } else if (setupJoke.length >= 55) {
        countdownNum = 8
        // Set the timer to 8 to account for the one second it takes
        // for the longer jokes to display.

        timer = setInterval(() => {
            countdownNum--
            newSpan.textContent = countdownNum
            // For each second that passes, the number that is used for the
            // countdown should be decremented by one.
            // The text content for the span should be set to countdownNum
            // in order to show the actual countdown

            if (countdownNum === 0) {
                setTimeout(() => newSpan.textContent = "", 1000)
                clearInterval(timer)
                // Once countdownNum has reached 0, the span should 
                // have no text inside of it because the countdown is now
                // over, but it should be delayed by a second so it doesn't
                // look too abrupt and make the countdown a bit smoother. 

                // Once the countdown is over, the interval should clear and
                // stop executing the function.
            }
        }, 1000)
    }

    // Animate Elements

    display.classList.add('animate-display')

    // The above adds a class that will be used for the display to add
    // animations


    askJoke.style.cssText = `
        animation-name: shrink-btn;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-play-state: running;
        animation-fill-mode: forwards;
        `

    // The above code Reduces the font size for the text in the button
    // so it does not compete with the display for the jokes.
    // This is will be done with the use of animations that will be added
    // in the CSS file with the use of keyframes.

})






// SET DISPLAY
body.style.backgroundImage = `linear-gradient(to left, rgb(${color1}), rgb(${color2}), rgb(${color3}), rgb(${color4}), rgb(${color5}))`