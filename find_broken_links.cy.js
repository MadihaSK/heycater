describe('Find all broken links in website', () => {

  it('open each link in a website eachtime', () => {

    // visit any website
    cy.visit('https://www.heycater.com/en')

    // get anchor tag on a web that contains a css selector
    cy.get('a').each(link => {


      // call each link target whose property is href
      if (link.prop('href'))

        // cy.request callback each url requested in the link
        cy.request({

          url: link.prop('href'),

          // it will fail the test if status code found 404 
          failOnStatusCode: false,

        })

      cy.log(link.prop('href'))

    })

  })
})