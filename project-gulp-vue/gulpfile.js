var gulp            = require('gulp');
var babel           = require('gulp-babel');
var browserSync     = require('browser-sync');
var rename          = require('gulp-rename');
var vueComponent    = require('gulp-vue-single-file-component');
var runSequence     = require("gulp-run-sequence");
var del             = require("del");

gulp.task('scripts', () => gulp.src('./src/*.js')
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(gulp.dest('./public/src'))
    .pipe(browserSync.stream())
);
 
gulp.task('vue', () => gulp.src('./src/components/*.vue')
    .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('./public/src/components'))
    .pipe(browserSync.stream())
);

gulp.task('moveLib', function(){
    err = gulp.src("./lib/*.js")
        .pipe(gulp.dest("./public/lib"));
        

    return err;
})

//删除包
gulp.task("deljs", function () {
    return del(["./public/src/*", "./public/src/**/*"], {
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
 
    gulp.watch("./src/*.js", ["scripts"]);
    gulp.watch("./src/components/*.vue", ["vue"]);
});
 
// // gulp.task('default', gulp.parallel('scripts', 'vue', 'watch'));

gulp.task("vendor",function(){
    // todo 外包依赖引入

    
})


gulp.task("build",function(){
    //todo 将 public 文件夹直接重新生成一个dist文件目录即可

})


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