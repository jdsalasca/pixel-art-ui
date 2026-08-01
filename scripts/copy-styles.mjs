import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("dist", { recursive: true });
copyFileSync("packages/pixel-ui/src/styles.css", "dist/styles.css");
