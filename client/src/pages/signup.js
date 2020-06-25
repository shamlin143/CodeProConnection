import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1> Login</h1>
            </Jumbotron>
            {/* <form>
              <Input
                onChange={handleInputChange}
                name="Username"
                placeholder="Username (required)"
              />
              <Input
                onChange={handleInputChange}
                name="Password"
                placeholder="Password (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="CodeProConnection (CPC)
                Brought to you by the Silver Foxes Group This is an app that will allow a freelancer to be connect with people that have coding jobs they need completed.
                I have a coding project that I need someone to complete. Where can I go to find potential candidates. CPC is a website that provides the projects to many possible applicants for a small fee. I am a freelancer looking for paying coding projects. Where can I go to find project possibilities. CPC is a website that brings coding projects to the freelancers attention."
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Login
              </FormBtn>
            </form> */}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Sign up</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="Username"
                placeholder="Username (required)"
              />
              <Input
                onChange={handleInputChange}
                name="Password"
                placeholder="Password (required)"
              />

                <Input
                onChange={handleInputChange}
                name="email address"
                placeholder="email address(required)"
              />             
               <TextArea
                // onChange={handleInputChange}
                name="synopsis"
                placeholder="CodeProConnection (CPC)
                Brought to you by the Silver Foxes Group This is an app that will allow a freelancer to be connect with people that have coding jobs they need completed.
                I have a coding project that I need someone to complete. Where can I go to find potential candidates. CPC is a website that provides the projects to many possible applicants for a small fee. I am a freelancer looking for paying coding projects. Where can I go to find project possibilities. CPC is a website that brings coding projects to the freelancers attention."
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Sign Up
              </FormBtn>
            </form>
            {/* {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>Sign UP</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }


export default SignUp;