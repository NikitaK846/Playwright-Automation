import { locators } from "./elements-page.locators"
export default
{
    async clickOnWebTablesElement({page})
    {
        await page.click(locators.webTable.webTableElements);
    },

    async clickOnAddNewRecordButton({page})
    {
        await page.click(locators.webTable.addNewRecordButton);
    },

    async setFirstName({page},firstName:string)
    {
        await page.fill(locators.webTable.firstName,firstName)
    },

    async setLastName({page},lastName:string)
    {
        await page.fill(locators.webTable.lastName,lastName)
    },

    async setAge({page},age:number)
    {
        await page.fill(locators.webTable.age,age.toString())
    },

    async setEmailId({page},emailId:string)
    {
        await page.fill(locators.webTable.emailId,emailId)
    },

    async setSalary({page},salary:number)
    {
        await page.fill(locators.webTable.salary,salary.toString())
    },

    async setDepartment({page},department:string)
    {
        await page.fill(locators.webTable.department,department)
    },

    async clickOnSubmitButton({page})
    {
      const buttonElement = await page.$(locators.webTable.submitButton);
      await buttonElement?.press('Enter'); 
    },

    async validateAddedValuesInTable({page},fname:string,lname:string,age:string,emailId:string,salary:string,dep:string)
    {
        await page.waitForSelector(locators.webTable.addedValuesInTable.replace('fname',fname).replace('lname',lname).replace('age',age).replace('emailId',emailId).replace('salary',salary).replace('dep',dep));
    },

    async clickOnEditData({page})
    {
        await page.click(locators.webTable.editAddedValue);
        await page.waitForSelector(locators.webTable.formToFill)
    },
}