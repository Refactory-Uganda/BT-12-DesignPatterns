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



/*
    REFACTORING:
    F1: Login through basic authentication
    F2: Login through email and password
    F3: Login through userID and password
*/ 


// Strategy
    interface Authentication{
        authenticate(credentials: any): void;
    }

// Algorithms [Implementations of the Strategy]
    class BasicAuthentication implements Authentication{
        authenticate(credentials){
            let username = credentials.username;
            let password = credentials.password;
            console.log(`User loggedin with username: ${username} and password: ${password}`);
        }
    }

    class EmailAuthentication implements Authentication{
        authenticate(credentials){
            let email = credentials.email;
            let password = credentials.password;
            console.log(`User loggedin with email: ${email} and password: ${password}`);
        }
    }

    class UserIdAuthentication implements Authentication{
        authenticate(credentials){
            let id = credentials.id;
            let password = credentials.password;
            console.log(`User loggedin with id: ${id} and password: ${password}`);
        }
    }


// The Context Class
    class Computer{
        // Encapsulation and Information Hiding
        private authentication: Authentication;

        // Dependancy Inversion and Injection
        constructor(authentication: Authentication){
            this.authentication = authentication;
        }

        // Target method in the context class
        authenticate(credentials:any):void{
            // Delegation Principle
            this.authentication.authenticate(credentials);
        }

        setAuthentication(authentication: Authentication){
            this.authentication = authentication;
        }
    }


// Client
    function client(){
        let computer: Computer = new Computer(new BasicAuthentication());
        computer.authenticate({username: 'richdad', password: 'coolrichie'});
        computer.setAuthentication(new EmailAuthentication())
        computer.authenticate({email: 'richard@example.com', password: 'richiecool'});
        computer.setAuthentication(new UserIdAuthentication())
        computer.authenticate({id: 'DF123VFG', password: '12345'});
    }
    client();

