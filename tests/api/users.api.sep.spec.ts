
import { test, expect } from '../../src/fixtures/apifixteurs'

const TOKEN = process.env.API_Token!;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };
let userId: number;


test.describe.serial('run the E2E test cases', () => {


    //GET
    test('GET API - get all users', async ({ apiHelper }) => {
        let response = await apiHelper.get('/public/v2/users', AUTH_HEADER);
        expect(response.status).toBe(200)


    })

    //POST
    test('POST API - get create users', async ({ apiHelper }) => {

        //Js Object
        let userData = {
            name: 'Automation',
            email: `automation-${Date.now()}@example.com`,
            gender: 'male',
            status: 'active'
        };

        let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(userData.name);

        userId = response.body.id;
        console.log('Created User ID', userId);

    })

    //Update
    test('PUT API - Update the users', async ({ apiHelper }) => {

        //Js Object
        let userUpdatedData = {
            name: 'Automationone',
            status: 'inactive'
        };

        let response = await apiHelper.put(`/public/v2/users/${userId}`, userUpdatedData, AUTH_HEADER);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(userUpdatedData.name);
        expect(response.body.status).toBe(userUpdatedData.status);

    })


    //Delete
    test('Delete API - Delete the users', async ({ apiHelper }) => {

        let response = await apiHelper.delete(`/public/v2/users/${userId}`, AUTH_HEADER);
        expect(response.status).toBe(204);

    })

});