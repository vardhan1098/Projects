import React, { useState } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const Parent = () => {
    const[age,setAge] = useState(0);
    const [salary,setSalary] = useState(7000);



    return (
        <div>
            <Title/>
            <Count/>
            <Count />
            <Button/>
        </div>
    );
};

export default Parent;