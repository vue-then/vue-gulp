var gulp            = require('gulp');
var babel           = require('gulp-babel');
var browserSync     = require('browser-sync');
var rename          = require('gulp-rename');
var vueComponent    = require('gulp-vue-single-file-component');
var runSequence     = require("gulp-run-sequence");
var del             = require("del");

gulp.task('scripts', () => gulp.src('./js/*.js')
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream())
);
 
gulp.task('vue', () => gulp.src('./js/components/*.vue')
    .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('./public/js/components'))
    .pipe(browserSync.stream())
);

gulp.task('moveLib', function(){
    err = gulp.src("./lib/*.js")
        .pipe(gulp.dest("./public/lib"));
        

    return err;
})

//删除包
gulp.task("deljs", function () {
    return del(["./public/js/*", "./public/js/**/*"], {
        dryRun: true
    }).then(paths => {
        del(paths);
    });
});


 
gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
 
    gulp.watch("./js/*.js", ["scripts"]);
    gulp.watch("./js/components/*.vue", ["vue"]);
});
 
// // gulp.task('default', gulp.parallel('scripts', 'vue', 'watch'));

gulp.task("runs", function (done) {
    runSequence(
        ['deljs'],
        ['scripts'], 
        ['vue'], 
        ['moveLib'], ['watch'],
        done
    );
});


gulp.task('default', ["runs"]);