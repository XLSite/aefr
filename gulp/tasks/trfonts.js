export const trfonts = () => {
  return app.gulp
    .src(app.path.src.trfonts)
    .pipe(app.gulp.dest(app.path.build.fonts));
};
