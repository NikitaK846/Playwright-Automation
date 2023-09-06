import { test } from '@playwright/test';
import mainPage from '../../pages/main-page/main.page';
import droppablePage from '../../pages/interactions-page/interactions-droppable.page'

//TC06
test('Verify user can drag and drop', async ({ page }) => {
    await mainPage.goToMainURL({page});
    await mainPage.clickOnInteractionsCards({page});
    await droppablePage.clickOnDroppable({page});
    await droppablePage.performDragAndDrop({page});
  });
  