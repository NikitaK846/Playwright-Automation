import { test } from '@playwright/test';
import mainPage from '../../pages/main-page/main.page';
import widgetsPage from '../../pages/widgets-page/widgets-progressbar.page'

//TC04
test('Verify the progress bar', async ({ page }) => {
    await mainPage.goToMainURL({page});
    await mainPage.clickOnWidgetsCard({page});
    await widgetsPage.clickOnProgressBar({page});
    await widgetsPage.clickOnStartProgressBarButton({page});
    await widgetsPage.checkProgresBarValue({page});
  });