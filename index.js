const quotesArray = [{
    quote: 'Always forgive your enemies; nothing annoys them so much',
    person: 'Oscar Wilde'
},

{
    quote: 'Never go to bed mad. Stay up and fight',
    person: 'Phyllis Diller'
},

{
    quote: 'If you can’t be kind, at least be vague.',
    person: 'Judith Martin'
},

{
    quote: 'Misers are no fun to live with, but they make great ancestors.',
    person: 'Tom Snyder'
},

{
    quote: 'If you want to know what God thinks of money, just look at the people he gave it to.',
    person: 'Dorothy Parker'
},

{
    quote: 'Doing nothing is very hard to do. You never know when you’re finished.',
    person: 'Leslie Nielsen'
},

{
    quote: 'When in doubt, look intelligent.',
    pweson: 'Garrison Keillor'
},

{
    quote: 'Just be good and kind to your children. Not only are they the future of the world, they’re the ones who can sign you into a home.',
    person: 'Dennis Miller'
},

{
    quote: 'A perfect parent is a person with excellent child-rearing theories and no actual children.',
    person: 'Dave Barry'
}, 

{
    quote: 'Instead of getting married again, I’m going to find a woman I don’t like and give her a house.',
    person: 'Rod Stewart'
}, 

{
    quote: 'Behind every great man is a woman rolling her eyes.',
    person: 'Jim Carrey'
},

{
    quote: 'If you can give your child only one gift, let it be enthusiasm.',
    person: 'Bruce Barton'
},

{
    quote: 'If you are not yelling at your kids, you are not spending enough time with them.',
    person: 'Reese Witherspoon'
},

{
    quote: 'Nobody can do for little children what grandparents do. Grandparents sort of sprinkle stardust over the lives of little children.',
    person: 'Alex Haley'   
},

{
    quote: 'The world is extremely interesting to a joyful soul.',
    person: 'Alexandra Stoddard'
},

{
    quote: 'Not in doing what you like but in liking what you do is the secret of happiness.',
    person: 'J.M. Barrie'
}, 

{
    quote: 'To be without some of the things you want is an indispensable part of happiness.',
    person: 'Bertrand Russell'
}, 

{
    quote: 'The older you get the more you realize that kindness is synonymous with happiness.',
    person: 'Lionel Barrymore'
},

{
    quote: 'Happiness makes up in height for what it lacks in length.',
    person: 'Robert Frost'
},

{
    quote: 'Anybody who tells you money can’t buy happiness never had any.',
    person: 'Samuel L. Jackson'
},

{
    quote: 'Don’t wait around for other people to be happy for you. Any happiness you get you’ve got to make yourself.',
    person: 'Alice Walker '
}, 

{
    quote: 'Happiness often sneaks in through a door you didn’t know you left open.',
    person: 'John Barrymore'
},

{
    quote: 'Nobody has ever measured, even the poets, how much a heart can hold.',
    person: 'Zelda Fitzgerald'
},

{
    quote: 'The only thing worse than being talked about is not being talked about.',
    person: 'Oscar Wilde'
},

{
    quote: 'Man is the only animal that laughs and weeps; for he is the only animal that is struck with the difference between what things are and what they ought to be.',
    person: 'William Hazlitt'
},

{
    quote: 'No man who is in a hurry is quite civilized.',
    person: 'No man who is in a hurry is quite civilized.'
},

{
    quote: 'The best index to a person’s character is (a) how he treats people who can’t do him any good, and (b) how he treats people who can’t fight back.',
    person: 'Abigail Van Buren'
},
{
    quote: 'I don’t know why people are so keen to put the details of their private life in public; they forget that invisibility is a superpower.',
    person: 'Banksy'
},

{
    quote: 'Morality is only moral when it is voluntary.',
    person: 'Lincoln Steffens'
}, 
{
    quote: 'A man always has two reasons for doing anything—a good reason and the real reason.',
    person: 'J. Pierpont Morgan'
},
{
    quote: 'The holy passion of friendship is of so sweet and steady and loyal and enduring a nature that it will last through a whole lifetime, if not asked to lend money.',
    person: 'Mark Twain'
},
{
    quote: 'One of the lessons of history is that nothing is often a good thing to do and always a clever thing to say.',
    person: 'Will Durant'
}
]

//console.log(quotesArray.length)

let quote = document.getElementById('quote-section');
let person = document.getElementById('person');
let nextQuoteButton = document.getElementById('next-quote-button');

nextQuoteButton.addEventListener('click', randomQuote)

function randomQuote(){
    let randomQuoteGen = Math.floor(Math.random()*quotesArray.length);

    quote.innerText = quotesArray[randomQuoteGen].quote;
    person.innerText = quotesArray[randomQuoteGen].person;

}

