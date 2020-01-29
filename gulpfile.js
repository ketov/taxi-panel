//Модули
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    csso   = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    webpack = require('gulp-webpack'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    runSequence = require('run-sequence'),
    rename = require("gulp-rename"),
    pug = require("gulp-pug");

//
// Пути
//
var path = {
    build: {
        dist: 'dist',
        js: 'dist/assets/js',
        css: 'dist/assets/css',
        img: 'dist/assets/img',
        fonts: 'dist/assets/fonts',
        video: 'dist/assets/video'
    },
    src: {
        pug: 'src/templates/*.pug',
        js: 'src/js/bundle.js',
        style: "src/styles/bundle.scss",
        img: 'src/img/**/*',
        fonts: 'src/fonts/**/*',
        video: 'src/video/**/*'
    },
    watch: {
        html: 'dist/*.html',
        pug: 'src/templates/**/*.pug',
        js: 'src/js/**/*.js',
        style: 'src/styles/**/*.scss',
        img: 'src/img/**/*',
        fonts: 'src/fonts/**/*'
    },
    tmp: '.tmp'
};

//
// Конкатенация и минификация css файлов
//
gulp.task('styles', function () {
    gulp
        .src(path.src.style)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer("last 5 version", "> 1%", "Explorer >= 8", {
            cascade: true
        }))
        .pipe(csso())
        .pipe(rename("all.min.css"))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({ stream: true }));
});

//
// Конкатенация и минификация js файлов + Webpack
//
gulp.task('js', function(){
    return gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(webpack(require('./webpack.config.js'), null))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({ stream: true }));
});

//
// Шаблонизатор ejs
//
/*gulp.task('ejs', function(){
    return gulp.src(path.src.ejs)
        .pipe(plumber())
        .pipe(ejs({}, {ext:'.html'}))
        .pipe(gulp.dest(path.build.dist))
        .pipe(browserSync.reload({ stream: true }));
});*/

gulp.task('pug', function buildHTML() {
  return gulp.src(path.src.pug)
    .pipe(pug({
      pretty: true
    }))
	.pipe(gulp.dest(path.build.dist))
    .pipe(browserSync.reload({ stream: true }));
});

//
// Сжатие изображений и svg
//
gulp.task('imagemin', function() {
    return gulp.src(path.src.img)
        .pipe(plumber())
        .pipe(imagemin({
            full: true,
            progressive: true,
            svgoPlugins: [
                { removeUselessStrokeAndFill: false },
                { removeTitle: true },
                { mergePaths: false },
                { removeAttrs: {
                    attrs: ['id', 'data-name']
                }}
            ]
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({ stream: true }));
});


//
// Шрифты
//
gulp.task('fonts', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


//
// Видео
//
gulp.task('video', function() {
    gulp.src(path.src.video)
        .pipe(gulp.dest(path.build.video))
});


//
// Ощищаем
//
gulp.task('clean', ['clean:dist']);

gulp.task('clean:dist', function () {
    return del([
        path.build.dist
    ]);
});

gulp.task('clean:img', function () {
    return del([
        path.build.img
    ]);
});

gulp.task('clean:fonts', function () {
    return del([
        path.build.fonts
    ]);
});


//
// Дефолтный таск для разработки
//
gulp.task('serve', function(callback) {
    runSequence(
        'clean',
        ['styles', 'js', 'imagemin', 'fonts', 'video'],
        ['pug', 'watch']
    );
});

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch(path.watch.style, ['styles']);
    gulp.watch(path.watch.js, ['js']);
    gulp.watch(path.watch.pug, ['pug']);
    gulp.watch(path.watch.img, runSequence('clean:img', 'imagemin'));
});


//
// Сборка без watch
//
gulp.task('default', function(callback) {
    runSequence(
        'clean',
        ['styles', 'js', 'imagemin', 'fonts', 'video'],
        'pug',
        callback);
});