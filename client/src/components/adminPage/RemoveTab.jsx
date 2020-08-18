import React, {useState} from "react";

import Search from "./Search";

import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

import kebabCase from "lodash.kebabcase";
import { TableContainer, Table, Paper, TableBody, TableRow, TableCell, Grid } from "@material-ui/core";
import { DeleteRounded } from "@material-ui/icons";

const RemoveTab = ({ setAlert }) => {
    const [poem, setPoem] = useState({
        title: "",
        imageurl: "",
        content: ""
    });
    const handleClick = async (event) => {
        const action = '/api/admin' + kebabCase(poem.title);
        try {
            const { msg, type } = await axios
                .delete(action)
                .then(response => response.data)
                .catch(err => console.log(err));
            setAlert(msg, type);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Search displayPoem={setPoem} />
            <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                    <TableBody>
                        <TableRow>
                            <TableCell component='th' scope='row'>
                                <h5> Title</h5>
                            </TableCell>
                            <TableCell>{poem.title}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope='row'>
                                <h5>Image Link</h5>
                            </TableCell>
                            <TableCell>{poem.imageurl}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope='row'>
                                <h5>Content</h5>
                            </TableCell>
                            <TableCell>{poem.content}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justify='flex-end'>
                <button onclick={handleClick} className='btn btn-outline-primary mt-3'>
                    Remove <DeleteRounded />
                </button>
            </Grid>
        </div>
    );
};

RemoveTab.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(RemoveTab);