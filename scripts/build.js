const fs = require("fs");
const del = require("del");
const esbuild = require("esbuild");

const outdir = "dist";
del.sync(outdir);
fs.mkdirSync(outdir, { recursive: true });

(async () => {
  const buildResult = await esbuild
    .build({
      format: "cjs",
      target: "es2015",
      entryPoints: ["./src/main.js"],
      outfile: "dist/progressbar.js",
      bundle: true,
      plugins: [],
      metafile: true,
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

  console.log(await esbuild.analyzeMetafile(buildResult.metafile));
  // Cleanup on exit
  process.on("SIGTERM", () => buildResult.rebuild.dispose());
})();
