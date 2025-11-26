let heading = document.querySelector('h1')
heading.textContent = "Philosophy"


let q1 = document.getElementById('quote1');
let p = document.createElement('p') // creates a p tag
p.className ="mt-2";
p.textContent = " In Symposium, Socrates relates Diotima’s teaching:\n\"He who has been instructed thus far in the things of love, and who has learned to look upward, will suddenly perceive a nature of wondrous beauty; and that is the Love of the Beautiful itself, absolute and everlasting, not a form of one generation and one species of mortal creatures but unchanging and eternal...\" — Plato, Symposium, translated by Benjamin Jowett";


q1.appendChild(p);