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

// The Context Class
class Computer {
    login(loginMethod: string, credentials: any) {
        if (loginMethod == "basic") {    
            let username = credentials.username;
            let password = credentials.password;
            console.log(`User loggedIn with username: ${username} and password: ${password}`);
        }
    }
}

// Client
function client() {
    let computer: Computer = new Computer();
    computer.login('basic', { username: 'richdad', password: 'coolrichie' });
}
client();
