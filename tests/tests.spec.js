// @ts-check
import { test, expect } from '@playwright/test';

test('step1', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const navigation = await page.getByRole('navigation');
  await expect(navigation).toBeVisible()


});

test('step2', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const link = await page.getByRole('link').first()
  await link.hover();
  await expect(link).toHaveCSS('color', 'rgb(189, 152, 121)')
});

test('step3', async ({ page }) => {
  await page.goto('http://localhost:8080');
});

test('step4', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 10 });
});
