export const locators=
{
    practiceFormLocators:
    {
        practiceForm:"//ul//li[@id='item-0']//span[text()='Practice Form']",
        practiceFormHeader:"//div[@class='main-header' and text()='Practice Form']",
        gender:"//input[@type='radio' and @value='gender']",
        mobileNumber:"//input[@placeholder='Mobile Number' and @type='text']",
        dateOfBirth:"//input[@id='dateOfBirthInput' and @type='text']",
        subjects:"//div[@id='subjectsContainer']//input",
        hobbies:"//input[@type='checkbox' and @value='2']",
        currentAddress:"//textarea[@id='currentAddress']",
        state:"//div[@id='state']//input",
        city:"//div[@id='city']//input",
        pictureFile:"//input[@type='file']",
        FormSubmissionText:"//div[contains(@id,'title-lg')]"
    }
}