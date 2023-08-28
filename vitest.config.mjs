import { defineConfig, configDefaults } from "vitest/dist/config";

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude, "templates/**"],
    },
});
