// @ts-check
import { test, expect } from '@playwright/test';
import { error } from 'console';

test.describe('Login', async () => {

    // Access the URL before each test and assert robot image is present
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/')

        const robotImage = page.locator('.bot_column')

        await expect(robotImage).toBeVisible()
    })

    test('Successful login', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user')

        await page.getByPlaceholder('Password').fill('secret_sauce')

        await page.getByText('Login').click()

        const productsGrid = page.locator('[class="inventory_container"]')

        // Validates the login was successful by asserting the products grid
        await expect(productsGrid).toBeVisible();
    })

    test('Unsuccessful login with wrong password', async ({ page }) => {

        await page.getByPlaceholder('Username').fill('standard_user')

        await page.getByPlaceholder('Password').fill('wrongpass')

        await page.getByText('Login').click()

        const errorMessage = page.locator('[data-test="error"]')

        await expect(errorMessage).toContainText('Username and password do not match any user in this service')
    })




})
