var gulp = require('gulp')

var settings = require('./settings')

var webpack = require('webpack')

var browserSync = require('browser-sync').create()

var postcss = require('gulp-postcss')

var rgba = require('postcss-hexrgba')

var autoprefixer = require('autoprefixer')

var cssvars = require('postcss-simple-vars')

var nested = require('postcss-nested')

var cssImport = require('postcss-import')

var mixins = require('postcss-mixins')

var colorFunctions = require('postcss-color-function')

var sass = require('gulp-sass')

sass.compiler = require('node-sass')

gulp.task('sass', function () {
  return gulp
    .src(settings.themeLocation + 'css/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(settings.themeLocation))
})

// gulp.task('sass:watch', function () {
//   gulp.watch(settings.themeLocation + 'css/scss/**/*.scss', gulp.series('sass'))
// })

gulp.task('styles', function () {
  return gulp
    .src(settings.themeLocation + 'css/style.css')
    .pipe(
      postcss([
        cssImport,
        mixins,
        cssvars,
        nested,
        rgba,
        colorFunctions,
        autoprefixer
      ])
    )
    .on('error', error => console.log(error.toString()))
    .pipe(gulp.dest(settings.themeLocation))
})

gulp.task('scripts', function (callback) {
  webpack(require('./webpack.config.js'), function (err, stats) {
    if (err) {
      console.log(err.toString())
    }

    console.log(stats.toString())
    callback()
  })
})

gulp.task('watch', function () {
  browserSync.init({
    notify: false,
    proxy: settings.urlToPreview,
    ghostMode: false
  })

  gulp.watch('./**/*.php').on('change', browserSync.reload)
  gulp.watch(settings.themeLocation + 'css/scss/**/*.scss', gulp.series('sass'))
  gulp.watch(
    settings.themeLocation + 'css/**/*.css',
    gulp.parallel('waitForStyles')
  )
  gulp.watch(
    [
      settings.themeLocation + 'js/modules/*.js',
      settings.themeLocation + 'js/scripts.js'
    ],
    gulp.parallel('waitForScripts')
  )
})

gulp.task(
  'waitForStyles',
  gulp.series('styles', function () {
    return gulp
      .src(settings.themeLocation + 'style.css')
      .pipe(browserSync.stream())
  })
)

gulp.task(
  'waitForScripts',
  gulp.series('scripts', function (cb) {
    browserSync.reload()
    cb()
  })
)
