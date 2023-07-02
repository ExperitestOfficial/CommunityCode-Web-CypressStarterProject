

it('Demo bank test', () =>{
cy.visit('https://demo-bank.ct.digital.ai/login');
cy.get('[data-auto="username"]').type("company");
cy.get('[data-auto="password"]').type("company");
cy.get('[data-auto="login"]').click();

cy.get('[data-auto="transfer-funds"]').click();
cy.get('input').eq(0).type("John");
cy.get('input').eq(1).type("1-234-5678");
cy.get('input').eq(2).type("1000");
cy.get('input').eq(3).invoke('show').click({force:true});
cy.contains('USA').click();
cy.get('[data-auto="transfer-button"]').click();
})
