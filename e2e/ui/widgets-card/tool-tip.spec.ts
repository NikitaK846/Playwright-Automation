import { test } from '@playwright/test';
import mainPage from '../../pages/main-page/main.page';
import toolTipPage from '../../pages/widgets-page/widgets-tool-tip.page'


//TC05
test('Verify the tooltip', async ({ page }) => {
    await mainPage.goToMainURL({page});
    await mainPage.clickOnWidgetsCard({page});
    await toolTipPage.clickOnToolTips({page});
    await toolTipPage.hoverOverToolTip({page},"You hovered over the Button");
  });