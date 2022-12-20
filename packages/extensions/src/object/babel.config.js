import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        ["es2015", { "modules": "systemjs" }]
      ]
    ],
    plugins: [
      
    ]
  }