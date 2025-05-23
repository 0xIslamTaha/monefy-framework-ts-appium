const APP_PATH = `./app/${process.env.APP_NAME}`;
const PLATFORM_NAME = process.env.PLATFORM_NAME || 'Android';
const PLATFORM_VERSION = process.env.PLATFORM_VERSION || '16';
const DEVICE_NAME = process.env.DEVICE_NAME || 'Medium Phone API 36.0';
const APPIUM_PORT = process.env.APPIUM_PORT;

export const config: WebdriverIO.Config = {
  services: [
        ['appium', {
            args: {
              port: Number(APPIUM_PORT),
            }
        }]
    ],
  runner: 'local',
  tsConfigPath: './tsconfig.json',
  specs: ['./test/specs/**/*.ts'],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      platformName: PLATFORM_NAME,
      'appium:platformVersion': PLATFORM_VERSION,
      'appium:deviceName': DEVICE_NAME,
      'appium:app': APP_PATH,
      'appium:automationName': 'UiAutomator2',
      'appium:ensureWebviewsHavePages': true,
      'appium:nativeWebScreenshot': true,
      'appium:newCommandTimeout': 3600,
      'appium:connectHardwareKeyboard': true,
      'appium:appWaitActivity': '*'
    }
  ],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: './allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false
      }
    ]
  ],
  
};
