# NPM 使用未发布的包

> 背景：开发 npm 包如何测试？没有发布的包能不能使用？本文所用命令为 yarn， npm对应命令请[查询文档](./yarn-npm.md)

## 方法1 `yarn install`

```shell script
$ cd path/to/my-project
$ yarn install path/to/x
```

更多资料：[https://yarn.bootcss.com/docs/cli/install/](https://yarn.bootcss.com/docs/cli/install/)

---

## 方法2 `yarn link`
先创建
```shell script
$ cd react
$ yarn link
yarn link vx.x.x
success Registered "react".
info You can now run `yarn link "react"` in the projects where you want to use this module and it will be used instead.
```
再使用
```shell script
$ cd ../react-relay
$ yarn link react
yarn link vx.x.x
success Registered "react".
```

更多信息：[https://yarn.bootcss.com/docs/cli/link/#toc-yarn-link-package](https://yarn.bootcss.com/docs/cli/link/#toc-yarn-link-package)

两者区别：

1. 最大的区别是 `npm install /path/to/x` 将运行预安装/安装后挂钩，但 `npm link x` 不会。
2. `npm link` 使用全球NPM空间，`npm install /path/to/x` 没有。`npm` 链接在全局空间创建一个符号链接，然后当你从y调用 `npm link x` 时，它会创建一个不直接指向x的符号链接，而是创建一个符号链接。如果你使用不同的全局 node.js 版本，例如 NVM，这是一个重要的区别。
3. `npm install /path/to/x` 会改变 `package.json`，`npm link x` 不会

---

## 方法3 yarn add
```shell script
yarn add <git remote url>#<branch/commit/tag>
```
更多信息：[https://yarn.bootcss.com/docs/cli/add/](https://yarn.bootcss.com/docs/cli/add/)