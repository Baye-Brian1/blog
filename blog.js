const blogDetail = document.querySelector('.blogdetail');
const URL = 'https://jsonplaceholder.typicode.com/posts/';

getData();
async function getData() {
  var query = new URLSearchParams(window.location.search);
  var parameter = Object.fromEntries(query.entries());
  var data = await fetch(URL + parameter.id);
  var blogd = await data.json();

  blogDetail.innerHTML = `
    <h2>${blogd.title}</h2>
    <article>${blogd.body}</article>`;
    
}