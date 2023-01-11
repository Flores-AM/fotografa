const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

// JAVASCRIPt
const terser = require("gulp-terser-js");

function css(done) {
  src("src/scss/**/*.scss")
    //
    .pipe(plumber())
    //
    .pipe(sass())
    //
    .pipe(dest("build/css"));
  done();
}

function imagen(done) {
  const opciones = {
    optimizationLevel: 3,
  };
  src("src/img/**/*.{jpg, png, jpeg}")
    .pipe(cache(imagemin(opciones)))
    .pipe(dest("build/img"));

  done();
}

function versionWebp(done) {
  const opciones = {
    quality: 50,
  };
  src("src/img/**/*.{jpg, png, jpeg}")
    .pipe(cache(webp(opciones)))
    .pipe(dest("build/img"));

  done();
}

function versionAvif(done) {
  const opciones = {
    quality: 50,
  };
  src("src/img/**/*.{jpg, png, jpeg}")
    .pipe(cache(avif(opciones)))
    .pipe(dest("build/img"));

  done();
}

function javascript(done) {
  src("src/js/**/*.js").pipe(terser()).pipe(dest("build/js"));

  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", javascript);
  done();
}

exports.css = css;
exports.imagemin = imagen;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.javascript = javascript;
// exports.dev = dev;
exports.dev = parallel(imagen, versionWebp, versionAvif, javascript, dev);
