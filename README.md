React 学习

### 未来的前端开发一定是组件化的开发

1.有利于团队协作开发 2.便于组件复用： 提高开发效率 ...

## 组件划分

1.  普通业务组件 【没有复用性】，单独拆分出来一个模块
2.  通用业务组件 【具有复用性】

## 功能组件 适用于多个项目 【例如 UI 组件库】

## 组件化开发必然会带来工程化的处理

    + 也就是基于 webpack等工具【vite/rollup/turbopack...】
    + 实现组件合并、压缩打包等
    + 代码编译、兼容、校验等

## React 项目 package.json

-   "name": "react-js", ## 创建项目名称
-   "version": "0.1.0", ## 创建项目版本
-   "private": true,
-   "dependencies": {
-   "@babel/core": "^7.16.0", ## es6 转 es5
-   "babel-preset-react-app": "^10.0.1", ##对@babel/preset-env 语法包的重写 目的识别 react 语法 把 ES6 转为 es5
-   "eslint": "^8.40.0",
-   "eslint-config-react-app": "^7.0.1",
-   "eslint-webpack-plugin": "^3.1.1",
-
-
-
-
-
-
-
-
-   "react": "^18.2.0", ## react 框架的核心
-   "react-dom": "^18.2.0", react 视图渲染的核心 基于 React 构建 webapp
-   "react-scripts": "5.0.1", 脚手架为了使项目目录干净，将 webpack'的打包规则及相关的插件都隐藏到了 node_moudles 目录下
-   "web-vitals": "^2.1.4" 性能检测工具
-   },

## 打包命令基于 react-scripts 处理

-   "scripts": {
-   "start": "react-scripts start", ## 开发环境： 启动项目
-   "build": "react-scripts build", ## 生产环境： 打包项目到 dist 文件
-   "test": "react-scripts test", ## 单元测试
-   "eject": "react-scripts eject" ## 暴露 webpack 配置规则「因为需要修改默认的配置规则」
-   },

-   "eslintConfig": { ## 对 webpack 中 ESlint 语法检测 的相关配置
-   "extends": [
-             "react-app",
-             "react-app/jest"
-   ]
-   },
-   "browserslist": { ## 浏览器的兼容配置
-   postcss-loader + autoprefixer 会给 css3 设置相关的前缀
-   babel-loader 会把 es6 编译为 es5
-   "production": [ 生产环境
-                    ">0.2%",   ## 使用率超过0.2% 的
-                    "not dead", ## 不考虑IE
-                    "not op_mini all" ## 不考虑欧朋浏览器
-   ],
-   "development": [ 开发环境
-                    "last 1 chrome version",
-                    "last 1 firefox version",
-                    "last 1 safari version"
-   ]
-   }
-   "babel": { babel-loader 的额外配置
-   "presets": [
-            "react-app"
-   ]
-   }
-   "devDependencies": { ### 开发依赖
-   "@typescript-eslint/eslint-plugin": "^5.59.6",
-   "@typescript-eslint/parser": "^5.59.6",
-   "eslint-config-prettier": "^8.8.0", ### 禁用所有和 Prettier 产生冲突的规则
-   "eslint-plugin-prettier": "^4.2.1", ### 把 Prettier 应用到 Eslint，配合 rules "prettier/prettier": "error" 实现 Eslint 提醒。
-   "prettier": "^2.8.8" ### 格式化规则程序 #只在开发模式下进行检查，也就只需要安装到开发环境即可。
-   "prop-types": "^15.8.1"
-   }
-   react-native 构建和渲染 app 的

## .prettierrc 文件格式化配置及解释 此依赖只针对于开发阶段

-   {
-   "useTabs": false, ## 使用 tab 缩进还是空格缩进，选择 false；
-   "trailingComma": "none" ## 在多行输入的尾逗号是否添加，设置为 none；\_/,
-   "semi": true ## 语句末尾是否要加分号，默认值 true，选择 false 表示不加；\_/,
-   "singleQuote": true ## 使用单引号还是双引号，选择 true，使用单引号；\_/,
-   "jsxSingleQuote": true, ## . jsx 文件里使用单引号\_/
-   "endOfLine": "lf", ## 换行符类型 lf - \n Linux 和 MacOS 换行符 \_/
-   "printWidth": 120 ## 当行字符的长度，推荐 80，也有人喜欢 100 或者 120； \_/,
-   "tabWidth": 4 ## tab 是空格的情况下，是几个空格，选择 2 个； \_/,
-   "proseWrap": "never",
-   "bracketSpacing": true, ## 在单行对象中，在左右保留一个空格，如{ a: b } \_/
-   "arrowParens": "always", ## 箭头函数，参数添加圆括号，如(x)=>y\_/
-   "overrides": [
-        {
-         "files": ".prettierrc",
-         "options": {
-          "parser": "json"
-          }
-         }
-         ]
-   }

### setupProxy.js 处理跨域
