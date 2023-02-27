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
// Algorithms [Implementation of the Strategy]
var BasicAuthentication = /** @class */ (function () {
    function BasicAuthentication() {
    }
    BasicAuthentication.prototype.authenticate = function (credentials) {
        var username = credentials.username;
        var password = credentials.password;
        console.log("User loggedIn with username: " + username + " and password: " + password);
    };
    return BasicAuthentication;
}());
var EmailAuthentication = /** @class */ (function () {
    function EmailAuthentication() {
    }
    EmailAuthentication.prototype.authenticate = function (credentials) {
        var email = credentials.email;
        var password = credentials.password;
        console.log("User loggedIn with email: " + email + " and password: " + password);
    };
    return EmailAuthentication;
}());
var UserIdAuthentication = /** @class */ (function () {
    function UserIdAuthentication() {
    }
    UserIdAuthentication.prototype.authenticate = function (credentials) {
        var userId = credentials.userId;
        var password = credentials.password;
        console.log("User loggedIn with userId: " + userId + " and password: " + password);
    };
    return UserIdAuthentication;
}());
// The Context Class
var Computer = /** @class */ (function () {
    // Dependency Inversion and Injection 
    function Computer(authentication) {
        this.authentication = authentication;
    }
    // Target method in the context class
    Computer.prototype.authenticate = function (credentials) {
        // Delegation Principle - refer to a different method that can do it for you
        this.authentication.authenticate(credentials);
    };
    Computer.prototype.setAuthentication = function (authentication) {
        this.authentication = authentication;
    };
    return Computer;
}());
// Client
function client() {
    var computer = new Computer(new BasicAuthentication());
    computer.authenticate({ username: 'richdad', password: 'coolrichie' });
    computer.setAuthentication(new EmailAuthentication());
    computer.authenticate({ email: 'richdad@example.com', password: 'richiecool' });
    computer.setAuthentication(new UserIdAuthentication());
    computer.authenticate({ userId: 'DF123VFG', password: '12345' });
}
client();
