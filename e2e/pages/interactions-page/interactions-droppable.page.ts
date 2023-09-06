import { expect } from "@playwright/test";
import { locators } from "./interactions-page.locators";

export default
{
    async clickOnDroppable({page})
    {
        await page.click(locators.droppableLocators.droppable);
        await page.waitForSelector(locators.droppableLocators.droppableHeader);
    },

    async performDragAndDrop({page})
    {
        await page.hover(locators.droppableLocators.draggableElement)
        await page.mouse.down();
        await page.hover(locators.droppableLocators.droppableElement)
        await page.mouse.up();
        const droppMessage= await page.textContent(locators.droppableLocators.droppedMessage);
        expect(droppMessage).toBe('Dropped!')
    }
}