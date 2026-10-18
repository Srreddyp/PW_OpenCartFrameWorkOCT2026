import { test, expect, request } from "@playwright/test";

let AUTH_TOKEN = { Authorization: 'Bearer e7eed1e9f3bcc472c200f4b27d1de05d1391b206aa0076e383f0d34b90678ca4' };

test.skip('get user test', async ({ request }) => {

    let response = await request.get('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(200);

});

test.skip('create a user test', async ({ request }) => {

    //JS Object
    let userData = {
        name: 'uday',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'active'
    };

    //JS Object to JSON: Serialization
    let response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN,
        data: userData
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status());//201
    console.log(response.statusText()); //Created
});


test.skip('Update a user test', async ({ request }) => {

    //JS Object
    let userData = {
        name: 'uday101',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'inactive'
    };

    //JS Object to JSON: Serialization
    let response = await request.put('https://gorest.co.in/public/v2/users/8501947', {
        headers: AUTH_TOKEN,
        data: userData
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status());//200
    console.log(response.statusText()); //OK
});


test.skip('Delete a user test', async ({ request }) => {

    //JS Object to JSON: Serialization
    let response = await request.delete('https://gorest.co.in/public/v2/users/8501947', {
        headers: AUTH_TOKEN,
    });

    console.log(response.status());//204
    console.log(response.statusText()); //No Content
});















// test('===get=== the test', async ({ request }) => {

//     let response = await request.get('https://gorest.co.in/public/v2/users', {
//         headers: AUTH_TOKEN
//     });

//     let jsonBody = await response.json();
//     console.log(jsonBody);
//     console.log(response.status());
//     console.log(response.statusText());
//     expect(response.status()).toBe(200);
// });



// test(' ===post=== create a user test', async ({ request }) => {

//     //Js Object
//     let userData = {
//         name: 'Automation',
//         email: `automation-${Date.now()}@example.com`,
//         gender: 'male',
//         status: 'active'
//     };

//     let response = await request.post('https://gorest.co.in/public/v2/users', {
//         headers: AUTH_TOKEN,
//         data: userData

//     });
//     let jsonBody = await response.json();
//     console.log(jsonBody);
//     console.log(response.status()); //200
//     console.log(response.statusText());//Created

// });

// test(' ===put=== create a user test', async ({ request }) => {

//     //Js Object
//     let userData = {
//         name: 'Automation Tester',
//         status: 'inactive'
//     };

//     let response = await request.put('https://gorest.co.in/public/v2/users/8667321', {
//         headers: AUTH_TOKEN,
//         data: userData

//     });
//     let jsonBody = await response.json();
//     console.log(jsonBody);
//     console.log(response.status()); //200
//     console.log(response.statusText());//ok

// });


// //delete - No body, No json
// test(' ===delete=== create a user test', async ({ request }) => {
//     let response = await request.delete('https://gorest.co.in/public/v2/users/8667321', {
//         headers: AUTH_TOKEN,
      
//     });
//     console.log(response.status()); //204
//     console.log(response.statusText());//ok

// });

