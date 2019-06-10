const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

      beforeEach((done) => {
          this.book = new ContactController();
          sequelize.sync({force: true}).then((res) => {
            done();
          })
          .catch((err) => {
            done();
          });
       });


      it("should be defined", () => {
        expect(ContactController).toBeDefined();
      });


    describe("#getContacts()", () => {
     it("should return an empty array when no contacts are available", (done) => {
       this.book.getContacts()
       .then((contacts) => {
         expect(contacts.length).toBe(0);
         done();
       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });

     it("should return an array of contacts when contacts are available", (done) => {
       this.book.addContact("Alice", "001-101-1010", "alice@gmail.com")
       .then(() => {
         this.book.getContacts()
         .then((contacts) => {
           expect(contacts.length).toBe(1);
           done();
         });
       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });

   });
});
