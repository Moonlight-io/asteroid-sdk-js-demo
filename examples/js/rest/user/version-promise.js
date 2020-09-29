const SDK = require("@moonlight-io/asteroid-sdk-js");

// -- Implementation

console.log("== Example: AsteroidDomainUser Version ==");

const baseUrl = SDK.constants.urls.asteroidDomainUser.baseUrl.stage;

SDK.rest.user.getVersion(baseUrl).then((versionRes) => {
  console.log("versionRes:", versionRes);
  /**
   * Example response:
   * { version: 'v1.13.19_2e9d063', uptime: 2236521, domain: 'User' }
   */

  console.log("== THE END ==");
});
