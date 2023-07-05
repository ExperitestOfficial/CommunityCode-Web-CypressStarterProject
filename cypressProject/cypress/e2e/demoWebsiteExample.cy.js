

it('Demo bank test', () => {
	cy.visit('https://demo-bank.ct.digital.ai/login');
	cy.get('[data-auto="username"]').type("company");
	cy.get('[data-auto="password"]').type("company");
	cy.get('[data-auto="login"]').click();
	cy.get('[data-auto="transfer-funds"]').click();
	cy.get('input[name=NAME]').type("John");
	cy.get('input[name=PHONE]').type("1-234-5678");
	cy.get('input[name=AMOUNT]').type("1000");
	cy.get('[data-auto="country"]').invoke('show').click({force:true});
	cy.contains('India').click();
	cy.get('[data-auto="transfer-button"]').click();
})
