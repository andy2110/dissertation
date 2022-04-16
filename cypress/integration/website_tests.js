describe('Navigation Tests', function() {
    it('Clicks through navbar buttons', function () {
        cy.visit('https://master.d2bsyoocucf8er.amplifyapp.com/')
        cy.contains('About us').click()
        cy.contains('Home').click()
        cy.contains('Meet the Team').click()
        cy.contains('Home').click()
        cy.contains('Vacancies').click()
        cy.contains('Home').click()
        cy.contains('Contact Us').click()
        cy.contains('Home').click()
        cy.contains('Accessibility').click()
        cy.contains('Close').click()
    })
    it('Clicks through home page buttons', function () {
        cy.get(`[aria="about-us-nav"]`).click()
        cy.contains('Home').click()
        cy.get(`[aria="contact-us-nav"]`).click()
        cy.contains('Home').click()
        cy.get(`[aria="meet-the-team-nav"]`).click()
        cy.contains('Home').click()
        cy.get(`[aria="vacancies-nav"]`).click()
        cy.contains('Home').click()
    })
})

describe('Accessibility Feature Tests', function() {
    it('Tests each type of colour overlay', function(){
        cy.contains('Accessibility').click()
        cy.get(`[class="colour-selector #F6BB00"]`).click()
        cy.get(`[class="colour-selector #1EB742"]`).click()
        cy.get(`[class="colour-selector #FF3334"]`).click()
        cy.get(`[class="colour-selector #0C96E4"]`).click()
        cy.get(`[class="colour-selector #ff33bb"]`).click()
        cy.get(`[class="colour-selector #ff91da"]`).click()
    })

    it('Tests if the layout is simplified on each page', function(){
        cy.get(`[aria="enable or disable simple text"]`).click()
        cy.get(`[aria="enable or disable simple text"]`).contains('Disable Simplified Text')
        cy.get(`[aria="enable or disable simple text"]`).click()
    })

    it('Tests that the font changes', function(){
        cy.get('[id="font-picker"]').click()
        cy.get('[id="font-button-lexend"]').click()
        cy.contains('Background Colour').should('have.css', 'font-family', 'Lexend, Lexend')
        cy.contains('Close').click()
        cy.contains('Time Specialist Support').should('have.css', 'font-family', 'Lexend, Lexend')
        cy.contains('Find out more').should('have.css', 'font-family', 'Lexend, Lexend')
        cy.contains('Accessibility').click()
        cy.get('[id="font-picker"]').click()
        cy.get('[id="font-button-courier-prime"]').click()
        cy.contains('Background Colour').should('have.css', 'font-family', '"Courier Prime", "Courier Prime"')
        cy.contains('Close').click()
        cy.contains('Time Specialist Support').should('have.css', 'font-family', '"Courier Prime", "Courier Prime"')
        cy.contains('Find out more').should('have.css', 'font-family', '"Courier Prime", "Courier Prime"')
        cy.contains('Accessibility').click()
        cy.get('[id="font-picker"]').click()
        cy.get('[id="font-button-open-sans"]').click()
        cy.contains('Background Colour').should('have.css', 'font-family', '"Open Sans", "Open Sans"')
        cy.contains('Close').click()
        cy.contains('Time Specialist Support').should('have.css', 'font-family', '"Open Sans", "Open Sans"')
        cy.contains('Find out more').should('have.css', 'font-family', '"Open Sans", "Open Sans"')
    })

    it('Tests that each font background colour works', function(){
        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(255, 255, 0);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="background-color: rgb(255, 255, 0);"]').should('have.css', 'background-color', 'rgb(255, 255, 0)')
        cy.get('[class="navbar-brand"]').should('have.css', 'background-color', 'rgb(255, 255, 0)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(250, 250, 200);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="background-color: rgb(250, 250, 200);"]').should('have.css', 'background-color', 'rgb(250, 250, 200)')
        cy.get('[class="navbar-brand"]').should('have.css', 'background-color', 'rgb(250, 250, 200)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(255, 255, 229);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="background-color: rgb(255, 255, 229);"]').should('have.css', 'background-color', 'rgb(255, 255, 229)')
        cy.get('[class="navbar-brand"]').should('have.css', 'background-color', 'rgb(255, 255, 229)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(185, 185, 0);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="background-color: rgb(185, 185, 0);"]').should('have.css', 'background-color', 'rgb(185, 185, 0)')
        cy.get('[class="navbar-brand"]').should('have.css', 'background-color', 'rgb(185, 185, 0)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(160, 160, 0);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="background-color: rgb(160, 160, 0);"]').should('have.css', 'background-color', 'rgb(160, 160, 0)')
        cy.get('[class="navbar-brand"]').should('have.css', 'background-color', 'rgb(160, 160, 0)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(227, 155, 30);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="background-color: rgb(227, 155, 30);"]').should('have.css', 'background-color', 'rgb(227, 155, 30)')
        cy.get('[class="navbar-brand"]').should('have.css', 'background-color', 'rgb(227, 155, 30)')
    })

    it('Tests that each font colour works', function(){
        cy.contains('Accessibility').click()
        cy.contains('Reset').click()
        cy.get(`[style="background-color: rgb(10, 10, 10);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="color: rgb(10, 10, 10);"]').should('have.css', 'color', 'rgb(10, 10, 10)')
        cy.get('[class="navbar-brand"]').should('have.css', 'color', 'rgb(10, 10, 10)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(0, 0, 125);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="color: rgb(0, 0, 125);"]').should('have.css', 'color', 'rgb(0, 0, 125)')
        cy.get('[class="navbar-brand"]').should('have.css', 'color', 'rgb(0, 0, 125)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(30, 30, 0);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="color: rgb(30, 30, 0);"]').should('have.css', 'color', 'rgb(30, 30, 0)')
        cy.get('[class="navbar-brand"]').should('have.css', 'color', 'rgb(30, 30, 0)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(40, 40, 0);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="color: rgb(40, 40, 0);"]').should('have.css', 'color', 'rgb(40, 40, 0)')
        cy.get('[class="navbar-brand"]').should('have.css', 'color', 'rgb(40, 40, 0)')

        cy.contains('Accessibility').click()
        cy.get(`[style="background-color: rgb(255, 255, 255);"]`).click()
        cy.contains('Close').click()
        cy.get('[style="color: rgb(255, 255, 255);"]').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('[class="navbar-brand"]').should('have.css', 'color', 'rgb(255, 255, 255)')

        cy.contains('Accessibility').click()
        cy.contains('Reset').click()
    })
})

describe('Tracking Tests', function() {
    it('Check that modal pops-up on Home page', function () {
        cy.visit('https://master.d2bsyoocucf8er.amplifyapp.com/')
        cy.wait(50000)
        cy.contains('Accessibility Features')

    })

    it('Check that modal pops-up on About page', function () {
        cy.visit('https://master.d2bsyoocucf8er.amplifyapp.com/')
        cy.contains('About us').click()
        cy.wait(82200)
    })

    it('Check that modal pops-up on Contact page', function () {
        cy.visit('https://master.d2bsyoocucf8er.amplifyapp.com/')
        cy.contains('Contact Us').click()
        cy.wait(69000)
    })

    it('Check that modal pops-up on Team page', function () {
        cy.visit('https://master.d2bsyoocucf8er.amplifyapp.com/')
        cy.contains('Meet The Team').click()
        cy.wait(233400)
    })

})
