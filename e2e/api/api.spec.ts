import {
    test,
    expect,} from "@playwright/test" 
import defineConfig from "../../playwright.config" 
import {APIBasic} from "./api-basic" 

const baseURL = defineConfig.use ?. baseURL 
var userIdFromResponse: string 
var token: string 
let authvalue: boolean
var userNameValue: string = Math.random().toString(16).substring(7);
var passwordValue: string = "G@job4500"
var isbnAddvalue:string="9781449365035"
var apiObj = new APIBasic 
var isbnId: string

//Happy Tests
test("Creation of user account", async ({request}) => 
{
    const createResponse = await request.post(`${baseURL}Account/v1/User`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        data: {
            userName: userNameValue,
            password: passwordValue
        }
    }) 
    const responseBody = await createResponse.json() 
    userIdFromResponse = responseBody.userID
    expect(userIdFromResponse).toBeDefined() 
    expect(createResponse.status().toString()).toMatch("201") 
    const tokenResposeValue = await apiObj.getToken({request}, userNameValue, passwordValue)
    const tokenBody = await(await tokenResposeValue).json()
    token = tokenBody.token 
    const auth = await apiObj.authorizationAPI({request}, userNameValue, passwordValue) 
    authvalue = await auth.json() 
}) 


test("Add a list of books or the created user",async ({request})=>
{   const tokenValue=`Bearer ${token}`
    const addBookResponse= await request.post(`${baseURL}BookStore/v1/Books`,
    {

        headers:
        {
            Authorization: tokenValue,
        },
        data:
        {
            userId: userIdFromResponse,
            collectionOfIsbns: [
              {
                isbn: isbnAddvalue
              }
            ]
          }
    })
    const addBookInfo= await addBookResponse.json() 
    isbnId=addBookInfo.books 
    expect(isbnId).toBeDefined() 
}) 

test("Remove one of the added books", async ({request}) => {
    const tokenValue = `Bearer ${token}`
    const deleteBookResponse = await request.delete(`${baseURL}BookStore/v1/Book`, {

        headers: {
            Authorization: tokenValue,
        },
        data: {
            isbn: isbnAddvalue,
            userId: userIdFromResponse
        }
    })
    expect(deleteBookResponse.status().toString()).toMatch("204")
})


//UnhappyTests
test("Creation of user account unhappy test", async ({request}) => 
{
    const createResponse = await request.post(`${baseURL}Account/v1/User`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        data: {
            userName: userNameValue,
            password: "abcd"
        }
    }) 
    expect(createResponse.status().toString()).not.toMatch("201") 
}) 



test("Add a list of books or the created user unhappy test",async ({request})=>
{   const tokenValue=`Bearer ${token}`
    const addBookResponse= await request.post(`${baseURL}BookStore/v1/Books`,
    {

        headers:
        {
            Authorization: tokenValue,
        },
        data:
        {
            userId: userIdFromResponse,
            collectionOfIsbns: [
              {
                isbn: " "
              }
            ]
          }
    })
    expect(addBookResponse.status().toString()).not.toMatch("201") 
}) 


test("Remove one of the added books unhappy test", async ({request}) => {
    const tokenValue = `Bearer ${token}`
    const deleteBookResponse = await request.delete(`${baseURL}BookStore/v1/Book`, {

        headers: {
            Authorization: tokenValue,
        },
        data: {
            isbn: isbnAddvalue,
            userId: " "
        }
    })
    expect(deleteBookResponse.status().toString()).not.toMatch("204")
})