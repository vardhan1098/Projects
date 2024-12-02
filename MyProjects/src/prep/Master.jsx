import React, { useState } from 'react';
import Modal from './Modal/Modal';

const Master = () => {
    const [isModal,setIsModal] = useState(false);

    const handleOpen = () =>{
        setIsModal(!isModal)
    }
    const handleConfirm = () => {
        alert('Data saved successfully!');
        setIsModal(false); // Close the modal after confirmation
    }; 
    return (
        <div>
            <button onClick={handleOpen}>Modal</button>
           {isModal && <Modal  title ="Hi World" content = "Custom Content" confirm = {handleConfirm}/>}
        </div>
    );
};

export default Master;