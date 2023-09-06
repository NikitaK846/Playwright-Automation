import { APIRequestContext, APIResponse } from "@playwright/test";
import defineConfig from "../../playwright.config";


const baseURL = defineConfig.use ?. baseURL;
export class APIBasic
{
    async getToken({request},userNameValue,passwordValue)
    {
        const tokenResponse:APIResponse= await request.post(`${baseURL}Account/v1/GenerateToken` ,
    {
        data:
        {
            userName: userNameValue,
            password: passwordValue
        }
    });
     return tokenResponse;
    }

    async authorizationAPI({request},userNameValue,passwordValue)
    {
       const authResponse:APIResponse= await request.post(`${baseURL}Account/v1/Authorized`,
        {
            data:
            {
                userName: userNameValue,
            password: passwordValue
        }
        });
        return authResponse
    }

}
