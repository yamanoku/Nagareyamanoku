const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

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
  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
