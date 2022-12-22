const path = require("path");
const { copyLibFiles } = require("@builder.io/partytown/utils");

exports.onPreBuild = async ({ actions: { createRedirect } }) => {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));

  createRedirect({
    fromPath: `/google-analytics?url=:url`,
    toPath: `:url`,
    statusCode: 200,
  });
};
