let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)

// 2. Push a new value to the array
myLeads.push("www.epiclead.com")

// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)

// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads) // string
console.log(myLeads) // ["www.awesomelead.com","www.epiclead.com"]