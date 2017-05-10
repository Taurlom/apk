var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var fileinclude = require('gulp-file-include');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var cssbeautify = require('gulp-cssbeautify');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sassGlob = require('gulp-sass-glob');
var combineMq = require('gulp-combine-mq');
var replace = require('gulp-replace');
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var base64 = require('gulp-base64');
var svgmin = require('gulp-svgmin');


gulp.task('fileinclude', function () {
    return gulp.src( ['./app/html/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .on('error', swallowError)
        .pipe(gulp.dest('./dist/html/'));
});


gulp.task('del:html', function (cb) {
    return del(['./dist/html/*.html'], cb);
});
gulp.task('del:css', function (cb) {
    return del(['./dist/css/*.css'], cb);
});
gulp.task('del:js', function (cb) {
    return del(['./dist/js/*.js'], cb);
});


var sassOptions = {
    sourcemap: true
};


gulp.task('sass', function () {
    return gulp.src('./app/css/main.scss')
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/css/'))
        .pipe(browserSync.stream());
});

gulp.task('copy:css', function () {
    return gulp.src('./app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie >=9']
        }))
        .pipe(base64({
            baseDir: './',
            extensions: ['svg', 'png'],
            maxImageSize: 10 * 1024, // bytes,
            exclude: [/sprite/],
            deleteAfterEncoding: false,
            debug: !1
        }))
        .pipe(combineMq())
        .pipe(cleanCSS())
        // .pipe(cssbeautify())
        .pipe(gulp.dest('./dist/css/'));
});


// gulp.task('sprite', function () {
//     var spriteData = gulp.src('./img/sprite-smith/*.png').pipe(spritesmith({
//         imgName: 'sprite.png',
//         cssName: '../css/components/_global/_sprite.scss',
//         padding: 10,
//         imgPath: '/img/sprite.png',
//         algorithm: 'binary-tree',
//
//         retinaImgName: 'sprite2x.png',
//         retinaSrcFilter: './img/sprite-smith/*@2x.png',
//         retinaImgPath: '/img/sprite2x.png'
//     }));
//     return spriteData.pipe(gulp.dest('./img/'));
// });

//images minification

// gulp.task('rastr-min', function () {
//     return gulp.src(['./img/**/*', '!./img/svg/**/*.svg'])
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [
//                 {removeViewBox: false},
//                 {cleanupIDs: false}
//             ],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('./img/'));
// });

// gulp.task('vector-min', function () {
//     return gulp.src('./img/svg/**/*.svg')
//         .pipe(svgmin())
//         .pipe(gulp.dest('./img/svg/'));
// });
//
// gulp.task('image-min', ['rastr-min', 'vector-min']);


//web font

// gulp.task('font-template-copy', function () {
//     return gulp.src('./css/components/_global/*.html')
//         .pipe(gulp.dest('./html/app'));
// });
//
// gulp.task('del:font_template', function (cb) {
//     return del(['./css/components/_global/*.html'], cb);
// });
//
//
// gulp.task('font', function (callback) {
//     runSequence('grunt-webfont', 'font-template-copy', 'del:font_template', callback);
// });


//watcher

gulp.task('go', function () {

    browserSync.init({
        server: ['./', 'dist/html/'],
        notify: false,
        ghostMode: false
    });
    gulp.watch("app/css/components/**/*.scss", ['sass']);
    gulp.watch(['app/html/*.html', 'app/html/includes/**/*.html'], ['fileinclude']);
    gulp.watch('dist/html/*.html').on('change', function () {
        setTimeout(browserSync.reload, 500);
    });
    // gulp.watch("app/**/*.js", ['scripts']);
    // gulp.watch("assets/js/*.js").on('change', browserSync.reload);
});


gulp.task('default', function (callback) {
    runSequence(['del:html', 'del:css', 'del:js'], 'sass',
        ['copy:css', 'fileinclude'], callback);
});

// gulp.task('rel', ['template:html', 'template:css']);

function swallowError(error) {

    // If you want details of the error in the console
    console.log(error.toString());

    this.emit('end')
}