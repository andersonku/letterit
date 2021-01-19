import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form className="mb-2" onSubmit={(e : React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <label htmlFor="#letter">Write your letter:</label>
          <Form.Control as="textarea"
              id="#letter"
          />
          <Button disabled variant="outline-info">Reset</Button>
          <Button disabled variant="outline-info">Send</Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
