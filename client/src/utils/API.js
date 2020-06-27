import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  getProjects: async function() {
    // Todo - will need to pull all pending project from database
   return {
      
      freelancerCredentials: "Javascript",
      freelancerExperience: "2 years",
      employerProjectId: "123456789123",
      employerProjectDesc: "I need a website",
      employerFee: "100",
      date: "6-27-2020"
    }
  }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
