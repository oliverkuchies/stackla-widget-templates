/* eslint-disable cypress/no-unnecessary-waiting */
import { WIDGET_ID } from "./e2e"

const TAGS_WRAPPER = 'tile-tags[tile-id="65e16a0b5d7e676caec68f03"]'
const INDIVIDUAL_TAG_WRAPPER = 'tile-tag'

Cypress.Commands.add("checkTagsSnapshot", widgetType => {
  const computedCSSMainWrapper = cy.getShadowRoot().querySelector(TAGS_WRAPPER)
  cy.wrap(computedCSSMainWrapper).snapshot();

  const computedIndividualTagWrapper = computedCSSMainWrapper.querySelector(INDIVIDUAL_TAG_WRAPPER)
  cy.wrap(computedIndividualTagWrapper).snapshot();
})

