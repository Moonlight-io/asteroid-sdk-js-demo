const SDK = require("@moonlight-io/asteroid-sdk-js");

// -- Implementation

(async () => {
  console.log("== Example: AsteroidDomainUser Version ==");

  const baseUrl = SDK.constants.urls.asteroidDomainUser.baseUrl.stage;
  const versionRes = await SDK.rest.user.getVersion(baseUrl);

  console.log("versionRes:", versionRes);
  /**
   * Example response:
   * { version: 'v1.13.19_2e9d063', uptime: 2236521, domain: 'User' }
   */

  console.log("== THE END ==");
})();
