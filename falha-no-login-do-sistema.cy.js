describe('Página de Login', () => {

    beforeEach(()=> {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();

    })


    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      
      
      cy.get('input[name="email"]').type('well');
      cy.get('input[name="password"]').type('Senha');
      cy.get('button[type="submit"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
      
  
    });
  });

 