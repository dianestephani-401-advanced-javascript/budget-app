import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExpenseForm(props){

  function callToForm(object){
    props.makePost(object);
  }

  const [item, setItem] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    callToForm(item);
    console.log('handleSubmit item console log', item);
    e.target.reset();
  }

  const handleChange = (e) => {
    setItem({...item, [e.target.name] : e.target.value});
  }

  useEffect( () => {
    setItem({...item, difficulty : 3, complete : false })
  }, [])

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="item">
        <Form.Label>Amount Spent</Form.Label>
  
        <Form.Control name="text" type="text" placeholder="Enter amount" onChange={handleChange} required/>
  
        {/* <Form.Text className="text-muted"></Form.Text> */}
  
      </Form.Group>
  
      <Form.Group controlId="expenseCategory">
        <Form.Label>Category</Form.Label>
  
        <Form.Control name="category"  as="select" onChange={handleChange}  required>
          <option>Rent and Utilities</option>
          <option>Groceries</option>
          <option>Transportation</option>
          <option>Treat Yo Self</option>
        </Form.Control>
  
      </Form.Group>
  
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
  
    </Form>
  )

}

export default ExpenseForm;