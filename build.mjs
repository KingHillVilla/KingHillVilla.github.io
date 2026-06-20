/* Pre-compiles kh/*.jsx to plain kh/*.js (classic React.createElement) and minifies.
   Top-level names are preserved (toplevel:false) because the scripts share one
   global scope and reference each other's helpers/components by name. */
import { transformFileSync } from '@babel/core';
import { readdirSync, writeFileSync } from 'fs';
import { minify } from 'terser';

const babelOpts = {
  sourceType: 'script',
  presets: [['@babel/preset-react', { runtime: 'classic' }]],
};
const terserOpts = {
  compress: { toplevel: false },
  mangle: { toplevel: false },
};

let n = 0;
for (const f of readdirSync('kh')) {
  if (!f.endsWith('.jsx')) continue;
  const { code } = transformFileSync(`kh/${f}`, babelOpts);
  const out = await minify(code, terserOpts);
  writeFileSync(`kh/${f.replace(/\.jsx$/, '.js')}`, (out.code || code) + '\n');
  n++;
}
console.log(`${n} files compiled + minified.`);
