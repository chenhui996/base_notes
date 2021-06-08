# react 项目设计流程

- 原型图。
- state 数据结构设计。
- 组件设计。

## 原型图

- 原型图。
  - 根据原型图拆分各个 '组件' 和 '组件内的状态'。

## state 数据结构设计。

设计之前要想：我们是通过什么方式去设计？

- 用数据描述所有内容。
- 数据要结构化，易于程序操作（遍历、查找）。
  - 结构化：数组、对象的方式。
  - 非结构化：字符串，还需要我们自己去拆解。
- 数据要可扩展，以便增加新的功能。

### 以 todoList 为例

todoList 中 list 的设计：

```js
const [list, setList] = useState({
  list: [
    {
      id: 1,
      title: "title1",
      completed: false,
    },
  ],
});
```

### 区分 功能 和 内容

记住，像 input 输入框，创建新 item，这些是功能，不是内容。

- 功能：
  - 数据可操作的东西。
  - 内容就是你整个产品中 ———— 已存储的一些数据。

### id

- 设计数据结构：
  - 只要是 list ，一定要给 id。而且 id 不能重复。

---

## 组件设计

- 从功能上拆分层次。
- 尽量让组件 '原子化'。
  - 一个组件负责做一个功能足以，不用负责太多。
- 区分组件类型：
  - 容器组件(只管理数据)。（最外层，不管显示，数据全靠容器组件传）
  - UI 组件(只显示视图)。（上层组件传过来什么数据，就渲染什么数据）