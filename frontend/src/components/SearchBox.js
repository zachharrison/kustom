import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        className='mr-sm-2 ml-sm-5'
        type='text'
        name='q'
        placeholder='Search Kustom'
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>
      {/* <Button type='submit' className='btn'>
        <i className='fas fa-search'></i>
      </Button> */}
    </Form>
  );
};

export default SearchBox;
