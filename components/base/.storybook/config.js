import { addParameters, configure } from "@storybook/html";

addParameters({
  options: {
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    name: "Base Ideas"
  }
});

configure(require.context("../src", true, /\.stories\.(js|mdx|jsx)$/), module);
