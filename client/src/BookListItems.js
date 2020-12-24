import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from '././aws-exports';
import createUserGoogleBooks from './graphql/mutations';
import axios from 'axios';
import Auth from '@aws-amplify/auth';

function getUserInfo() {
  let user =  Auth.user.username;
  return user;
}

const BookListItems = ({ userId, bookId,thumbnail,title,pageCount,language,description,authors,publisher,previewLink,infoLink,marUnFav
    }) => {
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const userInfo = getUserInfo();

  const[buttonStyle, setButtonStyle] = useState(marUnFav ? true : false);
  const changeStyle = () => setButtonStyle(!buttonStyle);


  const markFavorite = (e) => {
    
    try {
      axios.post('http://localhost:3003/api/addUserBook', {
        bookId : bookId,
        thumbnail : thumbnail,
        title:title,
        pageCount:pageCount,
        language:language,
        description:description,
        authors:authors,
        publisher:publisher,
        previewLink:previewLink,
        infoLink:infoLink,
        userId:userInfo
      }).then( () => {
          console.log('ADDED');
          //console.log(e.target);
          setButtonStyle( true );
        
        }

      )

    } catch(error) {
        console.log('Failed to add the book', error );
    }

  }

  const markUnFavorite =()=> {
    try {
      axios.delete('http://localhost:3003/api/deleteUserBook',
        {
          params: { bookId: String(bookId), userId:String(userInfo) }
        })

     // axios.delete('http://localhost:3003/api/deleteUserBook', { data: { bookId: bookId,userId:userInfo } })
      .then( () => {
          console.log('Deleted');
          setButtonStyle( false );
        }
      )
    } catch(error) {
        console.log('Failed to delete the book', error );
    }
  }

  return (

    <Card style={{ width: '300px' }} className='m-auto '>
      <CardImg top style={{ width: '100%', height: '233px' }} src={thumbnail} alt={title} />
      <CardBody>
        <CardTitle className='card-title'>{title}</CardTitle>
        <div class="btn-group mr-2"> 
        <button class="btn btn-primary" onClick={toggle}>More info</button></div>
        <div class="btn-group mr-2"><button class="btn btn-success" id={bookId} onClick={ buttonStyle ? markUnFavorite : markFavorite }  >{buttonStyle ? 'UnFavorite' :'Favorite' }</button></div>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
          <button aria-label='Close' className='close' type='button' onClick={toggle} >
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between ml-3'>
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Language : {language}</p>
              <p>Authors : {authors}</p>
              <p>Publisher : {publisher}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
        <div className='modal-footer'>
          <div className='left-silde'>
            <a href={previewLink} className='btn-link' color='default' type='button' target='_blank' rel='noopener noreferrer'>
              Preview Link
            </a>
          </div>
          <div className='divider'></div>
          <div className='right-silde'>
            <a href={infoLink} className='btn-link' color='default' type='button' target='_blank' rel='noopener noreferrer'>
              Info Link
            </a>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default BookListItems;