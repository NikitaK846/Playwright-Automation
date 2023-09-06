import { test } from '@playwright/test';
import mainPage from '../../pages/main-page/main.page';
import webTableElementPage from '../../pages/elements-page/elements-web-tables.page';
import practiceFormPage from '../../pages/forms-page/forms-practice-form.page'

//TC03
test('Verify user can submit the form', async ({ page }) => {
    await mainPage.goToMainURL({page});
    await mainPage.clickOnFormsCard({page});
    await practiceFormPage.clickOnPracticeForm({page});
    await webTableElementPage.setFirstName({page},"James");
    await webTableElementPage.setLastName({page},"BV");
    await webTableElementPage.setEmailId({page},"test@test.com")
    await practiceFormPage.selectGender({page},"Male");
    await practiceFormPage.setMobileNumber({page},"0123456789");
    await practiceFormPage.setDateOfBirth({page},"15th January 1990");
    await practiceFormPage.setSubjects({page},"Playwright Assignment");
    await practiceFormPage.selectHobby({page});
    await practiceFormPage.setCurrentAddress({page},"Netherlands");
    await practiceFormPage.selectState({page},"NCR");
    await practiceFormPage.selectCity({page},"Delhi");
    await practiceFormPage.selectFile({page},"e2e/uploads/pic.webp")
    await webTableElementPage.clickOnSubmitButton({page});
    await practiceFormPage.ValiatedFormSubmission({page},"Thanks for submitting the form")
  });