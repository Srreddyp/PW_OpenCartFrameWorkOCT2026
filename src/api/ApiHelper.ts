import { APIRequestContext } from "@playwright/test";
import { stat } from "fs";

export class ApiHelper {

    private readonly request: APIRequestContext;
    private readonly baseURL: string;

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    //GET - endpoint,header
    async get(endpoint: string, headers?: Record<string, string>) {

        let response = await this.request.get(`${this.baseURL}${endpoint}`, {
            headers: headers
        });
        return {
            status: response.status(),
            body: await response.json()
        }

    }

    //POST -- endpoint,header - Data
    async post(endpoint: string, data: object, headers?: Record<string, string>) {

        let response = await this.request.post(`${this.baseURL}${endpoint}`, {
            data: data,
            headers: headers
        });
        return {
            status: response.status(),
            body: await response.json()
        }

    }


    //PUT -- endpoint,header - Data
    async put(endpoint: string, data: object, headers?: Record<string, string>) {

        let response = await this.request.put(`${this.baseURL}${endpoint}`, {
            data: data,
            headers: headers
        });
        return {
            status: response.status(),
            body: await response.json()
        }

    }
    
    //Delete -- endpoint,header - No body, No json
    async delete(endpoint: string,headers?: Record<string, string>) {

        let response = await this.request.delete(`${this.baseURL}${endpoint}`, {
            headers: headers
        });
        return {
            status: response.status()
        }

    }
}