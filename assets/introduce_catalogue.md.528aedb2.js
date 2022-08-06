import{_ as n,c as e,b as s,d as l,t as r,a as p,o}from"./app.b53ef2f6.js";const F=JSON.parse('{"title":"\u76EE\u5F55\u4ECB\u7ECD","description":"","frontmatter":{"title":"\u76EE\u5F55\u4ECB\u7ECD"},"headers":[{"level":2,"title":"\u6982\u89C8","slug":"\u6982\u89C8"},{"level":2,"title":"src","slug":"src"},{"level":3,"title":"common","slug":"common"},{"level":3,"title":"types","slug":"types"},{"level":3,"title":"enums","slug":"enums"},{"level":3,"title":"main","slug":"main"},{"level":3,"title":"preload","slug":"preload"},{"level":3,"title":"renderer","slug":"renderer"},{"level":2,"title":".env","slug":"env"},{"level":2,"title":"scripts","slug":"scripts"},{"level":2,"title":"public","slug":"public"},{"level":2,"title":"build","slug":"build"},{"level":2,"title":"dist","slug":"dist"},{"level":2,"title":"icons","slug":"icons"},{"level":2,"title":"logs","slug":"logs"},{"level":2,"title":"out","slug":"out"}],"relativePath":"introduce/catalogue.md","lastUpdated":1659776625000}'),t={name:"introduce/catalogue.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(`<h2 id="\u6982\u89C8" tabindex="-1">\u6982\u89C8 <a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> electron</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vue3</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">quiet</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env  # \u9ED8\u8BA4\u52A0\u8F7D\u7684\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">npmrc  # \u5305\u7BA1\u7406\u5668\u76F8\u5173\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> build   # vite\u63D2\u4EF6\u53CA\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> dist   # dev\u73AF\u5883\u8F93\u51FA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> icons  # \u9879\u76EE\u56FE\u6807\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> logs  # \u672C\u5730\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> out  # electron</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">builder\u8F93\u51FA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> public  # \u9759\u6001\u8D44\u6E90\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> scripts  # \u6784\u5EFA\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> src  # \u9879\u76EE\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> common  # \u53CC\u8FDB\u7A0B\u901A\u7528\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> enums  # \u679A\u4E3E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> main  # \u4E3B\u8FDB\u7A0B\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> preload  # \u9884\u52A0\u8F7D\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> renderer  # \u6E32\u67D3\u8FDB\u7A0B\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> types  # \u5168\u5C40\u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|--</span><span style="color:#A6ACCD;"> test  # \u6D4B\u8BD5\u6587\u4EF6</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="src" tabindex="-1">src <a class="header-anchor" href="#src" aria-hidden="true">#</a></h2><h3 id="common" tabindex="-1">common <a class="header-anchor" href="#common" aria-hidden="true">#</a></h3><h3 id="types" tabindex="-1">types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h3><h3 id="enums" tabindex="-1">enums <a class="header-anchor" href="#enums" aria-hidden="true">#</a></h3><h3 id="main" tabindex="-1">main <a class="header-anchor" href="#main" aria-hidden="true">#</a></h3><h3 id="preload" tabindex="-1">preload <a class="header-anchor" href="#preload" aria-hidden="true">#</a></h3><h3 id="renderer" tabindex="-1">renderer <a class="header-anchor" href="#renderer" aria-hidden="true">#</a></h3><h2 id="env" tabindex="-1">.env <a class="header-anchor" href="#env" aria-hidden="true">#</a></h2><h2 id="scripts" tabindex="-1">scripts <a class="header-anchor" href="#scripts" aria-hidden="true">#</a></h2><h2 id="public" tabindex="-1">public <a class="header-anchor" href="#public" aria-hidden="true">#</a></h2><h2 id="build" tabindex="-1">build <a class="header-anchor" href="#build" aria-hidden="true">#</a></h2><h2 id="dist" tabindex="-1">dist <a class="header-anchor" href="#dist" aria-hidden="true">#</a></h2><h2 id="icons" tabindex="-1">icons <a class="header-anchor" href="#icons" aria-hidden="true">#</a></h2><h2 id="logs" tabindex="-1">logs <a class="header-anchor" href="#logs" aria-hidden="true">#</a></h2><h2 id="out" tabindex="-1">out <a class="header-anchor" href="#out" aria-hidden="true">#</a></h2>`,17);function h(a,D,A,C,u,y){return o(),e("div",null,[s("h1",c,[l(r(a.$frontmatter.title)+" ",1),i]),d])}var m=n(t,[["render",h]]);export{F as __pageData,m as default};