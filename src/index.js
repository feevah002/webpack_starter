import generateJoke from './generateJoke';
import './styles/main.scss'
import laughing from './asset/laughing.svg'


const laughImg = document.getElementById('laughing').src = laughing

generateJoke()
document.getElementById('jokeBtn').addEventListener('click', generateJoke)