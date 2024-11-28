import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import fs from "fs";

export const fonts = () => {
  return app.gulp
    .src(app.path.src.fonts, { encoding: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "FONTS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fonter({ formats: ["woff"] }))
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(app.path.src.fonts, { encoding: false }))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts))
    .on("end", generateFontScss);
};

const getFontWeight = (fontName) => {
  switch (true) {
    case /thin/i.test(fontName):
      return 100;
    case /extralight/i.test(fontName):
      return 200;
    case /light/i.test(fontName):
      return 300;
    case /regular/i.test(fontName):
      return 400;
    case /medium/i.test(fontName):
      return 500;
    case /semibold/i.test(fontName):
      return 600;
    case /bold/i.test(fontName):
      return 700;
    case /extrabold|heavy/i.test(fontName):
      return 800;
    case /black/i.test(fontName):
      return 900;
    default:
      return 400;
  }
};

// Функція для генерації fonts.scss
const generateFontScss = () => {
  const fontsFolder = app.path.build.fonts;
  const scssPath = `${app.path.srcFolder}/scss/fonts.scss`;

  // Перевірка, чи існує файл fonts.scss, якщо так, видаляємо його
  if (fs.existsSync(scssPath)) {
    fs.unlinkSync(scssPath);
  }

  fs.readdir(fontsFolder, (err, files) => {
    if (err) {
      console.error("Error reading fonts directory:", err);
      return;
    }

    const fontFormats = ["woff2", "woff"];
    const fontFiles = files.filter((file) =>
      fontFormats.includes(file.split(".").pop())
    );

    const fontEntries = {};

    fontFiles.forEach((file) => {
      const [fontName, variant] = file.split("-");
      const fontWeight = getFontWeight(variant);
      const fontStyle = /italic/i.test(variant) ? "italic" : "normal";

      if (!fontEntries[fontName]) fontEntries[fontName] = [];
      fontEntries[fontName].push({ file, fontWeight, fontStyle });
    });

    let scssContent = "";

    for (const [fontName, variants] of Object.entries(fontEntries)) {
      variants.forEach(({ file, fontWeight, fontStyle }) => {
        const srcUrls = `url("../fonts/${file}") format("${file
          .split(".")
          .pop()}")`;

        scssContent += `
@font-face {
  font-family: ${fontName};
  font-display: swap;
  src: ${srcUrls};
  font-weight: ${fontWeight};
  font-style: ${fontStyle};
}\n`;
      });
    }

    fs.writeFileSync(scssPath, scssContent);
    console.log("fonts.scss successfully generated!");
  });
};
