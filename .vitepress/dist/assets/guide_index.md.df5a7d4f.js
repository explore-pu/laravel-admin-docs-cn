import{_ as e,o as r,c as t,Q as a}from"./chunks/framework.a7360db3.js";const b=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"总览","slug":"总览","link":"#总览","children":[]},{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"谁在使用","slug":"谁在使用","link":"#谁在使用","children":[]},{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"交流","slug":"交流","link":"#交流","children":[]},{"level":2,"title":"支持","slug":"支持","link":"#支持","children":[{"level":4,"title":"License","slug":"License","link":"#License","children":[]}]}],"relativePath":"guide/index.md"}'),l={name:"guide/index.md"},n=a('<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始">¶</a></h1><h2 id="总览" tabindex="-1">总览 <a class="header-anchor" href="#总览">¶</a></h2><p>laravel-admin 是一个可以快速帮你构建后台管理的工具，它提供的页面组件和表单元素等功能，能帮助你使用很少的代码就实现功能完善的后台管理功能。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>当前版本(v1.7.*)需要安装PHP 7+和Laravel 5.5+|6.x</p></div><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性">¶</a></h2><ul><li>内置用户和权限系统</li><li><code>model-grid</code>支持快速构建数据表格</li><li><code>model-form</code>支持快速构建数据表单</li><li><code>model-tree</code>支持快速构建树状数据</li><li>内置40+种form元素组件、以及支持扩展组件</li><li>支持<code>Laravel</code>的多种模型关系</li><li><code>mysql</code>、<code>mongodb</code>、<code>pgsql</code>等多数据库支持</li><li>支持引入第三方前端库</li><li>数据库和artisan命令行工具的web实现</li><li>支持自定义图表</li><li>多种常用web组件</li><li>支持本地和oss文件上传</li></ul><h2 id="谁在使用" tabindex="-1">谁在使用 <a class="header-anchor" href="#谁在使用">¶</a></h2><table><thead><tr><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td><a href="https://www.tencent.com/" target="_blank" rel="noreferrer">腾讯</a></td><td><a href="https://www.baidu.com/" target="_blank" rel="noreferrer">百度</a></td><td><a href="https://www.linghit.com/" target="_blank" rel="noreferrer">灵机文化</a></td><td><a href="http://www.trc-china.com/" target="_blank" rel="noreferrer">科零</a></td><td><a href="http://www.jmltek.net/" target="_blank" rel="noreferrer">成都聚米粒</a></td><td><a href="https://mall-to.com/" target="_blank" rel="noreferrer">深圳墨兔科技</a></td></tr><tr><td><a href="https://okrd.cn/" target="_blank" rel="noreferrer">模拟考试助手</a></td><td><a href="https://www.qiudian.net/" target="_blank" rel="noreferrer">秋点科技</a></td><td><a href="http://www.beats.net.cn/" target="_blank" rel="noreferrer">上海彼邑网络科技</a></td><td><a href="https://ai.wetax.com.cn/" target="_blank" rel="noreferrer">高灯科技创新中心</a></td><td><a href="http://www.yalianhui.com/" target="_blank" rel="noreferrer">北京牙联惠</a></td><td><a href="https://www.golcer.com/" target="_blank" rel="noreferrer">高策智慧零售数据平台</a></td></tr><tr><td><a href="http://www.7rcv.com/" target="_blank" rel="noreferrer">小于号网络科技</a></td><td><a href="http://www.ebchina.com/" target="_blank" rel="noreferrer">中国光大集团</a></td><td><a href="http://www.torindrive.com/" target="_blank" rel="noreferrer">苏州通润驱动设备</a></td><td><a href="https://www.rockfintech.com/" target="_blank" rel="noreferrer">上海钜石信息科技</a></td><td><a href="https://www.quanta-nimbus.com/" target="_blank" rel="noreferrer">广州量子云科技</a></td><td><a href="http://www.igumao.com/" target="_blank" rel="noreferrer">珠海谷猫科技</a></td></tr><tr><td><a href="http://daohang.mianshia.com/" target="_blank" rel="noreferrer">程序员精选导航</a></td><td><a href="http://www.iwdjy.com/" target="_blank" rel="noreferrer">四川文鼎文化科技</a></td><td><a href="https://www.paycats.cn/" target="_blank" rel="noreferrer">支付猫</a></td><td><a href="https://www.xinkezhi.com/" target="_blank" rel="noreferrer">馨科智科技（深圳）</a></td><td><a href="http://www.brtoo.cn/" target="_blank" rel="noreferrer">八兔软件科技（上海）</a></td><td><a href="https://www.zoogooo.com/" target="_blank" rel="noreferrer">四川卓谷科技</a></td></tr><tr><td><a href="http://editideas.cn/" target="_blank" rel="noreferrer">福州辑思文化</a></td><td><a href="http://www.meiweixueyuan.cn/" target="_blank" rel="noreferrer">美味学院</a></td><td><a href="http://hiqicheng.com/" target="_blank" rel="noreferrer">深圳企程网络</a></td><td><a href="http://www.lukus.cn/" target="_blank" rel="noreferrer">北京路酷出行</a></td><td><a href="http://www.hrbcb.com.cn/" target="_blank" rel="noreferrer">哈尔滨银行</a></td><td><a href="http://www.2345.com/" target="_blank" rel="noreferrer">上海二三四五网络科技</a></td></tr><tr><td><a href="https://laravel-admin.org/docs/zh/1.x/README#" target="_blank" rel="noreferrer">贵州国卫信安科技</a></td><td><a href="https://www.y2b.xyz/" target="_blank" rel="noreferrer">Y2B downloader</a></td><td><a href="https://yuantian.tech/" target="_blank" rel="noreferrer">无锡元田信息科技</a></td><td><a href="https://jfcat.cn/" target="_blank" rel="noreferrer">山东潍坊玖樱传媒</a></td><td><a href="https://www.fheart.cn/" target="_blank" rel="noreferrer">重庆初心文化传媒</a></td><td><a href="http://www.gxsww.com/" target="_blank" rel="noreferrer">广西智汇云网络科技</a></td></tr><tr><td><a href="https://laravel-admin.org/docs/zh/1.x/README#" target="_blank" rel="noreferrer">江苏艾克斯</a></td><td><a href="http://higgses.com/" target="_blank" rel="noreferrer">成都希格斯网络科技</a></td><td><a href="https://www.foreverblog.cn/" target="_blank" rel="noreferrer">十年之约项目组</a></td><td><a href="https://www.wggai.com/" target="_blank" rel="noreferrer">五宫格信息科技</a></td><td><a href="https://www.rongcloud.cn/" target="_blank" rel="noreferrer">北京云中融信</a></td><td><a href="http://shanyue88.com/" target="_blank" rel="noreferrer">湖南希文网络科技</a></td></tr><tr><td><a href="http://surebetter.cn/" target="_blank" rel="noreferrer">广州数佰特信息</a></td><td><a href="http://www.elscare.com/" target="_blank" rel="noreferrer">厦门鹅卵石网络</a></td><td><a href="https://shifang.tech/" target="_blank" rel="noreferrer">上海拾芳信息</a></td><td><a href="http://www.csxino.cn/" target="_blank" rel="noreferrer">长沙欣诺网络</a></td><td><a href="https://www.wkwang.cn/" target="_blank" rel="noreferrer">陕西唯科网络</a></td><td><a href="https://oran.me/" target="_blank" rel="noreferrer">OranMe Ltd.</a></td></tr></tbody></table><h2 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖">¶</a></h2><p>laravel-admin 基于以下组件或者服务:</p><ul><li><a href="https://laravel.com/" target="_blank" rel="noreferrer">Laravel</a></li><li><a href="https://almsaeedstudio.com/" target="_blank" rel="noreferrer">AdminLTE</a></li><li><a href="http://eonasdan.github.io/bootstrap-datetimepicker/" target="_blank" rel="noreferrer">Datetimepicker</a></li><li><a href="http://fontawesome.io/" target="_blank" rel="noreferrer">font-awesome</a></li><li><a href="http://momentjs.com/" target="_blank" rel="noreferrer">moment</a></li><li><a href="https://www.google.com/maps" target="_blank" rel="noreferrer">Google map</a></li><li><a href="http://lbs.qq.com/" target="_blank" rel="noreferrer">Tencent map</a></li><li><a href="https://github.com/kartik-v/bootstrap-fileinput" target="_blank" rel="noreferrer">bootstrap-fileinput</a></li><li><a href="https://github.com/defunkt/jquery-pjax" target="_blank" rel="noreferrer">jquery-pjax</a></li><li><a href="http://dbushell.github.io/Nestable/" target="_blank" rel="noreferrer">Nestable</a></li><li><a href="http://codeseven.github.io/toastr/" target="_blank" rel="noreferrer">toastr</a></li><li><a href="http://github.com/vitalets/x-editable" target="_blank" rel="noreferrer">X-editable</a></li><li><a href="https://github.com/wpic/bootstrap-number-input" target="_blank" rel="noreferrer">bootstrap-number-input</a></li><li><a href="https://github.com/itsjavi/fontawesome-iconpicker" target="_blank" rel="noreferrer">fontawesome-iconpicker</a></li></ul><h2 id="交流" tabindex="-1">交流 <a class="header-anchor" href="#交流">¶</a></h2><p>QQ群:278455482(已满)、635881319(已满)、533701919(已满)、821831984(已满)</p><h2 id="支持" tabindex="-1">支持 <a class="header-anchor" href="#支持">¶</a></h2><p>如果觉得这个项目帮你节约了时间，不妨支持一下;)</p><p><img src="https://cloud.githubusercontent.com/assets/1479100/23287423/45c68202-fa78-11e6-8125-3e365101a313.jpg" alt="-1"></p><h4 id="License" tabindex="-1">License <a class="header-anchor" href="#License">¶</a></h4><p><code>laravel-admin</code> is licensed under <a href="https://laravel-admin.org/docs/zh/1.x/LICENSE" target="_blank" rel="noreferrer">The MIT License (MIT)</a>.</p>',18),o=[n];function h(d,i,c,f,s,w){return r(),t("div",null,o)}const g=e(l,[["render",h]]);export{b as __pageData,g as default};
