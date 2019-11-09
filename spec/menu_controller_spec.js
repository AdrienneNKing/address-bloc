const MenuController = require("../controllers/MenuController");

describe("#remindMe()", () => {
  this.menu = new MenuController();
    it("should return 'Learning is a life long pursuit'", () => {
      expect(this.menu.remindMe()).toBe("Learning is a life long pursuit");
    });
});
