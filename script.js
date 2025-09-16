const URL='https://jsonplaceholder.typicode.com/posts';
const blog= document.querySelector('.posts');
const load= document.getElementById('load');
let currentStart = 0;
const limit = 20;
 

const displayBlog = async () => {
  load.style.display = 'block';
  setTimeout(async () => {
    const response = await fetch(`${URL}?_start=${currentStart}&_limit=${limit}`);
    const blogData = await response.json();
    showData(blogData);
    load.style.display = 'none';
  }, 5000);
};

displayBlog();

const showData = (blogData) => {
  blogData.forEach(item => {
    let blogg = document.createElement('div');
    blogg.classList.add('post');
    blogg.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <a href="blog.html?id=${item.id}">Read More...</a>`;
    blog.appendChild(blogg);
  });
  currentStart += limit;
};
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    displayBlog();
  }
});