var gulp            = require('gulp');
var babel           = require('gulp-babel');
var browserSync     = require('browser-sync');
var rename          = require('gulp-rename');
var vueComponent    = require('gulp-vue-single-file-component');
var runSequence     = require("gulp-run-sequence");
var del             = require("del");
var _               = require("lodash");
var uglify          = require("gulp-uglify");
var UglifyJS        = require("uglify-es");




//第三方 js文件
var scripts = require("./app.scripts.json");

//代码
var agencySource = {
    js: {
        src: [
            // application config
            "app.config.js",
            "src/agency/app.service.config.js",
            "src/agency/host.js",
            // application bootstrap file
            "src/agency/app.js",
            "src/httpSvc.js",
            "src/filter.js",
            "src/directives.js",
            "src/app.validate.js",
            "src/resource.js",
            // module files
            "src/agency/smart/**/module.js",
            "src/agency/**/module.js",
            // other js files [controllers, services, etc.]
            "src/agency/smart/**/!(module)*.js",
            "src/agency/**/!(module)*.js"
        ],
        index: "src/agency/index.html",
        views: "src/agency/**/*.html",
        staticViews: "src/agency/smart/**/*.html",
        style: "src/styles/**/*",
        plugin: "smartadmin-plugin/**/*"
    },
    build: {
        vendor: "./public/src",

    }
};



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
    err1 = gulp.src("./src/assets/**")
        .pipe(gulp.dest("./public/assets"));  


    return err || err1;
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
    _.forIn(scripts.chunks, function(chunkScripts, chunkName) {
        var paths = [];
        chunkScripts.forEach(function(script) {
            var scriptFileName = scripts.paths[script];
            if (!fs.existsSync(__dirname + "/" + scriptFileName)) {
                throw console.error(
                    "Required path doesn't exist: " + __dirname + "/" + scriptFileName,
                    script
                );
            }
            paths.push(scriptFileName);
        });
        gulp
            .src(paths)
            .pipe(
                uglify({
                    compress: {
                        warnings: false,
                        drop_console: true, // 过滤 console
                        drop_debugger: true // 过滤 debugger
                    }
                })
            )
            .pipe(concat(chunkName + ".js"))
            .pipe(gulp.dest(agencySource.build.vendor));
    });

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