/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);

const country = {
  name: "Argentina",
};

describe("Country routes (testing de las rutas GET)", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  // beforeEach(() => Country.sync({ force: true })
  //   .then(() => Country.create(pokemon)));
  describe("GET /countries", () => {
    it("should get 200", () =>
      agent.get("/countries")
      .expect(200)
      .expect("Content-Type", /json/)
      );
  });
  xdescribe("GET /countries?name (este es para el searh)", () => {
    it("este es el des query", () =>
      agent
        .get("/countries?name=argentina")
        .expect(200)
        .expect("Content-Type", /json/));
    it("este es el des query", () =>
      agent
        .get("/countries?name=ARGENTINA")
        .expect(200)
        .expect("Content-Type", /json/));
    it("este es 404", () =>
      agent
        .get("/countries?name=argzz")
        .expect(404)
        .expect("Content-Type", /json/)
        .expect({ error: 'no se encontro ningun pais' }));
    it("este es 404", () =>
      agent
        .get("/countries?name=ARGklk")
        .expect(404)
        .expect("Content-Type", /json/)
        .expect({ error: 'no se encontro ningun pais' }));
  });
  xdescribe("GET /countries:id (traemos por id para el modal)", () => {
    it("este texteo es a los id de los paises ", () =>
      agent.get("/countries/VEN").expect(200).expect("Content-Type", /json/));
    it("este texteo es a los id de los paises ", () =>
      agent.get("/countries/ARG").expect(200).expect("Content-Type", /json/));
    it("este retorna 404 ", () =>
      agent.get("/countries/AAA")
      .expect(404)
      .expect('id no valido')
      );
    it("este retorna 404 ", () =>
      agent.get("/countries/AA")
      .expect(404)
      .expect('id no valido')
      );
  });
  xdescribe("GET /activity ", () => {
    it("si le haces un get aca esta vacio", () => 
    agent.get("/activity")
    .expect(200)   
    .expect("Content-Type", /json/)
    .expect([])
    )
  });
});

xdescribe("pruebas de la ruta POST ", () => {
  it("creamos un post y responde 200", () => 
  agent.post("/activity")
  .send(
    {
      name: "Dias de qe eeq eqweqeq e zona",
       difficulty: "1",
       duration: "72Horas",
       season: "Verano",
       countriesId : ["VEN", "ARG" ]
    }
  )
  .expect(200)
  .expect('Content-Type', /json/)
  )
})