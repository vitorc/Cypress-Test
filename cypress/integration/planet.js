var planet_informations = {
    name: "Tatooine", 
    rotation_period: 23, 
    orbital_period: 304, 
    diameter: 10465, 
    climate: "arid", 
    gravity: "1 standard", 
    terrain: "desert", 
    surface_water: 1, 
    population: 200000
 }
 
 var planet = planet_informations
 
 const baseURLPlanet = "https://swapi.co/api/planets/1/"
 
 describe('Star Wars Planet Response 200', () => {
    it('Get Star Wars Planet Response 200', () => {
       cy.request(baseURLPlanet)
       .then((response) => {
          expect(200).to.be.equal(200)
        })
     })
 })
 
 
 describe('Star Wars Planet name with ID 1', () => {
     it('Get Star Wars Planet name with ID 1', () => {
        cy.request(baseURLPlanet)
        .then((response) => {
           expect(planet.name).to.be.equal("Tatooine")
       })
      })
  })
 
  describe('Star Wars Planet Rotation Period with ID 1', () => {
     it('Get Star Wars Planet Rotation Period with ID 1', () => {
        cy.request(baseURLPlanet)
        .then((response) => {
          expect(planet.rotation_period).to.be.equal(23)
         })
      })
  })
 
  describe('Star Wars Planet orbital period with ID 1', () => {
    it('Get Star Wars Planet orbital period with ID 1', () => {
        cy.request(baseURLPlanet)
       .then((response) => {
         expect(planet.orbital_period).to.be.equal(304)
        })
     })
 })
 
 
 describe('Star Wars Planet diameter with ID 1', () => {
    it('Get Star Wars Planet diameter with ID 1', () => {
        cy.request(baseURLPlanet)
       .then((response) => {
         expect(planet.diameter).to.be.equal(10465)
        })
     })
 })
 
 describe('Star Wars Planet climate with ID 1', () => {
    it('Get Star Wars Planet climate with ID 1', () => {
        cy.request(baseURLPlanet)
       .then((response) => {
         expect(planet.climate).to.be.equal("arid")
        })
     })
 })
 
 describe('Star Wars Planet gravity with ID 1', () => {
    it('Get Star Wars Planet gravity with ID 1', () => {
        cy.request(baseURLPlanet)
       .then((response) => {
         expect(planet.gravity).to.be.equal("1 standard")
        })
     })
 })
 
 
 describe('Star Wars Planet terrain with ID 1', () => {
    it('Get Star Wars Planet terrain with ID 1', () => {
        cy.request(baseURLPlanet)
       .then((response) => {
         expect(planet.terrain).to.be.equal("desert")
        })
     })
 })
 
 
 describe('Star Wars Planet surface water  with ID 1', () => {
    it('Get Star Wars Planet surface water with ID 1', () => {
        cy.request(baseURLPlanet)
       .then((response) => {
         expect(planet.surface_water).to.be.equal(1)
        })
     })
 })
 
 
 describe('Star Wars Planet population with ID 1', () => {
    it('Get Star Wars Planet population with ID 1', () => {
        cy.request(baseURLPlanet)
       .then((response) => {
         expect(planet.population).to.be.equal(200000)
        })
     })
 })