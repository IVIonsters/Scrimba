// Instructions for React Challenges:
// Create a new React app using npx create-react-app or npm create vite@latest.
// Add each challenge in its own component file (e.g., Greeting.jsx, Counter.jsx).
// Import the component into your App.js (or main file) and test it.
// Uncomment test cases as needed and modify the components to solve the challenge.

// ===============================
// React Basics Challenges
// ===============================

// Challenge 1: Create a Simple Component
// Create a functional component called `Greeting` that renders a heading with the text "Hello, React!".
// Export the component so it can be used in other files.
function Greeting() {
  // Your code here
  return null; // Placeholder
}

// Test case: Render <Greeting /> in your App.js or main component.

// Challenge 2: Pass Props to a Component
// Create a component called `Welcome` that accepts a `name` prop
// and renders "Welcome, {name}!" in a paragraph tag.
function Welcome(props) {
  // Your code here
  return null; // Placeholder
}

// Test case: Render <Welcome name="Zachary" /> and expect to see "Welcome, Zachary!"

// Challenge 3: Handle State with useState
// Create a component called `Counter` with a button.
// Clicking the button should increase the count and display the current count.
import React, { useState } from "react";

function Counter() {
  // Your code here
  return null; // Placeholder
}

// Test case: Render <Counter /> and ensure clicking the button increments the count.

// Challenge 4: Render a List
// Create a component called `TodoList` that renders an unordered list (<ul>)
// of todo items. The list of todos should be passed as a prop named `items`.
function TodoList(props) {
  // Your code here
  return null; // Placeholder
}

// Test case: Render <TodoList items={['Learn React', 'Build a Project']} />

// Challenge 5: Conditional Rendering
// Create a component called `LoginStatus` that takes a prop `isLoggedIn`.
// If `isLoggedIn` is true, render "Welcome back!" Otherwise, render "Please log in."
function LoginStatus(props) {
  // Your code here
  return null; // Placeholder
}

// Test case: Render <LoginStatus isLoggedIn={true} /> or <LoginStatus isLoggedIn={false} />

// Challenge 6: Event Handling
// Create a component called `ClickLogger`. Render a button that logs "Button clicked!"
// to the console when clicked.
function ClickLogger() {
  // Your code here
  return null; // Placeholder
}

// Test case: Render <ClickLogger /> and ensure the console logs when the button is clicked.

// Challenge 7: Fetch Data (Mock API)
// Create a component called `UserList` that fetches and displays a list of users
// from the placeholder API https://jsonplaceholder.typicode.com/users.
// Show the user names in a list.
import React, { useEffect, useState } from "react";

function UserList() {
  // Your code here
  return null; // Placeholder
}

// Test case: Render <UserList /> and ensure the list of users is displayed after fetch.

// Challenge 8: Form Handling
// Create a component called `SimpleForm` with an input field and a submit button.
// Display the input value below the form when the user types.
function SimpleForm() {
  // Your code here
  return null; // Placeholder
}

// Test case: Render <SimpleForm /> and ensure input updates the displayed text below.

