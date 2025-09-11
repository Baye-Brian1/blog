const URL='https://jsonplaceholder.typicode.com/posts';
const blog= document.querySelector('.posts')
 
const displayBlog = async () =>{
    const person= await fetch(URL);
     const blog= await person.json();
      showData(blog);
};

displayBlog();
const showData= async (blogData) =>{
  blogData.forEach(item => {
    let blogg=document.createElement('div');
    blogg.classList.add('post');
    blogg.innerHTML=`
    <h3>${item.title}</h3>
    <p>${item.body}</p>`
    blog.appendChild(blogg);
  });
  
};