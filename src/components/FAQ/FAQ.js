import React from 'react';
import Container from '../Container/Container';
import {dataFAQ} from '../../data/dataStore';

class FAQ extends React.Component {
  render() {
    return (
      <Container >
        <h2>{dataFAQ.title}</h2>
        <p>{dataFAQ.content}</p>  
      </Container>   
    );
  }
}

export default FAQ;