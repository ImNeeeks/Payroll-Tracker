// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Array will store objects.
  let employeeInput = [];
  // Boolean to act as condition for while loop.
  let addEmployee = true;

  while (addEmployee) {
    // Collect data from user.
    const firstName = prompt(' First Name: ');
    const lastName = prompt(' Last Name: ');
    let salary = prompt(' Salary: ');

    // If salary is not a number default to 0.
    if (isNaN(salary)) {
      salary = 0;
    }

    salary = parseInt(salary);

    // Object to hold employee infomation.
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
   };

    // employee added to array
    employeeInput.push(employee);

    // Confirm prompt returns boolean. If true, loop continues to run to continue adding another employee.
    addEmployee = confirm(' Add another employee? ');
  }

    // Returns an array of objects containing employee information.
    return employeeInput;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Create sum variable.
  let sum = 0;
  // Loop through objects in array.
  for (people of employeesArray) {
    // Each loop adds each of the employees listed salary to the sum variable.
    sum += people.salary;
  }
  // Average variable is the sum divided by number of inputs.
  let average = sum / employeesArray.length;

  // Formats average variable as a currency.
  average = average.toLocaleString( 'en-US' ,{
    style: 'currency',
    currency: 'USD'
  }
);

// Simple message looped to the console. Utelizes length method of the array to get the number of employees.
console.log(`The average salary between our ${employeesArray.length} employee(s) is ${average}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Random number created using the Math.random method. Use length method with Math.floor to ensure random number is in correct range.
  const randomNumber = Math.floor(Math.random() * employeesArray.length);
  // Console log simple message using the random number as the array index to select a random winner.
  console.log(`Winner of the monthly $100 Amazon Gift Card is...
   ${employeesArray[randomNumber].firstName} ${employeesArray[randomNumber].lastName}! Congratulations!`);
}

/*
  ====================a
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
