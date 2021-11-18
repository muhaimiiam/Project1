/// <reference types = "Cypress"/>

const dataJson =  require('../../fixtures/data')

describe('post user request', ()=> {

    let accessToken = 'fd1ae18956c4edf84e7b2c3e1ba02c142452912e834ad13505f5fb682c2914a5'
    let randomText = ""
    let testEmail = ""

    it('Create user test', ()=> {

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for(var i=0; i<10; i++){
            randomText+=pattern.charAt(Math.floor(Math.random()*pattern.length));
            testEmail = randomText + '@gmail.com'
        }

        cy.request({
            failOnStatusCode: true,
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': "Bearer "+accessToken
            },
            body:{
                "name": dataJson.name,
                "gender": dataJson.gender,
                "email": testEmail,
                "status": dataJson.status
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email', testEmail)
            expect(res.body.data).has.property('name',dataJson.name)
            expect(res.body.data).has.property('gender',dataJson.gender)
            expect(res.body.data).has.property('status',dataJson.status)
        }).then((res)=>{
            const userId = res.body.data.id
            cy.log('User Id is : '+userId)
            cy.request({
                method : 'GET',
                url : 'https://gorest.co.in/public/v1/users/'+userId,
                headers: { 'Authorization': "Bearer "+accessToken }

        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body.data).has.property('id', userId)
        })
        .its('body')
        .its('data')
    })
})
})