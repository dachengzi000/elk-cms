
'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const config = require('../template')
const chalk = require('chalk')

module.exports = () => {
 co(function *() {
    // 处理用户输入
      let tplName = yield prompt('Template Name: ')
      let projectName = yield prompt('Project Name: ')
      let gitUrl,branch;
    if (!config.tpl[tplName]) {
      console.log(chalk.red('\n × Template does not exit!'))
      process.exit()
    }
    gitUrl = config.tpl[tplName].url
    branch = config.tpl[tplName].branch

    // git命令，远程拉取项目并自定义项目名
    // 从远程仓库克隆岛自定义目录，并切换到对应的分支
    let cmdStr = `git clone ${gitUrl} && cd ${projectName} && git checkout ${branch}`

    console.log(chalk.white('\n Start generating...'))

    exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        console.log(error)
        process.exit()
      }
      console.log(chalk.green('\n √ Generation completed!'))
      console.log(`\n cd ${projectName} && npm install \n`)
      process.exit()
    })
  })
}
