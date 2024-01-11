/* fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data));


const appElement = document.getElementById("app");

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
} */

const URL ="https://dog.ceo/api/breeds/image/random";
    async function getData(URL){
        try{
         const response = await fetch(URL);
        console.log(response);
         const data = await response.json();
         console.log(data);
         } catch (error) {
          console.log(error)
         }
    }