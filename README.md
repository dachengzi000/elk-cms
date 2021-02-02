# 开发脚手架需要依赖npm包
- commander: 可以自动的解析命令和参数，用于处理用户输入的命令(https://github.com/tj/commander.js/)
- inquirer: 通用的命令行用户界面集合，用于和用户进行交互
- download-git-repo: git仓库下载工具，通常用来下载模板代码
- ora: 终端loading美化工具,下载过程久的话，可以用于显示下载中的动画效果
- chalk: 命令行输入/输出美化工具，想要五彩版本的命令行，选它就对了
- handlebars: 模板引擎,将用户提交的信息动态填充到文件中
- log-symbols，可以在终端上显示出 √ 或 × 等的图标

- co: 异步流程控制工具, 用更舒服的方式写异步代码
- co-prompt: 传统的命令行只能单行一次性地输入所有参数和选项，使用这个工具可以自动提供提示信息，并且分步接收用户的输入，体验类似npm init时的一步一步输入参数的过程

- 项目根目录下建立\command文件夹，专门用来存放命令处理文件
- 根目录下建立templates.json文件并写入如下内容，用来存放模版信息 {"tpl": {}}

## 模板
- 一个模版就是一个项目的样板，包含项目的完整结构和信息
- 模板信息存储在templates.json的文件中
- 用户可以利用命令行对templates.json进行添加、删除、展示等操作
- 用户选择不同的模板，meo会自动从远程仓库把相应的模板拉取到本地，从而完成项目的搭建工作

### file
- 建立项目，在package.json里面写入依赖并执行npm install
- 在根目录下建立\bin文件夹，在里面建立一个无后缀名的elk-cms文件
- bin\elk-cms文件是整个脚手架的入口文件
- command命令

#### 全局使用
- npm link 即把elk-cms命令绑定到全局(之后直接使用elk-cms作为命令开头)

##### 测试
- elk-cms 查看 options & commands
- elk-cms add | a  添加模板命令
- elk-cms init | i 生成项目命令
- elk-cms delete | d 删除模板命令
- elk-cms list | l 展示模板列表命令

- 注意：(只需要知道模板的git https地址和branch就可以不断地往elk-cms上面添加)
- 团队协作,只需要分享elk-cms的templates.json文件即可