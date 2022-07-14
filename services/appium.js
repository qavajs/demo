const { launcher: AppiumLauncher } = require('@wdio/appium-service');
class Appium {
    options = {};
    childProcess = null;
    async before() {
        this.childProcess = new AppiumLauncher(this.options, [])
        return this.childProcess.onPrepare()
    }

    async after() {
        console.log('after');
        return this.childProcess._process.kill(0)
    }
}

module.exports = new Appium();
