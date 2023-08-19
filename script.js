var data = [
  {
    id: 1,
    mem: `If you are laughing at your wife’s choice, then do remember that you are one of them.`,
  },

  {
    id: 2,
    mem: `Hello, problems. I’m your regular customer, but please give me a break now.`,
  },

  {
    id: 3,
    mem: `It’s not called being lazy; rather, you can say “selective participation.”`,
  },

  {
    id: 4,
    mem: `If only I could get a day between Saturday and Sunday.`,
  },

  {
    id: 4,
    mem: `Don’t say “I LOVE YOU” to your wife. Rather, say no cooking today`,
  },

  {
    id: 5,
    mem: `Try following the quote “be true to yourself” because you are always lying to others.`,
  },

  {
    id: 6,
    mem: `You know you are desperate for an answer when you look at the second page of Google.
        `,
  },

  {
    id: 7,
    mem: `Sorry, I’ve got my Netflix pants on, so I’m in for the night.`,
  },

  {
    id: 8,
    mem: `Dear Lord, please grant me the ability to punch people over the internet.`,
  },

  {
    id: 9,
    mem: `Dear Lord, please grant me the ability to punch people over the internet.`,
  },

  {
    id: 10,
    mem: `I walk around like everything is fine, but deep down, inside my shoe, my sock is sliding off.`,
  },
];

// Accessing the values of display and button
var displayEle=document.getElementById('display') 
var ButtonEle=document.getElementById('btn')

// Function to generate random quotes
function RandomGenerator() {
    let Q=Math.floor(Math.random()*data.length) // Math.floor Removes the floating number(decimal numbers) & write only a single number
    displayEle.innerHTML=data[Q].mem
}

ButtonEle.addEventListener('click',RandomGenerator)