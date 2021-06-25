import React from "react";


function Leagues ({title,body,logoUrl}) {
    return (
        <div className='leagues-card'>
          <div className='logo-image'>
              <img src={logoUrl} alt=''/>
          </div>
          <div className='league-card'>
            <div className='leagues-title'>
              <h2>{title}</h2>
            </div>
            <div className='leagues-body'>
              <p>{body}</p>
            </div>

          </div>
         
          <div className='btn'>
              <button>
                <a>
                   Click here to view all Leagues 
                </a>
              </button>
          </div>
        </div>
    
    ) 
};

export default Leagues;
