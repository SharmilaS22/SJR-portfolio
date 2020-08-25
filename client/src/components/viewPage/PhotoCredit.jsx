import React from "react";
import { Paper } from "@material-ui/core";

const PhotoCredit = ({name}) => {
    return <Paper elevation={2}>Photo by {name} in Unsplash.</Paper>;
};
export default PhotoCredit;