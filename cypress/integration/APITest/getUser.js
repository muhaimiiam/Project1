/// <reference types = "Cypress"/>

describe('get API user tests', ()=>{

    let accessToken = 'fd1ae18956c4edf84e7b2c3e1ba02c142452912e834ad13505f5fb682c2914a5'

    it('GET all user', ()=> {

        cy.request({
            failOnStatusCode: true,
            form: true,
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                'authorization': "Bearer "+accessToken}
        }).then ((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            // expect(res.body.meta.pagination.limit).to.eq(20)
        })
        .its('body')
        .its('data')


    })

    it('GET user by Id', ()=> {

        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/1671',
            headers : {
                'authorization': "Bearer"+accessToken}
        }).then ((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            // expect(res.body.data.gender).to.eq('female')
        })
        .its('body')
        .its('data')
    })
})