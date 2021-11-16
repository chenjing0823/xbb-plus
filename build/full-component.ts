/*
 * @Author: jing.chen
 * @Date: 2021-11-15 09:55:09
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-15 14:31:24
 * @Description: 
 */
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import { parallel } from "gulp";
import path from "path";
import { outDir, projectRoot, zpRoot } from "./utils/paths";
import { rollup, OutputOptions} from "rollup";
import fs from 'fs/promises'
import { buildConfig } from "./utils/config";
import { pathRewriter } from "./utils";

const buildFull = async () => {
  // rollup打包的配置信息
  const config = {
    input: path.resolve(zpRoot, "index.ts"), // 打包的入口
    plugins: [nodeResolve(), typescript(), vue(), commonjs()],
    external: (id) => /^vue/.test(id), // 表示打包的时候不打包vue代码
  };
  // 整个组件库 两种使用方式 import 导入组件库 在浏览器中使用 script
  // esm umd
  const buildConfig = [
    {
      format: "umd", // 打包的个数
      file: path.resolve(outDir, "index.js"),
      name: "XbbPlus", // 全局的名字
      exports: "named", // 导出的名字 用命名的方式导出  liraryTarget:"var" name:""
      globals: {
        // 表示使用的vue是全局的
        vue: "Vue",
      },
    },
    {
        format:'esm',
        file: path.resolve(outDir, "index.esm.js")
    }
  ];
  let bundle = await rollup(config);

  return Promise.all(buildConfig.map(config => bundle.write(config as OutputOptions)))
}

async function buildEntry() {
  const entryFiles = await fs.readdir(zpRoot, { withFileTypes: true });
  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => !["package.json"].includes(f.name))
    .map((f) => path.resolve(zpRoot, f.name));



  const config = {
    input: entryPoints,
    plugins: [nodeResolve(), vue(), typescript()],
    external: (id: string) => /^vue/.test(id) || /^@xbb-plus/.test(id),
  };
  const bundle = await rollup(config);
  return Promise.all(
    Object.values(buildConfig)
      .map((config) => ({
        format: config.format,
        dir: config.output.path,
        paths: pathRewriter(config.output.name),
      }))
      .map((option) => bundle.write(option as OutputOptions))
  );
}

export const buildFullComponent = parallel(buildFull, buildEntry);