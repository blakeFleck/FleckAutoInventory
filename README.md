# Front End Practice 

## Part 1 - React Functionality
1. Write a component, Dog, that displays the dog's name, age, and breed, given a dog object as a prop (use the hardcoded data object provided)
2. Write a component, Dog List, that uses the Dog component to display a list of dogs, given an array of dog objects (use the hardcoded data object provided)
3. Modify the Dog component to remove a dog when it is clicked (not interacting with the server, just no longer displayed)
4. Write a component, AddDog, that allows a user to add a dog (for now, just log the added information to the console)

## Part 2 - Connection to the server
1. Refactor the app component to retrieve data from the server, then render the retrieved data on the page
2. Refactor the Dog component to send a request to the server to delete the data when clicked (keep the part where it removes it from display)
3. Refactor the AddDog component to send a request to the server to add the dog


# Server - Front End Practice
Please complete these tasks in order and remember to CONFIRM EACH TASK WORKS before moving on.

## Part 1
1. Create a server that listens on port 3000 and responds to all requests with "Hello World" (see https://expressjs.com/en/starter/hello-world.html for a good starting point)
2. Add a route that will respond with a list of all dogs (use appropriate HTTP verb and endpoint)
3. Confirm, using postman, that your route works as expected and responds to all other requests with "Hello World"
4. Add code to your client (what file is that?) that will display the hardcoded list of dogs provided (Snoopy and Pluto)
5. Fill in the getDogs function to get the list of dogs from the server, then modify your client so that when the page loads, it will get the dogs and display them on the page

## Part 2
6. Add a route that will delete a dog (use appropriate HTTP verb and endpoint)
7. Confirm, using postman, that your route works as expected and that your routes from Step 2 and 1 still work as expected. Refresh your index.html to confirm the dog is *really* gone. 
8. Fill in the deleteDog function in app.js to use the server endpoint from step 6 to delete a dog
9. Test your function in the console to see if it works (remember to refresh the page to make sure the dog is really gone)
10. Add a user interface that will allow a user to delete a dog

## Part 3
11. Add a route that will add a dog to the list of dogs on the server (use appropriate HTTP verb and endpoint) - follow the model of the existing dog object for any new dog that is created
12. Confirm, using postman, that everything works as expected
13. Add code to your client to allow a user to add a dog

...if you get done with everything, here are some ideas:
1. Validate the dog data - how do you know if everything is included?
2. Add bootstrap to make the user interface pleasant to look at
3. Add a way for users to update a dog's age when it has a birthday

