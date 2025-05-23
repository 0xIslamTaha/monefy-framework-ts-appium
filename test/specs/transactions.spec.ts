import { expect } from '@wdio/globals';
import { registerAppiumHooks } from '@hooks/sharedHooks';
import { passOnBoardingScreens } from '@actions/onBoarding.actions';
import * as mainScreenActions from '@actions/mainScreen.actions';

const APP_ID: string = process.env.APP_ID || 'com.monefy.app.lite';
const getInitialBalance = registerAppiumHooks(APP_ID, mainScreenActions.getCurrentBalance, passOnBoardingScreens);

describe('GIVEN Monefy App, WHEN interacting with the money entry,', function () {
  
  it('SHOULD increase the balance by the income amount when a new income transaction is added', async function () {
    const incomeAmount = 200;
    const category = 'Salary';
    await mainScreenActions.setIncome(incomeAmount, category);
    const currentBalance = await mainScreenActions.getCurrentBalance();
    expect(currentBalance).toEqual(getInitialBalance() + incomeAmount);
  });

  it('SHOULD decrease the balance by the expense amount when a new expense transaction is added', async function () {
    const expenseAmount = 100;
    const category = 'Bills';
    await mainScreenActions.setExpense(expenseAmount, category);
    const currentBalance = await mainScreenActions.getCurrentBalance();
    expect(currentBalance).toEqual(getInitialBalance() - expenseAmount);
  });

  it('SHOULD allow the user to add an expense via the category selector and update the balance accordingly', async function () {
    const expenseAmount = 50;
    const category = 'House';
    await mainScreenActions.selectCategoryAndSetExpense(expenseAmount, category);
    const currentBalance = await mainScreenActions.getCurrentBalance();
    expect(currentBalance).toEqual(getInitialBalance() - expenseAmount);
  });
});
