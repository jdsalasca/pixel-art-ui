import { mkdirSync, writeFileSync } from "node:fs";
import { compile } from "sass";

mkdirSync("dist", { recursive: true });
const modularStyles = compile("packages/pixel-ui/src/styles.scss", { style: "expanded" }).css;
writeFileSync("dist/styles.css", `/* Generated from packages/pixel-ui/src/styles.scss. */\n${modularStyles}`);
