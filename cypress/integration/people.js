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
         expect(200).to.be.equal(200)
       })
    })
})


describe('Star Wars People name with ID 1', () => {
    it('Get Star Wars people name with ID 1', () => {
       cy.request(baseURLPeople)
       .then((response) => {
          expect(people.name).to.be.equal("Luke Skywalker")
      })
     })
 })

 describe('Star Wars People height with ID 1', () => {
    it('Get Star Wars people height with ID 1', () => {
      cy.request(baseURLPeople)
       .then((response) => {
         expect(people.height).to.be.equal(172)
        })
     })
 })

 describe('Star Wars People mass with ID 1', () => {
   it('Get Star Wars people mass with ID 1', () => {
      cy.request(baseURLPeople)
      .then((response) => {
        expect(people.mass).to.be.equal(77)
       })
    })
})


describe('Star Wars People hair color with ID 1', () => {
   it('Get Star Wars people hair color with ID 1', () => {
      cy.request(baseURLPeople)
      .then((response) => {
        expect(people.hair_color).to.be.equal("blond")
       })
    })
})



describe('Star Wars People skin color with ID 1', () => {
   it('Get Star Wars people skin color with ID 1', () => {
      cy.request(baseURLPeople)
      .then((response) => {
        expect(people.skin_color).to.be.equal("fair")
       })
    })
})


describe('Star Wars People eye color with ID 1', () => {
   it('Get Star Wars people eye color with ID 1', () => {
      cy.request(baseURLPeople)
      .then((response) => {
        expect(people.eye_color).to.be.equal("blue")
       })
    })
})


describe('Star Wars People birth year with ID 1', () => {
   it('Get Star Wars people birth year with ID 1', () => {
      cy.request(baseURLPeople)
      .then((response) => {
        expect(people.birth_year).to.be.equal("19BBY")
       })
    })
})


describe('Star Wars People gender with ID 1', () => {
   it('Get Star Wars people gender with ID 1', () => {
      cy.request(baseURLPeople)
      .then((response) => {
        expect(people.gender).to.be.equal("male")
       })
    })
})