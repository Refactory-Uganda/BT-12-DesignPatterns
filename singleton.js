// 1.0 Singleton Class
var Twitter = /** @class */ (function () {
    // Methods
    function Twitter() {
    }
    Twitter.login = function (credentials) {
        if (Twitter.twitter == null) {
            Twitter.twitter = new Twitter();
            Twitter.twitter.credentials = credentials;
        }
    };
    Twitter.logout = function () {
        Twitter.twitter = null;
    };
    Twitter.loggedinUser = function () {
        console.log(Twitter.twitter.credentials.username);
    };
    Twitter.getTwitterInstance = function () {
        return Twitter.twitter;
    };
    // 2.0 Private and Static variable
    Twitter.twitter = null;
    return Twitter;
}());
// Uisng class variables and methods
Twitter.login({ username: "fauzia", password: "fau123" });
Twitter.loggedinUser();
console.log(Twitter.getTwitterInstance());
// Twitter.logout();
Twitter.login({ username: "edwin", password: "123edwin" });
Twitter.loggedinUser();
console.log(Twitter.getTwitterInstance());
// Twitter.logout();
Twitter.login({ username: "riley", password: "123riley" });
Twitter.loggedinUser();
console.log(Twitter.getTwitterInstance());
// Twitter.logout();
Twitter.login({ username: "albert", password: "albert123" });
Twitter.loggedinUser();
console.log(Twitter.getTwitterInstance());
