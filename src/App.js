import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Container} from 'reactstrap';
import FetchTest from './components/FetchTest'

function App() {
  return (
    <Container>
      <FetchTest />
    </Container>
  );
}

export default App;
