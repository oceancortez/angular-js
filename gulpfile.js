/**
 * Created by 579535 on 24/04/2017.
 */
const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const runSeq = require('run-sequence');
const rename = require('gulp-rename');

const _SRC = './sofea-bower-omc-pedidos/';

gulp.task('dev',function(done){
    runSeq('css', 'js', function(){
        console.log('End the Process DEV!!');
        done();
    });
});

gulp.task('clean', function(){
    gulp.src(_SRC + 'css-gulp/',
        {read: false})
        .pipe(clean());
    
    gulp.src(_SRC + 'module-gulp/',
        {read: false})
        .pipe(clean());

});

gulp.task('css', function(){
    gulp.src(_SRC + 'css/app.css')
        .pipe(minifyCss())
        .pipe(gulp.dest(_SRC + 'css-gulp/'));
});

gulp.task('js', function(){
    gulp.src(_SRC + 'module/**/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(_SRC + 'module-gulp/'));

    gulp.src(_SRC + 'module/**/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(_SRC + 'module-gulp/'));
});