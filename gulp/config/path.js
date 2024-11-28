import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    js: `${buildFolder}/assets/js/`,
    vendor: `${buildFolder}/assets/js/vendor/`,
    css: `${buildFolder}/assets/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/img/`,
    fonts: `${buildFolder}/assets/fonts/`,
    files: `${buildFolder}/assets/flaticon/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    vendor: `${srcFolder}/js/vendor/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,gif,png,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/main.scss`,
    css: `${srcFolder}/css/**/*.css`,
    html: `${srcFolder}/*.html`, //.pug
    fonts: `${srcFolder}/fonts/*.ttf`,
    trfonts: `${srcFolder}/fonts/*.{woff,woff2}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`, //.pug
    images: `${srcFolder}/img/**/*.{jpg, jpeg, gif, png, webp, svg, ico}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};