import { expect } from "@playwright/test";
import { locators } from "./forms-page.locators"

export default
{
    async clickOnPracticeForm({page})
    {
        await page.click(locators.practiceFormLocators.practiceForm)
        await page.waitForSelector(locators.practiceFormLocators.practiceFormHeader);
    },

    async selectGender({page},gender:string)
    {
        await page.keyboard.press('Tab')
        await page.keyboard.press('Space')
    },

    async setMobileNumber({page},mobileNumber:any)
    {
        await page.fill(locators.practiceFormLocators.mobileNumber,mobileNumber);
    },

    async setDateOfBirth({page},dateOfBirth:any)
    {
        await page.fill(locators.practiceFormLocators.dateOfBirth,dateOfBirth);
    },

    async setSubjects({page},subjects:any)
    {
        await page.fill(locators.practiceFormLocators.subjects,subjects);
    },

    async selectHobby({page})
    {
        await page.keyboard.press('Tab')
        await page.keyboard.press('Tab')
        await page.keyboard.press('Space')
    },

    async setCurrentAddress({page},currentAddress:any)
    {
        await page.fill(locators.practiceFormLocators.currentAddress,currentAddress);
    },

    async selectState({page},state:string)
    {
        const stateSelector=locators.practiceFormLocators.state;
        await page.fill(stateSelector,state);
        await page.keyboard.press('Tab');
    },

    async selectCity({page},city:string)
    {
        const stateSelector=locators.practiceFormLocators.city;
        await page.fill(stateSelector,city);
        await page.keyboard.press('Tab');
    },

    async selectFile({page},filePath:string)
    {
        const fileInputSelector = locators.practiceFormLocators.pictureFile; 
        await page.setInputFiles(fileInputSelector, filePath);
    },

    async ValiatedFormSubmission({page},FormSubmissionText:string)
    {
        const FormSubmissionValue= await page.textContent(locators.practiceFormLocators.FormSubmissionText);
        expect(FormSubmissionValue).toBe(FormSubmissionText)
    }
}