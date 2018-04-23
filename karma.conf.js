module.exports = function(config) {
  config.set({
    frameworks: ["jasmine"],

    files: ["src/*.js", "spec/*.js"],
    browsers: ["ChromeHeadless"],
    reporters: ['spec']
  });
};
