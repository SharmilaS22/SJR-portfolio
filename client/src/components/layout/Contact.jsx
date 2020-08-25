import React from "react";

import { TextField, Grid, Paper } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import axios from "axios";

const Contact = () => {
    const [client, setClient] = React.useState({
      name: "",
      email: "",
      message: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setClient(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    }
    const { name, email, message } = client;
    const handleSubmit = (event) => {
        event.preventDefault();    
        setClient({
          name: "",
          email: "",
          message: "",
        });
    }
  return (
    <div className='conatainer-fluid padding-10-15-0-15' id='contact'>
      <div className='text-center'>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Paper className='padding-3-5'>
            <h3 className='text-secondary-theme'>Get in touch</h3>
            <form action='/api/client' method='POST' onSubmit={handleSubmit}>
              <Grid>
                <TextField
                  id='input-name'
                  label='Name'
                  color='secondary'
                  style={{ marginBottom: "0.5rem" }}
                  onChange={handleChange}
                  name='name'
                  value={client.name}
                />
              </Grid>
              <Grid>
                <TextField
                  id='standard-basic'
                  label='email'
                  color='secondary'
                  style={{ marginBottom: "0.5rem" }}
                  onChange={handleChange}
                  name='email'
                  value={client.email}
                />
              </Grid>
              <Grid>
                <TextField
                  id='oultined-multiline-static'
                  label='Message'
                  variant='outlined'
                  color='secondary'
                  fullWidth
                  rows={4}
                  style={{ marginBottom: "0.5rem" }}
                  multiline
                  onChange={handleChange}
                  name='message'
                  value={client.message}
                />
              </Grid>
              <Grid>
                <button type='submit' className='btn btn-outline-primary mt-3'>
                  Send <SendIcon />
                </button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};
export default Contact;
