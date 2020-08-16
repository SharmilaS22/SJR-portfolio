import React, { useState } from "react";

import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

import { Paper, Grid, Button } from "@material-ui/core";
import { InsertCommentRounded, FavoriteBorderRounded, FavoriteRounded } from "@material-ui/icons";


const LikeComment = ({ setAlert, likes, comments, id }) => {
  const [liked, setLiked] = useState(false);
  const handleClick = async () => {
    try {
      if (!liked) {
        const { msg, type } = await axios
          .post(`/api/view/like/${id}`)
          .then((response) => response.data)
              .catch((err) => console.log(err));
          setAlert(msg, type);
          if (type === "success") {
              setLiked(true);
          };
      }
    } catch (err) {
      console.log(err);
    }
    };
    return (
      <div>
        <Paper elevation={1} style={{ margin: "3rem 0" }}>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'>
            <Button
              onClick={handleClick}
              color='secondary'
              aria-label='add to favourites'>
                {liked ? <FavoriteRounded /> : <FavoriteBorderRounded />}
              <h4 style={{ margin: "0 1rem" }}>{likes}</h4>
            </Button>
            <Button>
              <InsertCommentRounded color='secondary' />
              <h4 style={{ margin: "0 1rem" }}>
                {comments && comments.length}
              </h4>
            </Button>
          </Grid>
        </Paper>
        {comments &&
          comments.map((comment) => {
            return (
              <div class='card mb-2'>
                <div class='card-body bg-light-theme'>
                  <p>{comment.text}</p>
                </div>
                <div class='card-footer bg-dark-theme text-white py-0'>
                  <div class='row p-0'>
                    <div class='col-md-6'>
                      <p id='time1'>{comment.date}</p>
                    </div>
                    <div class='col-md-6 text-right'>
                      <p>{comment.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
};

LikeComment.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(LikeComment);
