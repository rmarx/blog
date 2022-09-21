module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('posts/**/*.png');
    eleventyConfig.addPassthroughCopy('posts/**/*.jpg');
  
    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');
  };