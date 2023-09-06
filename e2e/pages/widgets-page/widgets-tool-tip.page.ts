import { expect } from "@playwright/test";
import { locators } from "./widgets-page.locators";

export default
{
    async clickOnToolTips({page})
    {
        await page.click(locators.ToolTipsLocators.toolTip);
        await page.waitForSelector(locators.ToolTipsLocators.toolTipHeader);
    },

    async hoverOverToolTip({page},providedMessage:string)
    {
        await page.hover(locators.ToolTipsLocators.hoverToolTip);
        const toolTipMessage= await page.textContent(locators.ToolTipsLocators.toolTipMessage);
        expect(toolTipMessage).toBe(providedMessage);
    }
}