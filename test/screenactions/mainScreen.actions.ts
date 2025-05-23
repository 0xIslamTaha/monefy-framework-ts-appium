import { parseBalanceToNumber } from '@helpers/utils';
import * as categoriesData from '@data/categories.data';
import { enterAmount, chooseCategory } from './newTransactions.actions';

/**
 * Retrieves the current balance displayed on the main screen.
 *
 * This function locates the element with the ID 'balance_amount',
 * extracts its text content, and parses it into a number.
 *
 * @returns {Promise<number>} A promise that resolves to the current balance as a number.
 */
export async function getCurrentBalance(): Promise<number> {
  const balance = await $('#balance_amount').getText();
  return parseBalanceToNumber(balance);
}

/**
 * Sets the income by selecting the "INCOME" option, entering the specified amount,
 * and choosing the given income category.
 *
 * @param amount - The income amount to be set.
 * @param category - The category under which the income should be recorded.
 */
export async function setIncome(amount: number, category: categoriesData.IncomeCategories) {
  await $('[text="INCOME"]').click();
  await enterAmount(amount);
  await chooseCategory(category);
}

/**
 * Sets an expense by selecting the "EXPENSE" option, entering the specified amount,
 * and choosing the given expense category.
 *
 * @param amount - The amount to set for the expense.
 * @param category - The category of the expense, as defined in `categoriesData.ExpensesCategories`.
 * @returns A promise that resolves when the expense has been set.
 */
export async function setExpense(amount: number, category: categoriesData.ExpensesCategories) {
  await $('[text="EXPENSE"]').click();
  await enterAmount(amount);
  await chooseCategory(category);
}

/**
 * Selects a category from the pie graph and sets an expense with the specified amount.
 *
 * @param amount - The amount to set for the expense.
 * @param category - The category to select from the list of expense categories.
 * @remarks
 * This function finds the index of the given category, clicks the corresponding element in the pie graph,
 * enters the specified amount, and confirms the addition of the expense.
 */
export async function selectCategoryAndSetExpense(amount: number, category: categoriesData.ExpensesCategories) {
  const _categoryIndex = categoriesData.expensesCategories.indexOf(category);
  await $('#piegraph').$$('android.widget.ImageView')[_categoryIndex].click();
  await enterAmount(amount);
  await $('[text*="ADD"]').click();
}
