export const copyvendor = () => {
  return app.gulp
    .src(app.path.src.vendor)
    .pipe(app.gulp.dest(app.path.build.vendor));
};
