import { locators } from "./elements-page.locators";

export default
{
    async clickonBrokenLinkImage({page})
    {
        await page.click(locators.brokenLinksImage.brokenLinksImageElements)
        await page.waitForSelector(locators.brokenLinksImage.brokenLinksImageHeader);
    },

    async verifyBrokenLinkImage({page})
    {
        await page.waitForSelector(locators.brokenLinksImage.brokenImage);
    }
}