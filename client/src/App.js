import React, { useState, Component } from 'react';
import './App.css';

import axios from 'axios';
import {Spinner} from 'reactstrap';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/pages/Search';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default withAuthenticator(App)

//export default App;


/*
function App() {

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      )
      .then(res => {
         setBooks(res.data.items);
         setLoading(false); 
      });
  
  };

  /*return (
    <div className='w-100 h-100'>
      
      <Header query={query} handleSearch={handleSearch} setQuery={setQuery} />
      <Books loading={loading} books={books}/>
      <ToastContainer />
    </div>
  );

} */

//export default App;