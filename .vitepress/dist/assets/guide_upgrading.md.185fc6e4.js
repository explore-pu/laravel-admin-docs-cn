import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a7360db3.js";const A=JSON.parse('{"title":"版本升级","description":"","frontmatter":{},"headers":[{"level":2,"title":"查看当前版本","slug":"查看当前版本","link":"#查看当前版本","children":[]},{"level":2,"title":"更新到最新版本","slug":"更新到最新版本","link":"#更新到最新版本","children":[]},{"level":2,"title":"更新到开发版本","slug":"更新到开发版本","link":"#更新到开发版本","children":[]},{"level":2,"title":"更新指定版本","slug":"更新指定版本","link":"#更新指定版本","children":[]}],"relativePath":"guide/upgrading.md"}'),e={name:"guide/upgrading.md"},p=l(`<h1 id="版本升级" tabindex="-1">版本升级 <a class="header-anchor" href="#版本升级">¶</a></h1><h2 id="查看当前版本" tabindex="-1">查看当前版本 <a class="header-anchor" href="#查看当前版本">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encore/laravel-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span></span>
<span class="line"></span></code></pre></div><h2 id="更新到最新版本" tabindex="-1">更新到最新版本 <a class="header-anchor" href="#更新到最新版本">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encore/laravel-admin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vvv</span></span>
<span class="line"></span></code></pre></div><h2 id="更新到开发版本" tabindex="-1">更新到开发版本 <a class="header-anchor" href="#更新到开发版本">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encore/laravel-admin:dev-master</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vvv</span></span>
<span class="line"></span></code></pre></div><h2 id="更新指定版本" tabindex="-1">更新指定版本 <a class="header-anchor" href="#更新指定版本">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encore/laravel-admin:1.6.15</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vvv</span></span>
<span class="line"></span></code></pre></div><blockquote><h5 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意">¶</a></h5><p>由于每个版本的静态资源或者语言包都有可能会有更新，所以升级版本之后最好运行下面的命令</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">强制发布静态资源文件</span></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vendor:publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tag=laravel-admin-assets</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">强制发布语言包文件</span></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vendor:publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tag=laravel-admin-lang</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">清理视图缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view:clear</span></span>
<span class="line"></span></code></pre></div><p>最后不要忘记清理浏览器缓存</p>`,12),o=[p];function t(c,r,i,C,d,y){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{A as __pageData,D as default};
