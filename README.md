# koa脚手架

使用 koa + pg + sequelize

可以通过 github 的 issue 进行 bug 或者建议的反馈

# 安装

```bash
git clone git@github.com:LuHaikun/cli-boilerplate.git

cd koa-boilerplate/

npm install
```

修改 `package.json` 的 `name` 和 `version` 字段为项目需要的值

# 运行项目

## 运行开发环境

```bash
npm run dev
```

## 打包项目

```bash
// 项目编译
npm run build

```

# 功能

* commit-msg 校验
* 动态路由加载
* 环境变量配置
* 请求路由配置
* session
* pm2 进程管理
* logger日志收集
* cors跨域配置

# Feature

* 脚手架升级设计
* 拆分路由组件
* 集成pg数据库