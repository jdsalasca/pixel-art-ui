import { defineConfig } from "vitest/config";

export default defineConfig({
  test: { environment: "node", include: ["packages/pixel-ui/tests/**/*.test.tsx"] },
});
