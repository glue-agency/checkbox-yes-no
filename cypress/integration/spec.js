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

  it('can be initialized with data attributes', function () {
    // Arrange
    cy.visit('/');

    // Assert
    cy.window().then(function (win) {
      var instance = win.CheckboxYesNo.instances.pop();
      var checkbox = win.document.querySelector('#checkbox-c');
      var target = win.document.querySelector('#checkbox-c-target');

      expect(instance.checkbox).equals(checkbox);
      expect(instance.target).equals(target);
    })
  })
})
