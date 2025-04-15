import React, { use } from 'react';
import PriceingData from '../PriceingData/PriceingData';

const PriceingOption = ({datas}) => {
    const data=use(datas);
    // console.log(data)
    return (
        
        <div>
        <h1>Get Our Membership...</h1>
       <div className='grid md:grid-cols-3 gap-8 '>
       {
            data.map(dat=><PriceingData dat={dat} key={dat.id}></PriceingData>)
        }
       </div>

        </div>
    );
};

export default PriceingOption;