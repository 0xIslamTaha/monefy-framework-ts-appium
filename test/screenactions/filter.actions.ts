async function navigateToFiltersMenu() {
  await $('~Open navigation').click();
}

/**
 * Filters items by selecting a specific date using the UI.
 *
 * Navigates to the filters menu, opens the date picker, switches to text input mode,
 * enters the provided date, and confirms the selection.
 *
 * @param date - The date string to filter by (format should match the expected input of the date picker).
 * @returns A promise that resolves when the filter action is complete.
 */
export async function filterByChooseDate(date: string) {
  await navigateToFiltersMenu();
  await $('[text="Choose date"]').click();
  await $('~Switch to text input mode').click();
  await $('.android.widget.EditText').setValue(date);
  await $('[text="OK"]').click();
}
