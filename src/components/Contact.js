import React from 'react';
import './Contact.css';

const name = "Gloria Henry";
const avatar = "https://randomuser.me/api/portraits/women/56.jpg " ;
const onLine = true;  


function Contact(){
    return(
        <div className="Contact">
            <img className="avatar" src={avatar} alt= "profil"/>
            <div>  
               <div className="name">{name}</div>  
               <div className="status">
                  
                  <p className="status-text">{onLine? <div className="status-online"></div>: <div className="status-offline"></div>}</p>
                  <p className="status-text">{onLine? "online":"offline"}</p>
            </div>

             
        </div>
          
        
        
    
        </div>
    )
}
export default Contact;