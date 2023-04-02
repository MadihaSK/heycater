describe('Heycater website', () => {
  it('Book a breakfast catering order in Berlin', () => {

    let currentDate = new Date().getDate();
    currentDate +=2 ;
    cy.log(currentDate);

    const currentDateincr = currentDate + 1;
    //cy.log(currentDateincr)

    // code to visit hezcater webpage
    cy.visit('https://www.heycater.com/en')
    cy.wait(1000)

    // line to cookies selection
    cy.get('.gylzvb').click()

    // line to select berlin city for caters
    cy.get('#select-city-berlin').click()

    cy.url().should('include', '/start?city=berlin').as('verify that berlin is selected as city')

    // select breatfast option & click
    cy.contains('Breakfast').click()

    // line to select event date
    cy.get('#survey-next').click()

    // select date from calender
    // cy.get(':nth-child(28) > .nice-dates-day_date').click({ force: true })
    cy.get('div.nice-dates-grid').contains(currentDate).click();

    // continue to request type option privete / business
    cy.get('#survey-next').click()

    // select privte option
    cy.contains('Private').click()

    //line that will continue to select participated people
    cy.get('#survey-next').click()

    // line to enter people count in text box
    cy.get('.MuiInputBase-input').type(2)

    //button that will continue to diet selection as per people count
    cy.get('#survey-next').click()

    // enter count for each diet plan
    cy.get('input[name="number_of_vegans"]').type(1)
    
    // click to budget buton by verifz method
    cy.contains('Continue to budget').click()

    // enter budget per person in text field & estimate amount auto
    cy.get('#price_per_person').clear().type(10)

    // line that will search caters by clicking button
    cy.contains('Search 300+ Caterers').click()
    cy.wait(500)

    // url that displays caters on search
    cy.visit('https://www.heycater.com/en/catering/berlin?qualified=true&lng=en&refinementList%5Bcatering_categories_en%5D%5B0%5D=Breakfast&range%5Bmin_order_number%5D%5Bmax%5D=3&range%5Bprice_per_person%5D%5Bmax%5D=1000&event_date=1679785200')
    
    // select Aveato resturant for breakfast
    cy.get('#aveato > .sc-xyEjG > .sc-dtTInj > .sc-eGCarw > .MuiButtonBase-root').click()

    // open filter 
    cy.get('#filters').click()
  
    // close filter
    cy.get('div.sc-bqyKva.brPIHv > svg').click({ force: true })

// click open details for a menu
    cy.get('button.MuiButtonBase-root.sc-kstrdz.kgbsqj').eq(0).click()

    // select quantity 
    cy.get(' div.sc-bqyKva.hIBbKP > div > div').clear().type(30)

    // add to cart a item
    cy.get('button#add-to-cart.MuiButtonBase-root.sc-kstrdz.kgbsqj').click()

    // click checkout item button
    cy.get('#checkout-button').click()

    // select event date at checkout
    cy.get('#eventDate').click()
    cy.get('div.nice-dates-grid').contains(currentDate).click()

    // select event time
    cy.get('#time-selector').click()
    cy.get('li:nth-child(5)').click()

    // next to adress form
    cy.get('#next-button-date-time').click()

   // code to enter deliverz address
    cy.get('input[name="company"]').type('Test Company')
    cy.get('input[name="deliveryAddress"]').type('Lutticher str')
    cy.get('input[name="zipCode"]').type('13352')
    cy.get('input[name="floor"]').type('1')

    // click contact button
    cy.get('#next-button-address').click()

    // enter contact info
    cy.get('input[name="firstName"]').type('Test ')
    cy.get('input[name="lastName"]').type('Company')
    cy.get('input[name="email"]').type('test@gmail.com')
    cy.get('input[name="phone"]').type('+4915223456678')

    // click review button after enter details 
    cy.get('#next-button-contact-details').click()  

   // check terms and condition agree box
   cy.get("input[type='checkbox']").check();

   //click book button
   cy.get('#book-button').click()

   // Add event to calender
   //cy.get('#add-to-calendar-button').click()

    ;

  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    //used for all application related uncaught expcetion errors
    return false
  })
})