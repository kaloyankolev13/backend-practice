const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  console.log(jokeText);
  const newLi = document.createElement('LI');
  newLi.append(jokeText);
  jokes.append(newLi);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (e) {
    return 'NO JOKE FOR YOU';
  }
};

button.addEventListener('click', addNewJoke);
