if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>s(e,o),f={module:{uri:o},exports:c,require:d};i[o]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Dum4pEW_.css",revision:null},{url:"assets/index-IDgkR1PC.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"favicon.svg",revision:"216eda1428fa092a8fb6ca81a7028514"},{url:"icon512_maskable.png",revision:"bf3d74721f9521a4e4e6f28284ec1051"},{url:"icon512_rounded.png",revision:"7cda67f1db94b662f9fbb2e3d0ebce1b"},{url:"index.html",revision:"9785350afbbb984f9060379152c20d4b"},{url:"logo.svg",revision:"79ba9f8aec4fef4771f90cd03d6214d3"},{url:"screenshots/desktop.png",revision:"9d5c4f856674bb19d85132d53d862726"},{url:"screenshots/mobile.png",revision:"8f102425632c723446c43c4d4c682450"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon512_maskable.png",revision:"bf3d74721f9521a4e4e6f28284ec1051"},{url:"icon512_rounded.png",revision:"7cda67f1db94b662f9fbb2e3d0ebce1b"},{url:"manifest.webmanifest",revision:"c62c1048bc0a9f9295a5b83c4cbf7694"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
