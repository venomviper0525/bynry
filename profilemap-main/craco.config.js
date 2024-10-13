module.exports = {
   style: {
     postcss: {
       loaderOptions: (postcssLoaderOptions) => {
         postcssLoaderOptions.postcssOptions.plugins = [
           require('tailwindcss'),
           require('autoprefixer'),
         ]
         return postcssLoaderOptions
       },
     },
   },
   webpack: {
     configure: (webpackConfig) => {
       const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
         ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
       );
 
       webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
       return webpackConfig;
     },
   },
 }