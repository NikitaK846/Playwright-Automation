
export const locators=
{
    webTable:
    {
        webTableElements:"//ul//li[@id='item-3']//span[text()='Web Tables']",
        addNewRecordButton:"//button[@id='addNewRecordButton']",
        firstName:"//input[@placeholder='First Name' and @type='text']",
        lastName:"//input[@placeholder='Last Name' and @type='text']",
        emailId:"//input[@id='userEmail' and @type='text']",
        age:"//input[@id='age' and @type='text']",
        salary:"//input[@id='salary' and @type='text']",
        department:"//input[@id='department' and @type='text']",
        submitButton:"//button[@type='submit']",
        addedValuesInTable:"//div[@class='rt-td' and text()='fname']/ancestor::div[contains(@class, 'rt-tr-group') and .//div[text()='lname'] and .//div[text()='age']  and .//div[text()='emailId'] and .//div[text()='salary'] and .//div[text()='dep']]",
        editAddedValue:"//span[@id='edit-record-2']",
        formToFill:"//form[@id='userForm']"
    },

    brokenLinksImage:
    {
        brokenLinksImageElements:"//ul//li[@id='item-6']//span[text()='Broken Links - Images']",
        brokenLinksImageHeader:"//div[@class='main-header' and text()='Broken Links - Images']",
        brokenImage:"//div//p[text()='Broken image']/following-sibling::img",
    }
}


