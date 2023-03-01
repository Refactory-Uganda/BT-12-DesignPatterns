
// Interface
interface Credentials{
    username:string;
    password:string;
}


// 1.0 Singleton Class
class Twitter{
    // data
        private static credentials:Credentials;

        // 2.0 Private and Static variable
        private static twitter:any = null;


    // Methods
        private constructor(){

        }

        static login(credentials:Credentials){
            if (Twitter.twitter == null){
                Twitter.twitter = new Twitter();
                Twitter.twitter.credentials = credentials;
            }
        }

        static logout(){
            Twitter.twitter = null
        }
        
        static loggedinUser(){
            console.log(Twitter.twitter.credentials.username);
        }

        static getTwitterInstance (){
            return Twitter.twitter
        }

}


// Uisng class variables and methods
Twitter.login({username:"fauzia", password:"fau123"})
Twitter.loggedinUser();
console.log(Twitter.getTwitterInstance());
// Twitter.logout();

Twitter.login({username:"edwin", password:"123edwin"})
Twitter.loggedinUser();
console.log(Twitter.getTwitterInstance());
// Twitter.logout();

Twitter.login({username:"riley", password:"123riley"})
Twitter.loggedinUser();
console.log(Twitter.getTwitterInstance());
// Twitter.logout();

Twitter.login({username:"albert", password:"albert123"})
Twitter.loggedinUser();
console.log(Twitter.getTwitterInstance());














