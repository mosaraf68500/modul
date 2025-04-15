import React from 'react';
import Feature from '../Feature/Feature';
// import { Features } from 'tailwindcss';

const PriceingData = ({dat}) => {
    // console.log(dat)
    const {name , price,description,features}=dat;
    return (
        
        <div className='bg-amber-500 p-4 rounded-2xl'>
        {/* card head */}
        <div>
        <h1 className='text-5xl'>{name}</h1>
        <h4 className='text2xl'>{price}</h4>

        </div>

        {/* card body */}
        <div className='bg-red-200 text-black p-4 rounded-md '>
            <p>{description}</p>
            <div className=''>
            {
                features.map(feature=><Feature feature={feature}></Feature>)
            }
            </div>
        </div>

        </div>
    );
};

export default PriceingData;