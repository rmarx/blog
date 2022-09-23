

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/images/*");
    eleventyConfig.addPassthroughCopy("assets/css/*");
    eleventyConfig.addPassthroughCopy("assets/js/*");
    eleventyConfig.addPassthroughCopy("assets/vendor/**/*"); 

    eleventyConfig.addPassthroughCopy('posts/**/*.png');
    eleventyConfig.addPassthroughCopy('posts/**/*.jpg');
  

    eleventyConfig.addWatchTarget("assets"); 

    // Watch the `css` directory for changes
    // eleventyConfig.addWatchTarget('css');
  };