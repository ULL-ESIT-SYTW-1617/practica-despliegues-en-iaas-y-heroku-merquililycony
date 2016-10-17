/*
* Dependencias
*/
var gulp  = require('gulp');
var shell = require('gulp-shell');


gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/losh deploy-gitbook"]));
});


/*gulp.task('prueba',function() {
   return gulp.src('').pipe(shell(['gitbook build `pwd` ./gh-pages']));
});
*/

//generar pdf
gulp.task('pdf',
  shell.task(
    "gitbook pdf ./txt",
    { verbose: true })
);

// actualzacion iaas

gulp.task('actualizando_iaas', function(){
    return run(path.join(__dirname,'scripts','iaas')).exec();
});


gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/losh generate-gitbook']));
});
});
