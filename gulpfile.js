var gulp                = require('gulp'),
    browsersync         = require('browser-sync'),
    sass                = require('gulp-sass'),
    autoprefixer        = require('gulp-autoprefixer'),
    clean               = require('gulp-clean-css'),
    rename              = require('gulp-rename'),
    cmq                 = require('gulp-group-css-media-queries'),
    webpackStream       = require('webpack-stream');

function browserSync(done){
    browsersync.init({
        server: {
            baseDir: "./src/"
        },
        port: 3000
    });
    done();
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function styles(){
    return gulp.src('./src/sass/**/**/*.{scss,sass}')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(cmq())
            .pipe(gulp.dest('./src/css'));
}

function minify(){
    return gulp.src('./src/css/style.css')
            .pipe(clean())
            .pipe(rename('style.min.css'))
            .pipe(gulp.dest('./src/css'));
}

function scripts(){
    return gulp.src('./src/js/main.js')
            .pipe(webpackStream({
                mode: 'production',
                output: {
                    filename: 'main.js',
                }
            }))
            .pipe(gulp.dest('./src/js/webpacked'))
}

function watchFiles(){
    styles();
    minify();
    scripts();

    gulp.watch('./src/**/**/*.{sass,scss}', styles);
    gulp.watch('./src/css/style.css', minify);
    gulp.watch('./src/js/*.js', scripts);
    gulp.watch('./src/js/components/*.js', scripts);

    gulp.watch(
        [
            "./src/**/*",
        ],
        gulp.series(browserSyncReload)
    );
}

function destAllFiles(done){
    gulp.src('./src/**')
        .pipe(gulp.dest('./dist'));
    done();
}

const start = gulp.parallel(watchFiles, browserSync),  
      dest = gulp.parallel(destAllFiles);

exports.start = start;
exports.dest = dest;