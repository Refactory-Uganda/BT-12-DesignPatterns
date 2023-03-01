var RealInternet = /** @class */ (function () {
    function RealInternet() {
    }
    RealInternet.prototype.connectTo = function (serverHost) {
        console.log("".concat(serverHost, ": Connected \u2705"));
    };
    return RealInternet;
}());
var ProxyInternet = /** @class */ (function () {
    function ProxyInternet(realInternet, bannedSites) {
        this.realInternet = realInternet;
        this.bannedSites = bannedSites;
    }
    ProxyInternet.prototype.connectTo = function (serverHost) {
        if (this.bannedSites.includes(serverHost)) {
            console.log("".concat(serverHost, ": Access Denied \u274C"));
        }
        else {
            this.realInternet.connectTo(serverHost);
        }
    };
    return ProxyInternet;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.run = function () {
        // sites to connect to
        var sites = [
            "google.com",
            "codehub.com",
            "stackoverflow.com",
            "linkedin.com",
            "naughtycode.com",
            "pinterest.com",
            "friends.com",
            "frontendmasters.com",
            "codecrimes.com",
            "dontbelazy.com",
        ];
        // use RealInternet to connect to site
        var realInternet = new RealInternet();
        console.log(Client.padBoth("REAL INTERNET", 30, "-"));
        sites.forEach(function (site) { return realInternet.connectTo(site); });
        // sites we wish to ban
        var banned = ["codehub.com", "naughtycode.com", "codecrimes.com"];
        // use ProxyInternet to connect to sites
        // banned sites are passed to ProxyInternet
        var proxyInternet = new ProxyInternet(realInternet, banned);
        console.log();
        console.log(Client.padBoth("PROXY INTERNET", 30, "-"));
        sites.forEach(function (site) { return proxyInternet.connectTo(site); });
    };
    Client.padBoth = function (str, length, char) {
        return str
            .padStart(str.length + length / 2, char)
            .padEnd(str.length + length, char);
    };
    return Client;
}());
Client.run();
