import React from 'react';
import {InputGroup,Input,InputGroupAddon,Button,FormGroup,Label,Spinner,Navbar,Nav} from 'reactstrap';

const Header = (props) => { 
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        <div className='filter'></div>
        <h1 className='display-2 text-center text-white mb-3' style={{ zIndex: 2 }}>
          Google Books
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
          <InputGroup size='lg' className='mb-3'>
            <Input placeholder='Book Search' value={props.query} onChange={e => props.setQuery(e.target.value)} />
            <InputGroupAddon addonType='append'>
              <Button color='secondary' onClick={props.handleSearch}>
                <i className='fas fa-search'></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
         
        </div>
      </div>
    );
  };

export default Header;