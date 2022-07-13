import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { Config } from "@sveltejs/kit/types/index";

const config: Config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
  },
};

export default config;
