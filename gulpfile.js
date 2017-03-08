var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    del = require('del'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    cp = require('child_process'),
    changed = require('gulp-changed'),
    size = require('gulp-size'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('styles', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync',['styles'], function() {
  browserSync({
    server: {
      baseDir: "."
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(['./index.html',
              // './**/*.js',
              './sass/**/*.scss',
              '!./node_modules/**/*.js',
              '!./node_modules/**/*.scss',
              '!./node_modules/**/*.html',
              '!./cercemap_app/**/*.*',
              '!./cercemap_geojson_source/**/*.*',
              // '!./cercemap_app/**/*'
              // '!./cercemap-app/node_modules/**/*.html',
              // '!./cercemap-app/node_modules/**/*.js',
              // '!./cercemap-app/node_modules/**/*.scss'
            ], ['styles']).on('change' , function () {
      browserSync.reload();
  });
});

gulp.task('default', function() {
    gulp.start('browser-sync', 'watch');
});
