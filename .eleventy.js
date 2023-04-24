const htmlmin = require("html-minifier");
const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const markdownItRenderer = new markdownIt();
const { DateTime } = require("luxon");

module.exports = (config) => {
  config.addPassthroughCopy({
    ".src/images": "./images", // images
    "./src/admin/config.yml": "./admin/config.yml", // admin config
    "./src/static": "/", // static folders/files
  });

  // filters
  config.addFilter("limit", (items, limit) => items.slice(0, limit));
  config.addFilter("category", (items, category) => items.filter((item) => item.data.category === category));
  config.addFilter("featured", (items) => items.filter((item) => item.data.featured));
  config.addFilter("markdown", (data) => markdownItRenderer.render(data));
  config.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // yaml
  config.addDataExtension("yaml", (contents) =>
    yaml.load(contents)
  );

  // minify
  config.addTransform("htmlmin", function (content, outputPath) {
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

  return {
    dir: {
      input: "src",
    },
      htmlTemplateEngine: "njk",
  }
};
