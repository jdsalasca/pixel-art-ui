import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { compile } from "sass";

mkdirSync("dist", { recursive: true });
const modularStyles = compile("packages/pixel-ui/src/styles.scss", { style: "expanded" }).css;
const legacyStyles = readFileSync("packages/pixel-ui/src/styles.css", "utf8");
writeFileSync("dist/styles.css", `${legacyStyles}\n/* Modular SCSS layer. */\n${modularStyles}`);
