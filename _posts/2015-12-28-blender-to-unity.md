---
layout: post
title: Blender to Unity
description: 3DMotive – Modular Building in Unity and Blender笔记
disqus: true
tags: Unity Blender
---

1. 在启动画面将Preset设置为Maya以便与Unity统一。
2. Snapping - Incremental。
3. 处理NGons：Select - Faces by size；Alt + M：Merge；remove doubles。
4. Flip normals。
5. 注意右上角的面数。
6. Mesh - UV unwrap。
7. Seam。

##导入Unity

1. 有可能出现“Blender could not convert the .blend file to FBX file.”错误，一个解决办法是在Blender中，选择User Preference - Add On - Import Export：Autodesk FBX format。
2. 更好的解决办法：Export - FBX；
3. 问题：1）数据冗余 -> 摄像机，动画，灯光；2）没有识别边界（可通过在Unity中将Normal值从Import改为Calculate解决）；3）Scale过小（0.01f）。
4. 在Blender之中的解决办法：1）输出FBX时只选中需要的物件与Mesh，勾选使用Modifier；2）选中Edge - Mark Sharp；增加`Edge Split`Modifier，勾选Sharp Edges（无需Bake）；3）使用如下代码解决（这是一段Editor代码，需要放在Assets/Editor文件夹下）。
5. 解决坐标轴不一致的问题：在Blender中将x轴、y轴设为-90度；object - apply - rotation。（确保输出时Y forward，Z up。）
6. 导入Texture，新建Materials，并且将Texture拖入。
7. Move + V：snap to vortex。

{% highlight c# bash linenos %}
using UnityEditor;

public class FBXScaleFix : AssetPostprocessor
{
	public void OnPreprocessModel(){
		ModelImporter moderImporter = (ModelImporter) assetImporter;
		modelImporter.globalScale = 1;
	}
}
{% endhighlight %}




---
**版权声明：自由转载-非商用-非衍生-保持署名（[创意共享3.0许可证](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh)）**