import React, { useState }  from 'react';
import '../../App.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import Header from '../../Header';
import Books from '../../Books';

export default function Search() {

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
         console.log(res.data.items);
         setLoading(false); 
      });
  
  };

  return (
    
    <div className='w-100 h-100'>
      
      <Header query={query} handleSearch={handleSearch} setQuery={setQuery} />
      <Books loading={loading} books={books}/>
      <ToastContainer />
    </div>
  );
}