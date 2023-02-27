interface Internet {
  connectTo(serverHost: string): void;
}

class RealInternet implements Internet {
  connectTo(serverHost: string): void {
    console.log(`${serverHost}: Connected ✅`);
  }
}

class ProxyInternet implements Internet {
  constructor(private realInternet: Internet, private bannedSites: string[]) {}

  connectTo(serverHost: string): void {
    if (this.bannedSites.includes(serverHost)) {
      console.log(`${serverHost}: Access Denied ❌`);
    } else {
      this.realInternet.connectTo(serverHost);
    }
  }
}

class Client {
  
  static run() {
    // sites to connect to
    const sites = [
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
    const realInternet: Internet = new RealInternet();
    console.log(Client.padBoth("REAL INTERNET", 30, "-"));
    sites.forEach((site) => realInternet.connectTo(site));

    // sites we wish to ban
    const banned = ["codehub.com", "naughtycode.com", "codecrimes.com"];

    // use ProxyInternet to connect to sites
    // banned sites are passed to ProxyInternet
    const proxyInternet: Internet = new ProxyInternet(realInternet, banned);
    console.log();
    console.log(Client.padBoth("PROXY INTERNET", 30, "-"));
    sites.forEach((site) => proxyInternet.connectTo(site));
  }

  static padBoth(str: string, length: number, char: string) {
    return str
      .padStart(str.length + length / 2, char)
      .padEnd(str.length + length, char);
  }
}

Client.run();
