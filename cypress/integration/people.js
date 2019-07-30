var people_informations = {
   name: "Luke Skywalker", 
   height: 172, 
   mass: 77, 
   hair_color: "blond", 
   skin_color: "fair", 
   eye_color: "blue", 
   birth_year: "19BBY", 
   gender: "male"
}

var people = people_informations

const baseURLPeople = "https://swapi.co/api/people/1"

describe('Star Wars People Response 200', () => {
   it('Get Star Wars people Response 200', () => {
      cy.request(baseURLPeople)
      .then((response) => {
         expect(people.name).to.be.equal("Luke Skywalker")
         expect(people.height).to.be.equal(172)
         expect(people.mass).to.be.equal(77)
         expect(people.hair_color).to.be.equal("blond")
         expect(people.skin_color).to.be.equal("fair")
         expect(people.eye_color).to.be.equal("blue")
         expect(people.birth_year).to.be.equal("19BBY")
         expect(people.gender).to.be.equal("male")
         expect(200).to.be.equal(200)
       })
    })
})

