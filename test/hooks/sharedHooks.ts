export function registerAppiumHooks(APP_ID: string, getBalance: () => Promise<number>, passOnBoarding: () => Promise<void>) {
  let initialBalance: number;

  beforeEach(async function () {
    await driver.activateApp(APP_ID);
    await passOnBoarding();
    initialBalance = await getBalance();
  });

  afterEach(async function () {
    await driver.executeScript('mobile: clearApp', [{ appId: APP_ID }]);
  });

  return () => initialBalance;
}
