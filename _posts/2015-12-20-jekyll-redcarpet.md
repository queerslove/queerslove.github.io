---
layout: post
title: Jekyll的Markdown解析
description: redcarpet设置及其他
disqus: true
tags: Jekyll
---

使用redcarpet作为解析工具。

1. 安装。
2. 在`_config.yml`中按需加入`extensions`。（**此时有可能出现奇怪报错，在其他文本编辑工具之中编辑之后再复制过去即可。**）
3. 按照对应内容加入css文件（**如果不加入，表现为依旧无法解析**）。

但即使按照上述步骤操作，一些选项似乎仍有问题，如`underline`(只能通过html`<u>`与`<\u>`标签解决)，`footnotes`等。


---
**版权声明：自由转载-非商用-非衍生-保持署名（[创意共享3.0许可证](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh)）**