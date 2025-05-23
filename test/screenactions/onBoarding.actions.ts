
/**
 * Navigates through the onboarding screens of the application by sequentially clicking
 * on specific buttons identified by their text or ID selectors.
 *
 * Steps performed:
 * 1. Clicks the "GET STARTED" button.
 * 2. Clicks the "AMAZING" button.
 * 3. Clicks any button containing the text "READY".
 * 4. Clicks the close button with the ID "buttonClose".
 *
 * @returns {Promise<void>} A promise that resolves when all onboarding screens have been passed.
 */
export async function passOnBoardingScreens() {
  await $('[text="GET STARTED"]').click();
  await $('[text="AMAZING"]').click();
  await $('[text*="READY"]').click();
  await $('#buttonClose').click();
}
