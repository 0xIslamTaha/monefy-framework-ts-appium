
export async function enterAmount(amount: number) {
  for (const char of `${amount}`) {
    await $(`[text="${char}"]`).click();
  }
}

/**
 * Selects a category from the category selection screen in the UI.
 *
 * @param category - The name of the category to select.
 * @returns A promise that resolves when the category has been selected.
 *
 * @example
 * await chooseCategory('Food');
 */
export async function chooseCategory(category: string) {
  await $('[text="CHOOSE CATEGORY"]').click();
  await $(`[text="${category}"]`).click();
}
