//2 - Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.

describe('Testes na Página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('deve clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.title().should('eq', 'AdoPet');
     
    });
 
});

