const SDK = require("@moonlight-io/asteroid-sdk-js");

process.on("unhandledRejection", (reason, p) => {
  console.warn("Unhandled Rejection at: Promise", p, "reason:", reason);
});

// -- Implementation

(async () => {
  console.log("== Example: VividExchangeCode RPC API ==");

  const baseUrl = SDK.constants.urls.asteroidDomainUser.baseUrl.stage;
  const access_token = "YOUR_ACCESS_TOKEN";
  const code = "YOUR_CODE";

  const res = await SDK.rpc.user.vividExchangeCode(baseUrl, {
    access_token,
    code,
  });
  console.log("versionRes:", versionRes);

  console.log("== THE END ==");
})();
