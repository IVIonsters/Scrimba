// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnbCastle = {
  name: "Castle Black",
  location: "The Wall",
  price: 1000,
  amenities: ["heating", "wifi", "cable"],
  isAvailable: true
}

console.log(airbnbCastle.name);
console.log(airbnbCastle.price);
console.log(airbnbCastle.isAvailable);

console.log('---------------------------------');

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
  name: "Scott",
  age: 35,
  country: "USA"
}

function logData() {
  console.log('"' + person.name + ' is ' + person.age + ' years old and lives in ' + person.country + '"');
}

logData();