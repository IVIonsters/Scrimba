// Main Variables
let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');

// Get Leads from localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
console.log(leadsFromLocalStorage);

// Check if there are leads in the localStorage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
} else {
  console.log('No leads in localStorage');
}

//Validate URl
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Save Input 
inputBtn.addEventListener('click', function () {
  const inputValue = inputEl.value;
  if (isValidURL(inputValue)) {
    myLeads.push(inputValue);
    inputEl.value = "";
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
  } else {
    alert("Please enter a valid URL");
  }
});

// Delete Leads 
deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// Save Tab 
tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
  });
});

// Render Leads Function
function render(leads) {
  ulEl.innerHTML = "";
  for (let i = 0; i < leads.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = leads[i];
    a.target = "_blank";
    a.textContent = leads[i];
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      deleteLead(i);
    });
    li.appendChild(a);
    li.appendChild(deleteBtn);
    ulEl.appendChild(li);
  }
}

// Delete Single Lead
function deleteLead(index) {
  myLeads.splice(index, 1);
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  render(myLeads);
}

