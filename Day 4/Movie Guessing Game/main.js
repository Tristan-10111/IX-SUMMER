const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},

    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},

    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},

    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},

    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},

    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},

    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},

    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},

    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]



// referencing my html elements by Id as single element selectors
const guessAnswer = document.getElementById('guessAnswer');
const form = document.getElementById('form');
const hintButton = document.getElementById('btn');

const guess = document.getElementById('result');
const hint = document.getElementById('result2');

const movieExplination = document.getElementById('title');



// Math.floor to round of to the nearest integer, Math.random returns a random number between 0 incl an 1 excl
const randomMovie = Math.floor((Math.random()* 11 ));
const movieguess = movies[randomMovie];

movieExplination.innerHTML = movieguess.explanation // dislplay a new movie discription every time refreshed referencing back to the empty p tag wih the id of title




form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(guessAnswer == movieguess.title){// not sure why if does not want to render
    guess.innerHTML = "Correct Answer !";
    guess.classList.add('alert');
    guess.classList.add('alert-success');
    }//else{
    //     guess.innerHTML = "Incorrect !";
    //     guess.classList.add('alert');
    //     guess.classList.add('alert-danger')
    //  } // the else renders incorrect thats why i commented it out
})


// button to show hints on the movies array
hintButton.addEventListener('click', (e) =>{
    hint.innerHTML = movieguess.hint;
    hint.classList.add('alert');
    hint.classList.add('alert-warning')
} )






