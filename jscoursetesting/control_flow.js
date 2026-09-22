let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

//Defining variables and nested if...else statementd for isLoggedIn and userMessage
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

//Step 4: Defining variables and switch statement for userType and userCategory
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administartor";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}   

console.log("User Category:", userCategory);

//Step 5: Use ternary operator for isAuthenticated and authenticationStatus
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

//Practice Task
let person = "Employee";
let authorized;
let add_service;

if (person === "Employee"){
    authorized = "Dietary Services";
    add_service = null;
} else if (person === "Enrolled Member,") {
    authorized = "Dietary Services";
    add_service = "one-on-one with dietician";
} else if (person === "Subscriber") {
    authorized = "Dietary Services Only";
    add_service = null;
} else {
    authorized = "they need to enroll or at least subscribe first to avail this facility.";
}

console.log("Hello ", person, "you can access: ",authorized,"and ", add_service);
