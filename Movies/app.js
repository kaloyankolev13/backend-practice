let form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  console.log('Submitted');
  const keyword = form.elements.query.value;
  const config = { params: { q: keyword } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  addImages(res.data);
});
const addImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
