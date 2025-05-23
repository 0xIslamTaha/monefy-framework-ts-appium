import { expect } from '@wdio/globals';
import { registerAppiumHooks } from '@hooks/sharedHooks';
import { passOnBoardingScreens } from '@actions/onBoarding.actions';
import * as mainScreenActions from '@actions/mainScreen.actions';
import * as filterActions from '@actions/filter.actions';

const APP_ID: string = process.env.APP_ID || 'com.monefy.app.lite';
registerAppiumHooks(APP_ID, mainScreenActions.getCurrentBalance, passOnBoardingScreens);

describe('GIVEN Monefy App, WHEN user filters data by date', function () {
  it('SHOULD display only the income entries for the selected date when the user adds income and applies a date filter', async function () {
    const date = '01/01/25';
    await mainScreenActions.setIncome(200, 'Salary')
    await filterActions.filterByChooseDate(date);

    const filteredIncome = await mainScreenActions.getCurrentBalance();
    expect(filteredIncome).toEqual(0);
  });
});
