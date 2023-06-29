import { defineConfig } from "cypress";
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

module.exports = defineConfig({
  e2e: {
    specPattern: "features/*.feature",
    supportFile: false,
    video: false,
    async setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
          "file:preprocessor",
          //@ts-ignore
          webpack.default({
            webpackOptions: {
              resolve: {
                extensions: [".ts", ".js"],
              },
              module: {
                rules: [
                  {
                    test: /\.ts$/,
                    exclude: [/node_modules/],
                    use: [
                      {
                        loader: "ts-loader",
                      },
                    ],
                  },
                  {
                    test: /\.feature$/,
                    use: [
                      {
                        loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                        options: config,
                      },
                    ],
                  },
                ],
              },
            },
          })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  }
});
