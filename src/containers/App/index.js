import React from "react";
import { useState, useEffect } from 'react'

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import  Services  from '../../components/Services'
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
//import { Navigation } from '../../components/navigation'
import Sliders from '../../components/Header'
import  Features  from '../../components/Features'
import  About  from '../../components/About'
import Projects from '../../components/Gallery'
import Banner from '../../components/banner'
import  Testimonials  from '../../components/Testimonials'
import Footer  from '../../components/Footer'
import Clients  from '../../components/Team'
import JsonData from '../../data/data.json'

function App() {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])
  return (
    <div className="App">
          <Nav />
          <Route path="/" component={Sliders} exact />
          <Route path="/" component={Features} exact />
          <Route path="/" component={Banner} exact />
          <Route path="/" component={About} exact />
          <Route path="/" component={Projects} exact />
          <Route path="/" component={Services} exact />
          <Route path="/" component={Clients} exact />
          <Route path="/" component={Testimonials} exact />
      <Switch>
            
        <Route path="/article/:id" component={Article} exact />
              <Route path="/category/:id" component={Category} exact />
             
              
          </Switch>
          
         
          <Footer />
          
          
    </div>
  );
}

export default App;
