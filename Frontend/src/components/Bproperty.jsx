import React from 'react';

function Bproperties(props) {
    return (
        <div className='p-box'>
            <img src={props.image} alt='product'/>
            <p>{props.name}</p>
            <a href='#' className='price'> {props.price}</a>
            <a href='#' className='buy-btn'></a>
        </div>

    )
}

export default Bproperties;