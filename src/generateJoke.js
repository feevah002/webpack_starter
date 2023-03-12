import axios from 'axios'
async function generateJoke(){
  const response = await axios.get('https://icanhazdadjoke.com', {
    headers:{
      Accept:'application/json'
    }
  })
  .then(res=> res)
  const joke = await response.data.joke
  document.getElementById('joke').innerHTML = joke
}

export default generateJoke