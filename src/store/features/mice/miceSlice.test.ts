import { Mice, Mouse } from "../../../data/types";
import { loadMiceActionCreator, miceReducer } from "./miceSlice";

describe("Given a miceReducer function", () => {
  const mouse001: Mouse = {
    id: "001",
    productName: "Logitech MX Master 3",
    price: 99.99,
    image: "https://example.com/mx-master-3.jpg",
    isAvailable: true,
  };

  const mouse002: Mouse = {
    id: "002",
    productName: "Razer DeathAdder Elite",
    price: 69.99,
    image: "https://example.com/deathadder-elite.jpg",
    isAvailable: true,
  };

  const mice: Mice = [mouse001, mouse002];

  describe("When it receives an empty list and it's called with loadMiceActionCreator action with a list of 2 mice as payload", () => {
    test("Then it should load a list with 2 mice", () => {
      const initialMice: Mice = [];
      const expectedMice = mice;

      const loadMiceAction = loadMiceActionCreator(mice);
      const newMice = miceReducer(initialMice, loadMiceAction);

      expect(newMice).toStrictEqual(expectedMice);
    });
  });
});
