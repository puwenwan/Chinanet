var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); 


gulp.task('css', function (callback) {
    $.runSequence('lib', 'module', 'page', 'us-ua5', 'game', 'cl', callback);
});
gulp.task('lib',function() {
    gulp.src(["ua5/src/scss/lib/*.scss"])
    .pipe($.sass())
    .pipe($.autoprefixer({ browsers: ['last 2 version','IE 9', 'Safari >= 5'] }))
    .pipe(gulp.dest('ua5/dist/css/lib/'))
});
gulp.task('module',function() {
    gulp.src(["ua5/src/scss/module/*.scss"])
    .pipe($.sass())
    .pipe($.autoprefixer({ browsers: ['last 2 version','IE 9', 'Safari >= 5'] }))
    .pipe(gulp.dest('ua5/dist/css/module/'))
});
gulp.task('page',function() {
    gulp.src(["ua5/src/scss/page/*.scss"])
    .pipe($.sass())
    .pipe($.autoprefixer({ browsers: ['last 2 version','IE 9', 'Safari >= 5'] }))
    .pipe(gulp.dest('ua5/dist/css/page/'))  
});
gulp.task('us-ua5',function() {
    gulp.src(["us-ua5/src/assets/stylesheets/*.scss"])
    .pipe($.sass())
    .pipe(gulp.dest('us-ua5/build/assets/stylesheets/'))  
});
gulp.task('game',function() {
    gulp.src(["game/source/css/*.scss"])
    .pipe($.sass())
    .pipe(gulp.dest('game/assets/css/'))  
});
gulp.task('cl',function() {
    gulp.src(["cl/source/css/*.scss"])
    .pipe($.sass())
    .pipe(gulp.dest('cl/assets/css/'))  
});
gulp.task('mincss',function() {
    gulp.src(["ua5/dist/css/page/*.css"])
    .pipe($.cssmin())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('ua5/dist/css/page/'))
});
gulp.task('sprite', function () {
    gulp.src(["ua5/src/icon/*.*"])
    .pipe($.spritesmith({
        retinaSrcFilter: ['ua5/src/icon/*@2x.png'],
        imgName: 'icon_sprite.png',
        retinaImgName: 'icon_sprite@2x.png',
        cssName: 'sprite.css',
        padding: 2
    }))
    .pipe(gulp.dest('ua5/dist/img/'))
});
gulp.task('spriteMembership', function () {
    gulp.src(["ua5/src/icon/membership/*.*"])
    .pipe($.spritesmith({
        retinaSrcFilter: ['ua5/src/icon/membership/*@2x.png'],
        imgName: 'icon_sprite_membership.png',
        retinaImgName: 'icon_sprite_membership@2x.png',
        cssName: 'sprite_membership.css',
        padding: 2
    }))
    .pipe(gulp.dest('ua5/dist/img/'))
});

gulp.task('watch', function () {
    $.watch([
            'ua5/src/scss/*/*.scss',
            'game/source/css/*/*.scss',
            'game/source/css/*.scss',
            'cl/source/css/*.scss',
            'cl/source/css/*/*.scss'
        ],$.batch(function (events, done) {
        gulp.start('css', done);
    }));
});