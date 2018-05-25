describe('CheckboxYesNo', function () {
  context('when unchecked', function () {
    it('sets target on page load', function () {
      // Arrange
      cy.visit('/');

      // Act

      // Assert
      cy.get('#checkbox-a-target')
        .should('have.value', 'no');
    })
  })

  context('when checked', function () {
    it('sets target on page load', function () {
      // Arrange
      cy.visit('/');

      // Act

      // Assert
      cy.get('#checkbox-b-target')
        .should('have.value', 'yes');
    })
  })
})
