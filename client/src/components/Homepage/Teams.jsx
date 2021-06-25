import React from "react";


function Teams ({title,body,logoUrl}) {
    return (
        <div className='teams-card'>
          <div className='logo-image'>
              <img src={logoUrl} alt=''/>
          </div>
          <div className='team-card'>
            <div className='teams-title'>
              <h2>{title}</h2>
            </div>
            <div className='teams-body'>
              <p>{body}</p>
            </div>

          </div>
         
          <div className='btn'>
              <button>
                <a>
                   Click Here to view all Teams  
                </a>
              </button>
          </div>
        </div>
    
    ) 
};

export default Teams;
