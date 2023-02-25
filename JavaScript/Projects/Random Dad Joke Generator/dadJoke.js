// SELECT ELEMENTS
const body = document.querySelector('body')
const display = document.querySelector('#display')
const askJoke = document.querySelector('#ask')


// Variables
let num

// The variable num has been created and will be initiallized to a value
// later on in the code.





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



// Select Joke
const getJoke = function() {
    display.style.color = "black"
    display.style.fontSize = '2.5rem'
    
    return question[num]
}
const showJoke = function() {
    display.style.color = "black"
    display.style.fontSize = '4rem'
    
    return answer[num]
}





// EVENT LISTENERS
askJoke.addEventListener('click', function() {
    num = Math.floor(Math.random() * 30)
    // num has been initialized to a random number that is used inside the
    // getJoke() and showJoke() function expressions and is used to access
    // the values from the question and answer objects above in a random.
    // manner so the jokes do not appear in the same order every time a user
    // clicks the askJoke button.

    display.style.display = "flex"

    setTimeout(() => display.textContent = getJoke()
    , 500)
    // Show the question half a second after the display pops up on the 
    // screen.

    setTimeout(() => display.textContent = showJoke()
    , 5500)
    // Show the answer 5 seconds after the question appears.

    // const countdown = [
    //     '5', '4', '3', '2', '1'
    // ]

    // Append a span to the top right hand corner of the display and 
    // set those numbers as the text content for the span as a countdown
    // using setInterval().
    
})






// SET DISPLAY
body.style.backgroundImage = `linear-gradient(to left, rgb(${color1}), rgb(${color2}), rgb(${color3}), rgb(${color4}), rgb(${color5}))`




// USE SET INTERVAL FOR THE TIMER BETWEEN JOKES
// CONSIDER SPECIAL ADDITIONAL TIME FOR QUESTIONS WITH LONGER STRING
    // (SPECIFY LENGTH)
// REMOVE THE RANDOM COLOR BACKGROUND FOR THE DISPLAY