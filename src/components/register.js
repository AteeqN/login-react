import React , {Component} from 'react';
import axios from "axios"
import * as qs from "query-string"
import {Form, Button, Container} from 'react-bootstrap';

class UserRegister extends Component{
  constructor(props){
    super(props)

    this.state = {
      msg: '' ,
      errorStatus : '',
      redirect: false,
      // key : props.location.search.substring(5)
      
    }

  }

 

  handleChange = (event) => {        
    
    this.setState({[event.target.name] : event.target.value});
    // console.log("Data: " + event.target.value);
  }

  handleSubmit(event) {

    event.preventDefault();
    const formData = {};
    var fd = new FormData();
    // fd.append( 'first_name', this.state.name);
    // fd.append( 'last_name', this.state.name);
    // fd.append( 'email_address', this.state.email);
    // fd.append( 'password', this.state.password);
    // fd.append( 'confirm_password', this.state.name);
    // fd.append( 'phone_no', this.state.name);
    

    fd.append( 'first_name', 'ateeq');
    fd.append( 'last_name', 'anwar');
    fd.append( 'email_address', 'ateeq@gmail.com');
    fd.append( 'password', '12345678');
    fd.append( 'confirm_password', '12345678');
    fd.append( 'phone_no', '03236065794');

    // console.log(fd.name);
    for (var key of fd.entries()) {
       
      formData[key[0]] = key[1]
      // console.log(formData)
    }

    const axiosOptions = {

      url: 'http://autoexpress.pk/skincareapi/api/v1/users/signup',
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData)
    }

    // console.log(axiosOptions);
  
    axios(axiosOptions)
      .then(response => {

        // console.log(response);
        if(response.data.status == 0){
            
          this.setState({
              errorStatus : 'error',
              msg:response.data.messgae,
            })
          console.log(alert(this.msg))

        } 
        else {
            // alert("Please Check your Email")
          this.setState({
              errorStatus : 'success', 
              msg:response.data.message,
              
            })
          console.log(alert(this.msg))
        } 
    
      }
    )
      .catch(err =>
        console.log(err)
      )
  }

  render(){
    return(
        
      <>
        <Container>
          <h1> User Register Form </h1>
          <Form method='POST' onSubmit={event => this.handleSubmit(event)}>
            
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name </Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" onChange={this.handleChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Container>
      </>

    )
  }
}

export default UserRegister