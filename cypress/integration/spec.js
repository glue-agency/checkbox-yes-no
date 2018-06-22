describe('CheckboxYesNo', function () {
  context('on page load', function () {
    it('sets target for unchecked checkbox', function () {
      // Arrange
      cy.visit('/')

      // Act

      // Assert
      cy.get('#checkbox-a-target')
        .should('have.value', 'no')
    })

    it('sets target for checked checkbox', function () {
      // Arrange
      cy.visit('/')

      // Act

      // Assert
      cy.get('#checkbox-b-target')
        .should('have.value', 'yes')
    })
  })

  context('when clicked', function () {
    it('updates target for unchecked checkbox', function () {
      // Arrange
      cy.visit('/')

      // Act
      cy.get('#checkbox-a')
        .click()

      // Assert
      cy.get('#checkbox-a-target')
        .should('have.value', 'yes')
    })

    it('updates target for checked checkbox', function () {
      // Arrange
      cy.visit('/')

      // Act
      cy.get('#checkbox-b')
        .click()

      // Assert
      cy.get('#checkbox-b-target')
        .should('have.value', 'no')
    })
  })

  context('when initialized via data attributes', function () {
    it('creates an instance with the right elements', function () {
      // Arrange
      cy.visit('/')

      // Act

      // Assert
      cy.window().then(function (win) {
        var instance = win.CheckboxYesNo.instances.pop()
        var checkbox = win.document.querySelector('#checkbox-c')
        var target = win.document.querySelector('#checkbox-c-target')

        expect(instance.checkbox).equals(checkbox)
        expect(instance.target).equals(target)
      })
    })
  })
})
