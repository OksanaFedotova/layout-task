// @ts-check
import { test, expect } from '@playwright/test';

test('step1', async ({ page }) => {
  await page.goto('http://localhost:8080');
});

test('step2', async ({ page }) => {
  await page.goto('http://localhost:8080');
});

test('step3', async ({ page }) => {
  await page.goto('http://localhost:8080');
});

test('step4', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 10 });
});
