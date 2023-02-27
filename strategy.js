/*
    Feature:
        - Implementing the Login feature,
            - User can log in using one of the following methods:
                - Basic Authedntication (username, password)
                - email authentication (email, password)
                - UID authentication (userid, password)
                - social authentication (facebook, twitter)
                - Json Web Tokens (jwt token)
*/
// Strategy (Abstraction)
// Login
// Algorithms
/*
    - Basic Authedntication (username, password)
    - email authentication (email, password)
    - UID authentication (userid, password)
    - social authentication (facebook, twitter)
    - Json Web Tokens (jwt token)
*/
// Context
// rms
// client (functions)
/*
    REFACTORING:
*/
// The Context Class
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.login = function (loginMethod, credentials) {
        if (loginMethod == "basic") {
            var username = credentials.username;
            var password = credentials.password;
            console.log("User loggedIn with username: " + username + " and password: " + password);
        }
        else if (loginMethod === "email") {
            var email = credentials.email;
            var password = credentials.password;
            console.log("User loggedIn with username: " + email + " and password: " + password);
        }
        else if (loginMethod === "userId") {
            var userId = credentials.userId;
            var password = credentials.password;
            console.log("User loggedIn with username: " + userId + " and password: " + password);
        }
    };
    return Computer;
}());
/*
    What varies?
    What stays the same?
*/
// Client
function client() {
    var computer = new Computer();
    computer.login('basic', { username: 'richdad', password: 'coolrichie' });
    computer.login('email', { email: 'richdad@example.com', password: 'richiecool' });
    computer.login('userId', { userId: 'DF123VFG', password: 'userpass' });
}
client();
