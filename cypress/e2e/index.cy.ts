describe('Pruebas comunes', () => {
  it('Cargar página principal', () => {
    cy.visit('/')
  })

  it('Procesar robots.txt', () => {
    cy.request('/robots.txt')
  })

  it('Procesar manifest.json ', () => {
    cy.request('/manifest.json')
  })

  it('Página 404', () => {
    cy.request({ url: '/404', failOnStatusCode: false }).its('status').should('equal', 404)
    const page = cy.visit('/404', { failOnStatusCode: false })
    page.get('h1').should('have.text', '404')
  })
})
