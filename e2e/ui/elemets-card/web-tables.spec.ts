import { test } from '@playwright/test';
import mainPage from '../../pages/main-page/main.page';
import webTableElementPage from '../../pages/elements-page/elements-web-tables.page';

//TC01
test.describe('Web Table tests', async () => {
  test.beforeEach(async ({page}) => {
    await mainPage.goToMainURL({page});
    await mainPage.clickOnElmentsCard({page});
    await webTableElementPage.clickOnWebTablesElement({page});
  });

  test('Scenario A: Verify user can enter new data into the table', async ({page}) => {
    await webTableElementPage.clickOnAddNewRecordButton({page});
  await webTableElementPage.setFirstName({page},"Alden")
  await webTableElementPage.setLastName({page},"Cantrell")
  await webTableElementPage.setAge({page},30);
  await webTableElementPage.setEmailId({page},"test@test.com");
  await webTableElementPage.setSalary({page},12345);
  await webTableElementPage.setDepartment({page},"QA");
  await webTableElementPage.clickOnSubmitButton({page});
  await webTableElementPage.validateAddedValuesInTable({page},"Alden","Cantrell","30","test@test.com","12345","QA");
  });

  test('Scenario B: Verify user can edit the row in a table', async ({page}) => {
    await webTableElementPage.clickOnEditData({page});
  await webTableElementPage.setFirstName({page},"James")
  await webTableElementPage.setLastName({page},"BV")
  await webTableElementPage.clickOnSubmitButton({page});
  await webTableElementPage.validateAddedValuesInTable({page},"James","BV","45","alden@example.com","12000","Compliance");
  });
});
