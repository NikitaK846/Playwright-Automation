import {expect} from "@playwright/test"
import {locators} from "./main-page.locators";
import  defineConfig  from "../../../playwright.config"


 export default{

    async goToMainURL({ page })
    {
        await page.goto(defineConfig.use?.baseURL)
    },

    async clickOnElmentsCard({ page })
    {
        await page.click(locators.elementsCard)
        expect(page).toHaveURL(/.*elements/)  
    },

    async clickOnFormsCard({page})
    {
        await page.click(locators.formsCard);
        expect(page).toHaveURL(/.*forms/) 
    },

    async clickOnWidgetsCard({page})
    {
        await page.click(locators.Widgetscards);
        expect(page).toHaveURL(/.*widgets/) 
    },

    async clickOnInteractionsCards({page})
    {
        await page.click(locators.interactionsCards);
        expect(page).toHaveURL(/.*interaction/) 
    }
 }