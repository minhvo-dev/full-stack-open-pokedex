describe("Pokedex", function() {
  it("front page can be opened", function() {
    cy.visit("http://localhost:5000")
    cy.contains("ivysaur")
    cy.contains("Pokémon and Pokémon character names are trademarks of Nintendo.")
  })

  it("bulbasaur can be opened", function() {
    cy.visit("http://localhost:5000/pokemon/bulbasaur")
    cy.contains("bulbasaur")
    cy.contains("chlorophyll")
  })
})