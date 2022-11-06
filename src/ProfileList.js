import React from "react"
import Profile from "./Profile"

const ProfileList=({ items }) =>{
    return(

     
        <div className="cardlayout">
          {items.map((item) => (
            <Profile key={item.id} {...item} />
            
          ))}
        </div>
      )
    }
    
export default ProfileList;