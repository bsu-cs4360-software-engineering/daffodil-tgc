import DMS from "../dbManagement/databaseManagementSingleton";

describe("DatabaseManagementSingleton", () => {
  it("should get a card by name", async () => {
    const card = await DMS.getCardByName("potato");
    expect(card).not.toBeNull();
    expect(card?.name).toBe("potato");
  });

  it("should get all cards", async () => {
    const card = await DMS.getAllCards();
    expect(card).not.toBeNull();
    expect(card.length).toBeGreaterThan(5);
  });

  it("should get all class cards", async () => {
    const card = await DMS.getAllClasses();
    expect(card).not.toBeNull();
    expect(card.length).toBeGreaterThan(3);
  });
});
