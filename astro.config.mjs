import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from "@astrojs/react";
import Editor from "@monaco-editor/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    // TODO: for now use hardcode
    "/": 'writing/sat-explain/overall'
  },
  experimental: {
		redirects: true,
	},
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), react({
    monacoIntegreations: [Editor]})]
});