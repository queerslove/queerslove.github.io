---
layout: post
title: ToC in Jekyll
description: toc.js实现
disqus: true
tags: Jekyll
---

1. 下载[JS插件ToC](https://github.com/ghiculescu/jekyll-table-of-contents)。
2. 模板引用。
3. 需要处加入`<div id="toc"></div>`。
4. 在`<\body>`前加入如下代码。

```js
<script type="text/javascript">
$(document).ready(function() {
    $('#toc').toc();
}); 
</script>
```

---
**版权声明：自由转载-非商用-非衍生-保持署名（[创意共享3.0许可证](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh)）**