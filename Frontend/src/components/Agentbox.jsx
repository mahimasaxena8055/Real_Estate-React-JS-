import React from 'react';

function Agentbox(props){
    return(
        
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=''/>
            </div>
            <div className='a-b-text'>
                 <h3>{props.name}</h3>
                <a href='#' className='agent-btn'>Learn More</a>
            </div>
        </div>
    )
}

export default Agentbox;