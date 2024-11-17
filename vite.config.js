import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(function () { return ({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/test/setupTest.ts",
        coverage: {
            reporter: ["text", "json-summary", "json"],
            reportOnFailure: true,
        },
    },
    base: "./",
    build: {
        outDir: "build",
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "./src"),
        },
    },
}); });
