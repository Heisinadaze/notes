/**
 *
 * 导入所有的子模块
 */

const files = require.context('.', false, /\.ts$/);
const modules: { [key: string]: any } = {};

files.keys().forEach((key: string) => {
  if (key === './index.ts') return;
  modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key);
});

export default modules;
