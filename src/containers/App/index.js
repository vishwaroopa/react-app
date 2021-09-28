import React from "react";
import { useState, useEffect } from 'react'

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Search from "../../components/Search";
import  Services  from '../../components/Services'
import Articles from "../Articles";
import Article from "../Article";
import Job from "../Job";
import Category from "../Category";
//import { Navigation } from '../../components/navigation'
import Sliders from '../../components/Header'
import  Features  from '../../components/Features'
import  About  from '../../components/About'
import Projects from '../../components/Gallery'
import Banner from '../../components/Banner'
import Banner1 from '../../components/Banner1'
import Testimonials from '../../components/Testimonials'
import Jobs from '../../components/Jobs'
import Footer  from '../../components/Footer'
import Clients  from '../../components/Team'
import Email from '../../components/Contact'
import Resumes  from '../../components/Resumes'

function App() {
  return (
    <div className="App">
          <Nav />
          <Route path="/" component={Sliders} exact />
          <Route path="/" component={Features} exact />
          <Route path="/" component={Banner} exact />
          <Route path="/" component={About} exact />
          <Route path="/" component={Projects} exact />
          <Route path="/" component={Services} exact />
         
      <Switch>
              <Route path="/menu/contact-us" component={Email} exact />
              <Route path="/content/contact-us" component={Email} exact />
              <Route path="/content/jobs" component={Jobs} exact />
              <Route path="/content/search" component={Search} exact />
              <Route path="/content/submit-resume" component={Resumes} exact />
              <Route path="/content/:id" component={Article} exact />
              <Route path="/jobs/:id" component={Job} exact />
              <Route path="/menu/:id" component={Category} exact />
             
              
          </Switch>
          
         
          <Footer />
          
          
    </div>
  );
}

export default App;
