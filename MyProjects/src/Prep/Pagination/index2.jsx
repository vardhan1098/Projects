import React, { useEffect, useState } from 'react'

function Page() {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    const totalpages = 10;
    const currentPagesItems = currentPage * totalpages;
    const totalItems = Math.floor(posts.length/totalpages)

    const currentItems = posts.slice((currentPage - 1) * totalItems, currentPage * totalItems)


    const fetchingPosts = async() =>{
        setLoading(true)
        try {
            const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
            if(!apiResponse.ok){
                throw new Error("Network is Failed...")
            }
            const data = await apiResponse.json();
            setLoading(true);
            setPosts(data);
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

useEffect(()=>{
    fetchingPosts()
},[])

const handleChangePost = (Page)=>{
    setCurrentPage(Page)
}

  return (
    <div style={{display:"flex",flexDirection:"column", gap:"5px", minWidth:"700px"}}>
        {
            currentItems.map((post)=>(
                <div key={post.id} style={{border:"1px solid black"}}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            ))
        }
        <div >
            {Array.from({length:totalpages}, (_,index)=> index+1).map((postNum)=>(
                <button key={postNum} onClick={()=>handleChangePost(postNum)}
                style={{disabled:true}} disabled={currentPage === postNum}>
                    {postNum}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Page