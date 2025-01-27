// Import the express module
import express from "express";

// Import controller functions for handling user routes
import { fetch, create, update, deleteUser } from "../controller/userController.js";

// Create a new router instance
const route = express.Router();

// Define routes and their corresponding controller functions
route.post ("/create", create); 
route.get("/getAllUsers", fetch); 
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser); 

export default route;