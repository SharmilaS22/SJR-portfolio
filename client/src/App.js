import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../src/components/layout/Navbar";
import Contact from "../src/components/layout/Contact";
import AlertBox from "../src/components/layout/AlertBox";

import Home from "../src/components/homePage/Home";

import Comment from "./components/viewPage/Comment";

import { ThemeProvider, Container } from "@material-ui/core";
import Theme from "./Theme";

import {Provider} from "react-redux";
import store from "./store";



function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <Router>
            <div>
              <Navbar />
              <Route exact path='/' component={Comment} />
              <Container maxWidth='md'>
                <Switch>
                  <Route exact path='/work/:id' component={Comment} />
                  <Route exact path='/admin' component={Comment} />
                  <Route exact path='/auth' component={Comment} />
                </Switch>
                <AlertBox />
              </Container>
              {/* <Contact /> */}
            </div>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}
export default App;
