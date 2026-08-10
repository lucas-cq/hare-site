<script setup lang="ts">
const { crt, fontSize } = useReader()

const progress = ref(0)
const showTop = ref(false)

function onScroll() {
  const el = document.documentElement
  const max = el.scrollHeight - el.clientHeight
  progress.value = max > 40 ? (el.scrollTop / max) * 100 : 0
  showTop.value = window.scrollY > 700
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="read-root" :class="{ crt }" :style="{ '--read': fontSize }">

    <div class="rail">
      <img class="rail-logo" src="/images/logo-fade.png" alt="HARE">
      <div class="rail-word">C&nbsp;H&nbsp;A&nbsp;P&nbsp;T&nbsp;E&nbsp;R&nbsp;S</div>
      <a class="rail-exit" href="/">EXIT</a>
    </div>

    <div class="shell">
      <div class="progress"><i :style="{ width: progress + '%' }" /></div>

      <nav class="topbar">
        <div class="navstrip">
          <NuxtLink class="navbtn on" to="/read"><span class="navtile t-red" /><span>Chapters</span></NuxtLink>
          <a class="navbtn" href="/"><span class="navtile t-bone" /><span>Home</span></a>
          <a class="navbtn" href="https://open.spotify.com/artist/3Hm9AH9sEnIjQmgkcSS1Or" target="_blank" rel="noopener"><span class="navtile t-green" /><span>Spotify</span></a>
          <a class="navbtn" href="https://www.youtube.com/@bloodyharestudio" target="_blank" rel="noopener"><span class="navtile t-amber" /><span>YouTube</span></a>
          <a class="navbtn" href="https://www.reddit.com/r/Haremovieseries/" target="_blank" rel="noopener"><span class="navtile t-blue" /><span>Reddit</span></a>
        </div>
      </nav>

      <button v-show="showTop" class="totop" aria-label="Back to top" @click="toTop">&#9650; Top</button>

      <main class="frame">
        <slot />

        <footer class="foot">
          <p>Produced by Bloody Hare Studio</p>
          <p>Est. 2026</p>
          <img src="/images/logo-fade.png" alt="Bloody Hare Studio">
        </footer>
      </main>
    </div>
  </div>
</template>

<style>
/* ============ TOKENS ============ */
.read-root{
  --red:#d02020;
  --ember:#ff8a1f;
  --bone:#e9e2d4;
  --bone-dim:#b4ac9c;
  --mono-dim:#8d8577;
  --mono:"JetBrains Mono",ui-monospace,"SFMono-Regular",Menlo,Consolas,monospace;
  --serif:Georgia,"Times New Roman",Times,serif;
  background:#000;
  color:var(--bone);
  font-family:var(--serif);
  overflow-x:hidden;
  -webkit-text-size-adjust:100%;
}
.read-root *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(208,32,32,.25)}
.read-root img{max-width:100%;display:block}
.read-root a{color:inherit}

/* CRT / dither overlay */
.read-root.crt::after{
  content:"";position:fixed;inset:0;z-index:900;pointer-events:none;
  background:
    repeating-linear-gradient(0deg,rgba(0,0,0,.30) 0px,rgba(0,0,0,.30) 1px,transparent 1px,transparent 3px),
    radial-gradient(ellipse at 50% 40%,transparent 55%,rgba(0,0,0,.55) 100%);
  mix-blend-mode:multiply;opacity:.5;
}

