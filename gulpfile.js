/**
 * Created by AI on 14.10.2017.
 */
'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    preFixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourceMaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssMin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimRaf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    jsonServer = require('gulp-json-srv'),
    connectServer = require('gulp-connect'),
    httpProxyMiddleware = require('http-proxy-middleware'),
    runSequence = require('run-sequence');


var path = {
    build:{
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './dist'
};

var config = {
    server: {
        baseDir: "./dist"
    },
    host: 'localhost',
    tunnel: true,
    port: 3000
};

gulp.task("webserver", function () {
    browserSync(config);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(preFixer())
        .pipe(cssMin())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('build',[
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', function () {
    watch([path.watch.js], function (ev, callback) {
        gulp.start('js:build');
    });
    watch([path.watch.html], function (ev, callback) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function (ev, callback) {
        gulp.start('style:build');
    });
    watch([path.watch.img], function (ev, callback) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function (ev, callback) {
        gulp.start('fonts:build');
    });
});

gulp.task('clean', function (callback) {
    rimRaf(path.clean, callback);
});

gulp.task('server:json', function() {
    return gulp.src("db.json")
        .pipe(jsonServer.create({
            baseUrl: '/api',
            port: 5001
        }).pipe());
});

gulp.task('server:http', function() {
    connectServer.server({
        port: 5000,
        root: "dist",
        middleware: function(connect, opt) {
            return [
                httpProxyMiddleware('/api', {
                    target: 'http://localhost:5001'
                })
            ];
        }
    });
});

gulp.task('server', function(callback){
    runSequence(
        'server:json',
        'server:http',
        callback
    );
});

gulp.task('default', ['build', 'webserver', 'server', 'watch']);