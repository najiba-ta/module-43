// const getPosts =async () =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//    return res.json();
// }

// const getPosts =async () =>{
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//    return res.json();

//     }
//     catch{
//       throw new Error ('Faild to fecth posts')
//     }
// }
const getPosts =async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw new Error ('Faild to fetch post')
      
    }
   return await res.json();
}
const PostsPage = async () => {
    // const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    //     const post = await res.json();
    const post = await getPosts();
    return (
        <div>
            <h2>Post : {post.length}</h2>
        </div>
    );
};    
// emniiii valla

export default PostsPage;