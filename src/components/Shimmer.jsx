import React from 'react'

const Shimmer = () => {
    <div className="restaurant-list" >
      
        {Array(30)
          .fill("")
          .map((e) => (
            <div  className="shimmer-card"></div>
          ))}
      </div>
}

export default Shimmer