/* ============ LEFT RAIL (desktop) ============ */
.read-root .rail{display:none}
@media(min-width:1024px){
  .read-root .rail{
    display:flex;flex-direction:column;align-items:center;gap:18px;
    position:fixed;left:0;top:0;bottom:0;width:66px;z-index:60;
    background:linear-gradient(90deg,#241a16 0%,#150f0d 60%,#090707 100%);
    border-right:1px solid #000;box-shadow:inset -1px 0 0 #3a2c26;padding:10px 0 16px;
  }
  .read-root .rail-logo{width:46px;filter:brightness(0) invert(1);opacity:.42}
  .read-root .rail-word{
    writing-mode:vertical-rl;font-family:var(--mono);font-size:13px;font-weight:700;
    letter-spacing:.55em;color:#c9bfae;text-shadow:0 1px 0 #000;
    background:linear-gradient(90deg,#3a2b24,#221917);
    border:1px solid #4a382f;border-radius:2px;padding:16px 6px;flex:1;
    display:flex;align-items:center;justify-content:center;
  }
  .read-root .rail-exit{
    font-family:var(--mono);font-size:10px;font-weight:700;color:#0b2b2b;
    background:linear-gradient(180deg,#9fd9d9,#4e9a9a);border:2px outset #7fc0c0;
    padding:0 8px;min-height:44px;min-width:44px;display:flex;align-items:center;
    justify-content:center;text-decoration:none;letter-spacing:.1em;
  }
  .read-root .shell{margin-left:66px}
}

/* ============ TOP NAV ============ */
.read-root .topbar{
  position:static;z-index:80;
  background:linear-gradient(180deg,#c9c9c9 0%,#9a9a9a 45%,#6f6f6f 55%,#4e4e4e 100%);
  border-bottom:2px solid #000;box-shadow:0 2px 0 rgba(0,0,0,.6);padding:5px 8px;
}
@media(min-width:760px){ .read-root .topbar{position:sticky;top:0} }
.read-root .navstrip{
  display:flex;gap:6px;justify-content:center;align-items:stretch;
  overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;
}
.read-root .navstrip::-webkit-scrollbar{display:none}
.read-root .navbtn{
  flex:0 0 auto;text-decoration:none;text-align:center;
  background:linear-gradient(180deg,#e2e2e2,#a8a8a8);
  border:2px outset #d8d8d8;padding:3px 4px 4px;min-width:60px;
  display:flex;flex-direction:column;align-items:center;gap:3px;
}
.read-root .navbtn:active{border-style:inset}
.read-root .navbtn.on{background:linear-gradient(180deg,#f3d9d9,#c79a9a);border-color:#e8caca}
.read-root .navtile{
  width:30px;height:26px;border:1px solid #1a1a1a;display:block;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);
}
.read-root .t-red{background:linear-gradient(150deg,#ff3b1f,#7a0d0d 60%,#2a0303)}
.read-root .t-amber{background:linear-gradient(150deg,#ffc23b,#c05a09 60%,#3a1a02)}
.read-root .t-green{background:linear-gradient(150deg,#7fe27f,#146b14 60%,#032003)}
.read-root .t-blue{background:linear-gradient(150deg,#8fb8ff,#12326f 60%,#040c1f)}
.read-root .t-bone{background:linear-gradient(150deg,#efe6d2,#8c8069 60%,#2b2620)}
.read-root .navbtn span:last-child{
  font-family:var(--mono);font-size:8.5px;font-weight:700;letter-spacing:.06em;
  color:#101010;text-transform:uppercase;line-height:1;white-space:nowrap;
}
@media(min-width:600px){
  .read-root .navbtn{min-width:78px}
  .read-root .navbtn span:last-child{font-size:9.5px}
  .read-root .navtile{width:38px;height:30px}
}

/* ============ PROGRESS / BACK TO TOP ============ */
.read-root .progress{position:fixed;left:0;right:0;top:0;z-index:120;height:3px;background:rgba(26,20,18,.6);pointer-events:none}
.read-root .progress i{display:block;height:100%;background:linear-gradient(90deg,var(--red),var(--ember));box-shadow:0 0 8px rgba(255,138,31,.7)}
.read-root .totop{
  position:fixed;right:14px;bottom:16px;z-index:110;
  font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.12em;color:#f0e4d0;
  background:linear-gradient(180deg,#8f1414,#3a0606);border:3px outset #d04a4a;
  padding:11px 13px;min-height:44px;min-width:44px;cursor:pointer;text-transform:uppercase;
  opacity:.94;box-shadow:0 4px 14px rgba(0,0,0,.7);
}
.read-root .totop:active{border-style:inset}
@media(min-width:1024px){ .read-root .totop{right:22px;bottom:22px} }

/* ============ FRAME / BAND ============ */
.read-root .frame{
  max-width:1180px;margin:0 auto;padding:0 0 60px;background:#050403;
  border-left:1px solid #1a1512;border-right:1px solid #1a1512;min-height:100vh;
}
.read-root .band{
  position:relative;overflow:hidden;
  background:linear-gradient(180deg,#8f1414 0%,#5d0c0c 55%,#2c0505 100%);
  border-bottom:3px solid #000;padding:20px 18px 0;
}
.read-root .band::before{
  content:"";position:absolute;inset:0;opacity:.16;pointer-events:none;
  background-image:radial-gradient(rgba(0,0,0,.9) 1px,transparent 1px);background-size:3px 3px;
}
.read-root .band h1{
  position:relative;font-family:var(--serif);font-weight:700;
  font-size:clamp(28px,7.5vw,52px);line-height:1.02;margin:0 0 6px;
  color:#fff;text-shadow:2px 2px 0 rgba(0,0,0,.75);letter-spacing:-.01em;
}
.read-root .partline{
  position:relative;font-family:var(--mono);font-size:11px;font-weight:700;
  letter-spacing:.24em;text-transform:uppercase;color:#ffb3a0;margin:2px 0 0;
}
.read-root .bandrule{height:2px;background:#fff;opacity:.85;margin:14px 0 0}

/* Keeps the artwork's own proportions so nothing is cropped at any width. */
.read-root .horizon{position:relative;aspect-ratio:3.5556;background:#000;overflow:hidden;border-bottom:3px solid #000}
.read-root .horizon img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:50% 50%}
.read-root .horizon::after{
  content:"";position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(60,6,6,.55),rgba(0,0,0,.15) 45%,rgba(5,4,3,.95));
}

/* ============ META / TOOLBAR ============ */
.read-root .meta{padding:14px 18px 12px;background:linear-gradient(180deg,#1b0606,#050403 90%)}
.read-root .meta p{margin:0;font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--mono-dim)}
.read-root .toolbar{
  display:flex;gap:6px;justify-content:center;align-items:center;flex-wrap:wrap;
  padding:10px 12px;background:linear-gradient(180deg,#141110,#0a0807);
  border-top:1px solid #241c18;border-bottom:1px solid #241c18;
}
.read-root .tool{
  font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.1em;color:#c8bda9;
  background:linear-gradient(180deg,#3a3330,#1b1715);border:2px outset #5a4c44;
  padding:10px 14px;min-height:44px;min-width:44px;cursor:pointer;text-transform:uppercase;
}
.read-root .tool:active{border-style:inset}
.read-root .tool.lang{background:linear-gradient(180deg,#6a1616,#2e0606);border-color:#a83a3a #180202 #180202 #a83a3a;color:#f3ded0}

/* ============ PROSE ============ */
.read-root .reader{padding:8px 18px 0}
.read-root .prose{max-width:34em;margin:0 auto;font-size:var(--read);line-height:1.72;color:var(--bone)}
.read-root .prose p{margin:0 0 1.15em}
.read-root .prose p.lore{
  font-style:italic;color:#d9cdb6;border-left:3px solid var(--red);
  padding-left:.9em;margin-left:-.15em;
  background:linear-gradient(90deg,rgba(208,32,32,.06),transparent 70%);
}
.read-root .prose p.lore-soft{font-style:italic;color:#ddd2bc}
.read-root .prose p.first::first-letter{
  float:left;font-size:3.05em;line-height:.82;padding:.06em .1em 0 0;
  color:var(--red);font-weight:700;text-shadow:2px 2px 0 rgba(0,0,0,.8);
}
.read-root .figure{margin:26px auto;max-width:34em}
.read-root .figure .fbox{border:2px solid #000;box-shadow:0 0 0 1px #4a3a30,0 8px 24px rgba(0,0,0,.8);background:#000}
@media(min-width:860px){
  .read-root .prose{max-width:39em}
  .read-root .figure.right{float:right;width:290px;margin:6px 0 18px 28px}
  .read-root .figure.left{float:left;width:290px;margin:6px 28px 18px 0}
}
.read-root .clear{clear:both}
.read-root .div{max-width:34em;margin:34px auto;height:1px;background:linear-gradient(90deg,transparent,#4a3a30,transparent)}

/* ============ WATCH BLOCK / BUTTONS ============ */
.read-root .watchblock{max-width:34em;margin:0 auto;display:flex;flex-direction:column;gap:10px}
.read-root .watch{display:flex;flex-direction:column;gap:8px}
.read-root .watchlang{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.26em;text-transform:uppercase;color:var(--mono-dim)}
.read-root .watchbtns{display:flex;gap:10px}
.read-root .watchbtns>*{flex:1}
.read-root .btnrow{max-width:34em;margin:0 auto;display:flex;flex-direction:column;gap:12px;padding:6px 0 0}
@media(min-width:620px){ .read-root .btnrow.two{flex-direction:row} .read-root .btnrow.two>*{flex:1} }
.read-root .bevel{
  display:flex;align-items:center;justify-content:center;gap:10px;
  text-decoration:none;text-align:center;cursor:pointer;
  font-family:var(--mono);font-weight:700;font-size:13px;letter-spacing:.14em;text-transform:uppercase;
  padding:16px 18px;min-height:54px;border:3px outset;transition:filter .12s ease;
}
.read-root .bevel:active{border-style:inset;filter:brightness(.9)}
.read-root .bevel.yt{background:linear-gradient(180deg,#ff2a2a,#a80000);border-color:#ff7a7a #6b0000 #6b0000 #ff7a7a;color:#fff;text-shadow:1px 1px 0 rgba(0,0,0,.6)}
.read-root .bevel.steel{background:linear-gradient(180deg,#3a3330,#1b1715);border-color:#6a5c53 #0c0a09 #0c0a09 #6a5c53;color:#d7cdba}
.read-root .bevel.ghost{background:linear-gradient(180deg,#181414,#0c0a09);border-color:#40352e #000 #000 #40352e;color:#9b9083}
.read-root .bevel svg{width:18px;height:18px;fill:currentColor;flex:0 0 auto}

/* ============ INDEX ROWS ============ */
.read-root .rows{max-width:920px;margin:6px auto 0;padding:0 14px}
.read-root .row{
  display:block;text-decoration:none;margin:0 0 12px;
  background:linear-gradient(180deg,#15100e,#0a0807);
  border:2px solid #000;box-shadow:inset 0 0 0 1px #33261f,0 4px 0 rgba(0,0,0,.55);
}
.read-root .row .inner{display:flex;align-items:stretch}
.read-root .plate{
  flex:0 0 74px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(160deg,#8f1414,#3a0606);border-right:2px solid #000;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);
}
.read-root .plate .n{font-family:var(--mono);font-size:26px;font-weight:700;color:#fff;line-height:1;text-shadow:2px 2px 0 rgba(0,0,0,.7)}
.read-root .rowbody{flex:1;padding:12px 14px;min-width:0}
.read-root .rowbody h3{margin:0 0 6px;font-family:var(--serif);font-size:20px;color:#fff;line-height:1.2}
.read-root .rowbody h3 .part{
  display:inline-block;margin-left:9px;vertical-align:1px;
  font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:.18em;
  text-transform:uppercase;color:#ffb3a0;border:1px solid #5c2020;padding:2px 6px;
}
.read-root .rowbody .blurb{font-size:15px;color:var(--bone-dim);margin:0 0 8px;line-height:1.5;font-style:italic}
.read-root .rowbody .tags{font-family:var(--mono);font-size:10px;letter-spacing:.12em;color:var(--mono-dim);text-transform:uppercase}
.read-root .rowgo{
  flex:0 0 auto;display:flex;align-items:center;padding:0 14px;
  font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.12em;color:#ffb3a0;
  border-left:1px dashed #3a2b24;
}
.read-root .row.sealed{opacity:.55}
.read-root .row.sealed .plate{background:linear-gradient(160deg,#2b2622,#131110)}
.read-root .row.sealed .plate .n{color:#8d8577}
.read-root .row.sealed .rowbody h3{color:#6e6459}
.read-root .redact{display:inline-block;height:.78em;background:#4a3f36;vertical-align:-.05em;border-radius:1px}
@media(max-width:520px){
  .read-root .rowgo{display:none}
  .read-root .plate{flex:0 0 60px}
  .read-root .plate .n{font-size:21px}
  .read-root .rowbody h3{font-size:17px}
}

/* ============ FOOTER ============ */
.read-root .foot{padding:30px 18px 44px;text-align:center;border-top:1px solid #1a1512;margin-top:34px}
.read-root .foot p{font-family:var(--mono);font-size:10.5px;letter-spacing:.18em;color:#5f564b;margin:0 0 8px;text-transform:uppercase}
.read-root .foot img{height:30px;margin:14px auto 0;filter:brightness(0) invert(1);opacity:.3}
</style>
