import React, { useState } from 'react';
import './index.css'; 


export const items = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript library for building user interfaces.',
      },
      {
        title: 'Why use React?',
        content: 'React simplifies the process of building interactive UIs.',
      },
      {
        title: 'How do you use React?',
        content: 'You use React by creating components and using hooks like useState.',
      },
] 
const Accordion = () => {
    const [openIndex,setOpenIndex] = useState(null);

    const handleOpen = (index) =>{
        setOpenIndex(openIndex === index ? null : index)
    }


    return(
        <div>
            <h1>Accordin</h1>
            {
                items.map((post,index)=>(
                    <div key={index}>
                       <div className='accordin-wrapper' onClick={()=>handleOpen(index)}>
                        <h3>{post.title}</h3>
                        <span className='sp'>{openIndex === index ? '-' : '+'}</span>
                       </div>
                      {openIndex === index  && ( <div className='accordin-content'>
                        <h3>{post.content}</h3>
                       </div>)}
                    </div>
                ))
            }
        </div>
    )
}
export default Accordion;
