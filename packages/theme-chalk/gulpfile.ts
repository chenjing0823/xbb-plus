/*
 * @Author: jing.chen
 * @Date: 2021-10-29 00:19:20
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-15 15:47:06
 * @Description: 
 */
// 打包样式
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import path from "path";

import { series, src, dest } from "gulp";
function compile() {
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest("./dist"));
}

function copyfont() {
  return src(path.resolve(__dirname, "./src/fonts/**"))
    // .pipe(cleanCss())
    .pipe(dest("./dist/fonts"));
}
function copyfullStyle() {
  return src(path.resolve(__dirname, "./dist/**")).pipe(
    dest(path.resolve(__dirname, "../../dist/theme-chalk"))
  );
}

export default series(compile, copyfont, copyfullStyle);
