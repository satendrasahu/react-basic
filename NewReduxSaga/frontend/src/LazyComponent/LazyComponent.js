import React from 'react';

const LazyComponent = () => {
    for(let i =0 ; i<=1000000000;i--)
    return (
        <div>
            Lazy Component!
        </div>
    );
};

export default LazyComponent;