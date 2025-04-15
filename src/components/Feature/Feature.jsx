import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const Feature = ({ feature }) => {
    return (
        <div className="flex items-center gap-2 pt-3">
            <CircleCheckBig className="text-green-600 w-5 h-5" />
            <p>{feature}</p>
        </div>
    );
};

export default Feature;
