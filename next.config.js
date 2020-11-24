const path = require("path");

module.exports = () => {
  const webpack = (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  };
  const publicRuntimeConfig = {
    emailJsUserID: process.env.EMAILJS_USER_ID,
    emailJsToken: process.env.EMAILJS_TOKEN,
    emailJsServiceID: process.env.EMAILJS_SERVICE_ID,
    emailJsTemplateID: process.env.EMAILJS_TEMPLATE_ID,
  };

  return {
    publicRuntimeConfig,
    webpack,
  };
};
