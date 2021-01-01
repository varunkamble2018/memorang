import React, { useState, useEffect }  from 'react';
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import Auth from '@aws-amplify/auth';

import Books from '../../Books';
import BookListItems from '../../BookListItems';


function getUserInfo() {
  let user =  Auth.user.username;
  return user;
}

export default function Home() {

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const userInfo = getUserInfo();
  
  useEffect(() => {
    console.log(userInfo);
    handleSearch(userInfo);
    
  },[]);

  const handleSearch = (userInfo) => {
    setLoading(true);
    
    axios
      .get( 'https://b8opj6fxhg.execute-api.us-west-2.amazonaws.com/production/api/getUserBooks', {
          params: {
            userId:userInfo
          }
          
        } )
      .then(res => {
          
         setBooks(res.data);
         console.log(res.data);
         setLoading(false); 
      });
  
  };

  const items = books.map((item, i) => {
    let thumbnail = '';
    if (item.thumbnail) {
      thumbnail = item.thumbnail;
    }

    return (
      <div className='col-lg-4 mb-3' key={item.id}>
        <BookListItems
          //userId={userId}
          bookId={item.googleBookId}  
          thumbnail={thumbnail}
          title={item.title}
          pageCount={item.pageCount}
          language={item.language}
          authors={item.authors}
          publisher={item.publisher}
          description={item.description}
          previewLink={item.previewLink}
          infoLink={item.infoLink}
          marUnFav={1}
        />
      </div>
    );
  });

  return (
    
    <div className='w-100 h-100'>
      <h3>Favorite Books</h3>
      <div className='container my-5'>
          <div className='row'>{items}</div>
        </div>
      <ToastContainer />
    </div>
  );
}