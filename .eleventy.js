module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("posts/media/");
};

return {
  dir: {
    input: "src",
    includes: "_includes",
  },
};
