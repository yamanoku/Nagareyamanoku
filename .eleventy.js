const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
const pluginPWA = require("eleventy-plugin-pwa");

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('src/icons');
  eleventyConfig.addPassthroughCopy('src/manifest.json');
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });
  eleventyConfig.addPlugin(pluginPWA, {
    swDest: "./dist/service-worker.js",
    globDirectory: "./dist"
  });
  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
