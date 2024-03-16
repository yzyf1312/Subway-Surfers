const { app, BrowserWindow, Menu } = require('electron') //导入模块

const createWindow = () => { //将网页加载到新的 BrowserWindow 实例中
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html') //当应用准备就绪时调用前面函数
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null); // 隐藏菜单栏
  createWindow()
})