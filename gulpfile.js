var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var rename = require('gulp-rename');
var htmlmin = require('gulp-html-minifier');


var scssFiles = ['./source/style.scss'];
var cssDest = './dist';
var cssDestMin = './dist/minCss';



var sassDevOptions = {
  outputStyle: 'expanded'
}


// del é um plugin para apagar diretórios recursivamente
gulp.task("clean", function(){

	del(["./dist"]);

})


// Tarefa para compilar os arquivos scss e enviar para o diretório ./dist/css
gulp.task('compila-scss', function(){

	return gulp.src(scssFiles)
			.pipe(sass(sassDevOptions).on('error', sass.logError))
			.pipe(gulp.dest(cssDest));

});

gulp.task('background', function(){
	gulp.watch('./source/**/*.scss', [ 'compila-scss']);

})

