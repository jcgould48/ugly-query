const headline = document.querySelector('h1');

headline.style.fontFamily = "Impact,ComicSansMs,sans-serif";
headline.style.color = 'brown';
headline.style.textShadow = '22px 2px 5px green';
headline.style.letterSpacing= '-30px';

const paragraph = document.querySelector('p');
paragraph.style.color = 'pink'
paragraph.style.fontSize = '50px'
paragraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const h3 = document.querySelector('h3');
h3.style.color = 'lightBlue'
h3.style.fontSize= '50px'


const body = document.querySelector('body');
body.style.backgroundImage = "url('https://media.giphy.com/media/xxVMim5UWleHC/giphy.gif')";

const item1 = document.querySelectorAll('#item-1');
item1[1].style.fontSize = '60px'
item1[0].style.color = "red"
item1[1].style.color = "red"
item1[0].style.fontSize = '60px'

const item2 = document.querySelectorAll('#item-2');
item2[0].style.color = "green"
item2[0].style.fontSize = '6px'
item2[1].style.color = "green"
item2[1].style.fontSize = '6px'
const item3 = document.querySelectorAll('#item-3');
item3[0].style.color = "yellow"
item3[1].style.color = "yellow"
const item4 = document.querySelectorAll('#item-4');
item4[0].style.color = "aqua"
item4[0].style.fontSize = '100px'
item4[1].style.color = "aqua"
item4[1].style.fontSize = '100px'
const item5 = document.querySelectorAll('#item-5');
item5[0].style.color = "maroon"


const buttondiv = document.createElement('div');
buttondiv.innerText = 'I love buttons'
buttondiv.style.backgroundColor = 'blue'
buttondiv.style.fontSize = '50px'
const button = document.querySelector('button')
button.appendChild(buttondiv);
