import React from "react";

import { Link } from "react-router-dom";
import TrendingFlatSharpIcon from "@material-ui/icons/TrendingFlatSharp";
import { Button } from "@material-ui/core";

const Card = ({ title, imageurl, imagealt, content, time, id }) => {
  return (
    <div className='card adjust-width my-2 shadow'>
      <img className='card-img-top' src={imageurl} alt={imagealt} height={50} width={50} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{time}</h6>
        <p className='card-text'>{content + "..."}</p>
        <Button color='primary'>
          <Link to={`/work/${id}`} className='class-link'>
            Read More <TrendingFlatSharpIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Card;