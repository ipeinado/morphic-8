var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
	browserSync.init({
		proxy:  "http://morphic8.lndo.site",
		browserSyncPort: 3003,
		reloadDelay: 1,
		open: false
	});
});

gulp.task('sass', function() {
	return gulp.src('./scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8']))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function() {
	return gulp
		.watch(['./scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch', 'browser-sync']);