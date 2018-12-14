const files = require.context("./markdown", true, /\.md$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.md)/g, "")] = files(key);
});

export default modules;
