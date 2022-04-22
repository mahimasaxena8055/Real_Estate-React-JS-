import React from 'react';
import Agentbox from './Agentbox';
import agentimage1 from '../images/s1.png';
import agentimage2 from '../images/s2.png';
import agentimage3 from '../images/s3.png';

function Agent(){
    return(
        <div className='agent'>
            <div className='a-heading'>
                <h1>Agent</h1>
                <p> Our local experts will guide you on your journey.</p>
            </div>
            <div className='b-container'>
                <Agentbox image={agentimage1} name="Rehman" />
                <Agentbox image={agentimage2} name="Saurabh" />
                <Agentbox image={agentimage3} name="Mahi" />
            </div>
        </div>
        
    )
}

export default Agent;