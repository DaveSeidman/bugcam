var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('deploy', function() {
    gulp.src('source/**')
    .pipe(rsync({
        root: './',
        hostname: 'pi@104.162.80.44',
        destination: '~/bugcam/',
        archive: false,
        silent: false,
        compress: true
    }));
});
