import React, { useEffect, useState } from 'react'

function Pratice() {
    const [posts,setPosts] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    const [currentItems,setCurrentItems] = useState(1);
    const totalpages = 10;

    const totalItemsPerpages = Math.floor(posts.length/totalpages);

    const currentPosts =  posts.slice(currentItems - 1 * totalpages, currentItems * totalpages);
console.log(currentPosts);


    const fetchingApi = async()=>{
        setLoading(true)
       try {
        const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!apiResponse.ok){
            throw new Error("Network is Failed..")
        }
        const data = await apiResponse.json();
        setLoading(true)
        setPosts(data)
       } catch (error) {
        setError(error.message)
       }finally{
        setLoading(false)
       }
    } 

    useEffect(()=>{
        fetchingApi()
    },[])

  return (
    <div>
        {
            currentPosts.map((post,idx)=>(
                <div key={idx} style={{border:"1px solid black",height:"200px",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                    <h3>{post.id}-{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Pratice