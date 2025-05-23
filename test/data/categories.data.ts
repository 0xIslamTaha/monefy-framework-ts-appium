export const expensesCategories = [
  'Bills',
  'Car',
  'Clothes',
  'Communication',
  'House',
  'Entertainment',
  'Food',
  'Gifts',
  'Health',
  'Eating out',
  'Pets',
  'Sports',
  'Taxi',
  'Toiletry',
  'Transport',
] as const;

export type ExpensesCategories = typeof expensesCategories[number];

export const incomeCategories = [
    'Salary',
    'Deposit',
    'Savings',
] as const;

export type IncomeCategories = typeof incomeCategories[number];
