const URL='https://jsonplaceholder.typicode.com/posts';
const blog= document.querySelector('.posts')
const load= document.getElementById('load')
 
const displayBlog = async () =>{
    const person= await fetch(URL);
     const blog= await person.json();
      showData(blog);
      if (!showData) {
        load.style.display='block';
      } else {
         load.style.display='none';
      }
};

displayBlog();
const showData= async (blogData) =>{
  blogData.forEach(item => {
    let blogg=document.createElement('div');
    blogg.classList.add('post');
    blogg.innerHTML=`
    <h3>${item.title}</h3>
    <p>${item.body}</p>
    <a href="blog.html?id=${item.id}">Read More...</a>`
    blog.appendChild(blogg);
  });
  
};