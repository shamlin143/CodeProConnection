import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  getProjects:  function() {
    // Todo - will need to pull all pending project from database
   return  axios.get('/api/projects');
            
  },
  saveUser: (value) => {
    console.log('api call')
    console.log(value)
    return axios.post("/api/users", value);
  }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
}