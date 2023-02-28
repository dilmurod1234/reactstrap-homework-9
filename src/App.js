import { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label
} from 'reactstrap';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Student Data</h2>
        <Form className="form">
          <FormGroup style={{ marginBottom: "30px", marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "left" }}>
              <div style={{ width: "100px", textAlign: "right" }}>
                <Label for="exampleName">Name</Label>
              </div>
              <div style={{ marginLeft: "40px" }}>
                <Input
                  style={{ width: "500px" }}
                  type="text"
                  name="nameText"
                  id="exampleName"
                  placeholder="My Name"
                />
                <FormText>Please enter your first and last name. (required)</FormText>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <div style={{ display: "flex", justifyContent: "left", marginBottom: "30px" }}>
              <div style={{ width: "100px", textAlign: "right" }}>
                <Label for="examplePassword">Password</Label>
              </div>
              <div style={{ marginLeft: "40px" }}>
                <Input
                  style={{ width: "500px" }}
                  type="password"
                  name="password"
                  id="examplePassword"
                />
                <FormText>Password must be five or more characters. (required)</FormText>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <div style={{ display: "flex", justifyContent: "left", marginBottom: "30px" }}>
              <div style={{ width: "100px", textAlign: "right" }}>
                <Label for="exampleCheck">Hobbies</Label>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <div style={{ width: "400px", display: "flex", gap: "50px", marginLeft: "30px" }}>
                  <div>
                    <Input
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheck"
                    />
                    Surfing
                  </div>
                  <div>
                    <Input
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheck"
                    />
                    Running
                  </div>
                  <div>
                    <Input
                      type="checkbox"
                      name="checkbox"
                      id="examplpeCheck"
                    />
                    Biking
                  </div>
                  <div>
                    <Input
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheck"
                    />
                    Paddling
                  </div>
                </div>
                <FormText style={{ marginLeft: "10px" }}>Check zero or more hobbies. (required)</FormText>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <div style={{ display: "flex", justifyContent: "left", marginBottom: "30px" }}>
              <div style={{ width: "100px", textAlign: "right" }}>
                <Label for="exampleRadio">Level</Label>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <div style={{ width: "400px", display: "flex", gap: "50px", marginLeft: "30px" }}>
                  <div>
                    <Input
                      type="radio"
                      name="radio"
                      id="exampleCheck"
                    />
                    Freshman
                  </div>
                  <div>
                    <Input
                      type="radio"
                      name="radio"
                      id="exampleCheck"
                    />
                    Sophomore
                  </div>
                  <div>
                    <Input
                      type="radio"
                      name="radio"
                      id="examplpeCheck"
                    />
                    Junior
                  </div>
                  <div>
                    <Input
                      type="radio"
                      name="radio"
                      id="examplePassword"
                    />
                    Senior
                  </div>
                  <div>
                    <Input
                      type="radio"
                      name="radio"
                      id="examplePassword"
                    />
                    Others
                  </div>
                </div>
                <FormText style={{ marginLeft: "10px" }}>Select your grade level. (required)</FormText>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <div style={{ display: "flex", justifyContent: "left", marginBottom: "30px" }}>
              <div style={{ width: "100px", textAlign: "right" }}>
                <Label for="exampleRadio">GPA</Label>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <div style={{ marginLeft: "10px" }}>
                  <select style={{ width: "500px", padding: "8px", outline: "none" }}>
                    <option value="placeholder">Please select your value</option>
                    <option value="value 1">value 1</option>
                    <option value="value 2">value 2</option>
                    <option value="value 3">value 3</option>
                  </select>
                </div>
                <FormText style={{ marginLeft: "10px" }}>Select your GPA. (required)</FormText>
                <Button style={{marginLeft:"10px", marginTop:"30px", backgroundColor:"blue"}}>Submit</Button>
                <Button style={{marginLeft:"10px", marginTop:"30px"}}>Cancel</Button>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default App;