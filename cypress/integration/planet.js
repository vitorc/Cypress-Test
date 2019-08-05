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
            var statusResponse = response.status    
            expect(planet.name).to.be.equal("Tatooine")
            expect(planet.rotation_period).to.be.equal(23)
            expect(planet.orbital_period).to.be.equal(304)
            expect(planet.diameter).to.be.equal(10465)
            expect(planet.climate).to.be.equal("arid")
            expect(planet.gravity).to.be.equal("1 standard")
            expect(planet.terrain).to.be.equal("desert")
            expect(planet.surface_water).to.be.equal(1)
            expect(planet.population).to.be.equal(200000)
            expect(statusResponse).to.be.equal(200)
        })
     })
 })