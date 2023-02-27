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
    F1: login via basic authentication
    F2: login via email and password
    F3: login via userId and password
*/

/*
    if } else if (loginMethod === "email") {
            let email = credentials.email;
            let password = credentials.password;
            console.log(`User loggedIn with username: ${email} and password: ${password}`);
        } else if (loginMethod === "userId") {
            let userId = credentials.userId;
            let password = credentials.password;
            console.log(`User loggedIn with username: ${userId} and password: ${password}`);
        }
*/

/*
    Step1: Identify what varies and separate it from what does not vary.
        What varies?
        - the implementation of the login method
        What stays the same?
        - the login method
    Step2: Favour composition over inheritance.
*/

// Strategy
interface Authentication{
    authenticate(credentials: any): void;
}

// Algorithms [Implementation of the Strategy]
class BasicAuthentication implements Authentication{
    authenticate(credentials) {   
            let username = credentials.username;
            let password = credentials.password;
            console.log(`User loggedIn with username: ${username} and password: ${password}`);
    }
}

class EmailAuthentication implements Authentication{
    authenticate(credentials) {   
            let email = credentials.email;
            let password = credentials.password;
            console.log(`User loggedIn with email: ${email} and password: ${password}`);
    }
}

class UserIdAuthentication implements Authentication{
    authenticate(credentials: any): void {
        let userId = credentials.userId;
        let password = credentials.password;
        console.log(`User loggedIn with userId: ${userId} and password: ${password}`);
    }
}

// The Context Class
class Computer {
    // Encapsulation and Information Hiding
    private authentication: Authentication;

    // Dependency Inversion and Injection 
    constructor(authentication: Authentication){this.authentication = authentication}
    
    // Target method in the context class
    authenticate(credentials: any): void {
        // Delegation Principle - refer to a different method that can do it for you
        this.authentication.authenticate(credentials);
    }

    setAuthentication(authentication: Authentication) {
        this.authentication = authentication;
    }
}



// Client
function client() {
    let computer: Computer = new Computer(new BasicAuthentication());
    computer.authenticate({ username: 'richdad', password: 'coolrichie' });
    computer.setAuthentication(new EmailAuthentication())
    computer.authenticate({ email: 'richdad@example.com', password: 'richiecool' });
    computer.setAuthentication(new UserIdAuthentication())
    computer.authenticate({ userId: 'DF123VFG', password: '12345' });
}
client();
