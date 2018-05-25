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

    it('updates target when clicking checkbox', function () {
      // Arrange
      cy.visit('/');

      // Act
      cy.get('#checkbox-a')
        .click();

      // Assert
      cy.get('#checkbox-a-target')
        .should('have.value', 'yes');
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

    it('updates target when clicking checkbox', function () {
      // Arrange
      cy.visit('/');

      // Act
      cy.get('#checkbox-b')
        .click();

      // Assert
      cy.get('#checkbox-b-target')
        .should('have.value', 'no');
    })
  })
})
