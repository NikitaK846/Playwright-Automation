import {locators} from "./widgets-page.locators"
import {expect} from "@playwright/test";

export default {
    async clickOnProgressBar({page}) {
        await page.click(locators.progressBarLocators.progressBar);
        await page.waitForSelector(locators.progressBarLocators.progressBarHeader);
    },

    async clickOnStartProgressBarButton({page}) {
        await page.click(locators.progressBarLocators.startProgressbarButton);
    },

    async checkProgresBarValue({page}) {
        const progressBarSelector = locators.progressBarLocators.progressBar;
        await page.waitForSelector(progressBarSelector, {state: 'visible'});
        const progressBarElement = await page.$(progressBarSelector);
        const boundingBox = await progressBarElement.boundingBox();
        const progressBarWidth = boundingBox.width;
        const containerWidth = boundingBox.width;
        const progressPercentage = (progressBarWidth / containerWidth) * 100;
        expect(progressPercentage).toBe(100);
    }
};
