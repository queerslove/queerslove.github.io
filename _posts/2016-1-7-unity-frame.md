---
layout: post
title: Unity项目架构设计与开发管理笔记
description: Unity2015技术课程
disqus: true
tags: Unity
---

##常用的Unity架构

常用的Unity架构方案有：

- EmptyGo（GameObject.Finde()导致混乱）
- Simple GameManager（Singleton，小型项目适用）
- Manager of Managers（除了GameManager之外其他均可复用）
	- MainManager
		- EventManager
		- AudioManager
		- GUIManager（用于控制UI逻辑）
		- PoolManager
		- LevelManager
		- SaveManager
		- MenuManager(用于控制UI动画)	
- MVCS（StrangeloC）
	- 几个问题：
		- UI event（StrangeloC点击与逻辑分离开来）
		- Game abilities(What if I want to add or change some abilities)（injection方法）
	- Free + Open Sourse
	- 思想
		- Binding：IBinder.Bind<key>().To<value>();IBinder.Bind<key>().To<value>().ToName(name);
		- Key: event, interface, class
		- Value: callback, implementation, dependent class
		- View -> Mediator -> Command -> Service/Model
		- mediationBinder.Bind<ExampleView>().To<ExampleMediator>();
		- Dispatcher/Listener

- MVVM（uFrame）

View Mediator



##Manager of Managers详解


中型以上项目必须具有：

- LevelManager
	- 自生LoadApplication具有以下三个问题
		- 不能随意变化顺序
		- 不能载入参数（如敌人数量，种类）
		- 不能设定多个版本的关卡
	- 设计：配置表；```
	LevelManager.LoadNext();
	```；关卡切换的颜色、透明度与动画变化处理
	- 具体实现可参考Asset Store中的MadLevelManager
			
- PoolManager（涉及到GC问题）
	- 简单设计： 
	``` C#
	private List<GameObject> dormantObjects = new List<GameObject>();
	```
	（储存，暂时不释放；包括所有GameObject与Prefab）。
		- 问题：
			- 没有体现prefab的Load/Unload管理。
			- 只管理了静态物体而没有管理正在运行的物体。
			- 设有上限，但并不为prefab分类。
	- 优化设计
		- PoolManager
			- SpawnPool（管理一类物体，定义为空物体，用字典管理PrefabPool）
				- PrefabPool（两个List，管理加载/卸载过程）
					- ActivePool
					- InactivePool
	- 简单设计示例代码:
					
``` C#
public GameObject Spawn(GameObject go) {
	GameObject temp = null;
	if(dormantObjects.Count  > 0){
		foreach (GameObject dob in dormantObjects){
			if (dob.name == go.name){
				// Find an available GameObject.
				temp = dob;
				dormantObjects.Remove(temp);
				return temp; 
			}
		}
	}
	// Now instantiate a new GameObject.
	temp = GameObject.Instantiate(go) as GameObjec;
	temp.name = go.name;
	return temp;
}

public void Despawn(GameObject go) {
	go.transform.parent = PoolManager.tranform;
	go.SetActive(false);
	dormantObject.Add(go);
	Trim()；
}

public void Trim() {
	while (dormantObjects.Counts > Capacity)
	{
		GameObject dob = dormantObjects[0];
		dormantObjects.RemoveAt(0);
		Destroy(dob);
	}
}

```
			


		
	
- SaveManager

##结论

1. 资深团队可以使用框架，并且可以选择性地使用。
2. 框架如果不能使用得当，将会导致效率下降。
3. UI与逻辑分离。


##准则

1. 版本控制：手工配置.gitignore。
2. 使用C#。
3. 使用有含义的名字。
4. 文件夹与游戏对象对应起来。
5. 对于警告与错误零容忍。
6. 对于动态内存分配零容忍。
7. `GetComponent<>`，`FindGameObject()`等是很慢的操作，在项目中要避免。
8. 美术资源要严格管理。

##Unity测试框架

可以从Asset Store免费下载。

**把每一行代码当做可以收藏并且能够传递下去。**


---
**版权声明：自由转载-非商用-非衍生-保持署名（[创意共享3.0许可证](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh)）**