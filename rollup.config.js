import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  postcss({extensions: ['.css']}),
  resolve({extensions: ['.js', '.jsx']}),
  commonjs(),
  babel({exclude: '**/node_modules/**'})
]

export default [
  {
    input: 'src/index.js',
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'}
    ],
    plugins
  }
]
