var gulp = require('gulp');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');

//script paths
var jsFiles = 'src/*.js',  
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('hps.Validate.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('hps.validate.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});