describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Update slider value from number', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(
      $el => {
        expect($el).to.have.value(75);
      }
    );
  });

  it('Update number value from slider', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(
      $el => {
        expect($el).to.have.value(33);
      }
    );
  });

  it('Update audio element from slider', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(
      $el => {
        expect($el).to.have.prop('volume', 0.33);
      }
    );
  });

  it('Update img and audio to match party horn', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
      }
    );
    cy.get('#horn-sound').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
      }
    );
  });

  it('Update volume img from 1 to 2 when volume increases from 30 to 40', () => {
    cy.get('#volume-slider').invoke('val', 30).trigger('input');
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      }
    );
    cy.get('#volume-slider').invoke('val', 40).trigger('input');
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      }
    );
  });

  it('Update volume img from 0 to 1 when volume increases from 0 to 10', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
      }
    );
    cy.get('#volume-slider').invoke('val', 10).trigger('input');
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      }
    );
  });

  it('Update volume img from 2 to 3 when volume increases from 60 to 70', () => {
    cy.get('#volume-slider').invoke('val', 60).trigger('input');
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      }
    );
    cy.get('#volume-slider').invoke('val', 70).trigger('input');
    cy.get('#volume-image').then(
      $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
      }
    );
  });

  it('Check if honk button disabled when invalid input to text box', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(
      $el => {
        expect($el).to.have.attr('disabled');
      }
    );
    cy.get('#volume-number').clear().type('ab');
    cy.get('#honk-btn').then(
      $el => {
        expect($el).to.have.attr('disabled');
      }
    );
  });

  it('Check for error with invalid input', () => {
    cy.get('#volume-number').clear().type('110');
    cy.get('input:invalid').should('have.length', 1);
  });
});
