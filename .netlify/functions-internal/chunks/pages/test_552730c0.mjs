/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../astro_290e21f6.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './index_31cd9ef1.mjs';
import 'react/jsx-runtime';
import 'react';
import '@preact/signals-react';
/* empty css                           */
const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "This is my astro page" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main><h1 class="text-orange-500 mx-auto w-fit text-3xl">This is my astro page</h1></main>` })}`;
}, "C:/Users/sonof/Documents/coding/wedding/src/pages/test.astro", void 0);

const $$file = "C:/Users/sonof/Documents/coding/wedding/src/pages/test.astro";
const $$url = "/test";

export { $$Test as default, $$file as file, $$url as url };
