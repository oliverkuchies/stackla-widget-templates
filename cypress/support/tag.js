/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable cypress/no-unnecessary-waiting */

import tagsnapshot from "./tagsnapshot.json"
Cypress.Commands.add("shouldLoadTags", widgetType => {
  cy.getFirstTile(widgetType).should("exist").click({ force: true })

  cy.wait(1000)

  cy.getExpandedTile()
    .find("tile-tags")
    .first()
    .then($el => {
      const style = window.getComputedStyle($el[0])
      expect(JSON.stringify(style)).to.equal(JSON.stringify(tagsnapshot))
    })

  cy.getExpandedTile().find("tile-tags").first().should("exist").click({ force: true })

  cy.getExpandedTile().find(".swiper-tags-button-next").first().should("exist").click({ force: true })

  cy.getExpandedTile().find(".swiper-tags-button-prev").first().should("exist").click({ force: true })
})
