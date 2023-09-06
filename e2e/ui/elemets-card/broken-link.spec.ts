import { test } from '@playwright/test';
import mainPage from '../../pages/main-page/main.page';
import brokenLinkImagePage from '../../pages/elements-page/elements-broken-links-image.page'

//TC02
test('Verify broken image', async ({ page }) => {
    await mainPage.goToMainURL({page});
    await mainPage.clickOnElmentsCard({page});
    await brokenLinkImagePage.clickonBrokenLinkImage({page});
    await brokenLinkImagePage.verifyBrokenLinkImage({page});
  });