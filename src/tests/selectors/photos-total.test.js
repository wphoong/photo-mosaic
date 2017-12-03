import photosTotal from "../../selectors/photos-total.js";
import photos from "../fixtures/photos.js";

test("should fetch total number of photos", () => {
  const result = photosTotal(photos);
  expect(result).toBe(3);
});
