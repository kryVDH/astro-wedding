/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_290e21f6.mjs';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { signal } from '@preact/signals-react';
/* empty css                           */
const isPlaying = signal(false);
const currentTrack = signal(null);

const PlayIcon = /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-10 h-10 sm:w-14 sm:h-14",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
        "clip-rule": "evenodd"
      }
    )
  }
);
const PauseIcon = /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-10 h-10 sm:w-14 sm:h-14",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        "fill-rule": "evenodd",
        d: "M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z",
        "clip-rule": "evenodd"
      }
    )
  }
);
const MAX_SONGS = 4;
function Player() {
  const audioPlayer = useRef(null);
  const progressRef = useRef({ current: 0 });
  const [songIndex, setSongIndex] = useState(4);
  const [progress, setProgress] = useState(0);
  if (currentTrack.value === null) {
    return;
  }
  const { title, artist, imageUrl } = currentTrack.value;
  function whilePlaying() {
    if (audioPlayer?.current?.duration) {
      const percentage = audioPlayer.current.currentTime * 100 / audioPlayer.current.duration;
      setProgress(percentage);
    }
    progressRef.current = requestAnimationFrame(whilePlaying);
  }
  useEffect(() => {
    const newIndex = songIndex % MAX_SONGS + 1;
    if (audioPlayer?.current) {
      audioPlayer.current.src = `/mp3/song${newIndex}.mp3`;
      audioPlayer.current.currentTime = 0;
      audioPlayer.current.play();
    }
    setSongIndex(newIndex);
  }, [title]);
  useEffect(() => {
    if (isPlaying.value) {
      audioPlayer.current?.play();
      progressRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current?.pause();
      cancelAnimationFrame(progressRef.current);
    }
  }, [isPlaying.value]);
  useEffect(() => {
    if (progress >= 99.99) {
      isPlaying.value = false;
      setProgress(0);
    }
  }, [progress]);
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 bg-gray-100", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1 bg-gray-200 h-1.5 dark:bg-gray-700", children: /* @__PURE__ */ jsx("div", { className: "bg-pink-500 h-1.5", style: { width: `${progress}%` } }) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-screen-lg px-3 py-2 sm:px-6 sm:py-4 flex items-center gap-5", children: [
      /* @__PURE__ */ jsx("img", { src: imageUrl, width: "60", height: "60", className: "block rounded-md" }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl font-medium overflow-hidden text-ellipsis whitespace-nowrap", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap", children: artist })
      ] }),
      /* @__PURE__ */ jsx("audio", { ref: audioPlayer, src: "/mp3/song1.mp3" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-center text-black", children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-10 h-10 hidden sm:block",
            children: /* @__PURE__ */ jsx("path", { d: "M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" })
          }
        ),
        /* @__PURE__ */ jsx("button", { onClick: () => isPlaying.value = !isPlaying.value, children: isPlaying.value ? PauseIcon : PlayIcon }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-10 h-10 hidden sm:block",
            children: /* @__PURE__ */ jsx("path", { d: "M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" })
          }
        )
      ] })
    ] })
  ] });
}

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}<footer class="bg-white border-t-2 border-t-slate-400"><span class="flex justify-center">Kyle & Jasmine's wedding site</span></footer><div id="audio-player">${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "player", "client:component-hydration": "load", "client:component-path": "C:/Users/sonof/Documents/coding/wedding/src/components/Player", "client:component-export": "default" })}</div></body></html>`;
}, "C:/Users/sonof/Documents/coding/wedding/src/layouts/Layout.astro", "self");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kyle & Jasmine's Wedding.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="h-screen" data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6>Jasmine & Kyle</h1><article class="w-full grid grid-cols-2" data-astro-cid-j7pv25f6><div class="flex justify-center items-center" data-astro-cid-j7pv25f6><div class="bg-black rounded-full w-96 h-96" data-astro-cid-j7pv25f6></div></div><div data-astro-cid-j7pv25f6><h2 data-astro-cid-j7pv25f6>This is our wedding site</h2><p data-astro-cid-j7pv25f6>Here is some description text....</p></div></article></main>` })}`;
}, "C:/Users/sonof/Documents/coding/wedding/src/pages/index.astro", void 0);

const $$file = "C:/Users/sonof/Documents/coding/wedding/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
