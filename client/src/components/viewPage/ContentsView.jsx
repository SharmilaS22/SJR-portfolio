import React from "react";

const ContentsView = ({ title, imageurl, imagealt, content }) => {
    
    return (
      <div style={{ margin: "3rem 0 1rem 0" }}>
        <h1 className=''>{title}</h1>
        <div className='underline mb-5'></div>
        <img
          src={imageurl}
          alt={imagealt}
          style={{ margin: "3rem 0", height: "auto", width: "100%" }}
        />
        <h5 className='mb-4 line-15'>{content}</h5>
      </div>
    );
}

export default ContentsView;