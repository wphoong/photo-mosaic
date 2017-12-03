import moment from "moment";
import getVisiblePhotos from "../../selectors/photos.js";
import photos from "../fixtures/photos.js";

test("should filter by text", () => {
  const filters = {
    text: "test1",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisiblePhotos(photos, filters);
  expect(result).toEqual([photos[0]]);
});

test("should filter by sort date ascending", () => {
  const filters = {
    text: "",
    sortBy: "ascend",
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisiblePhotos(photos, filters);
  expect(result).toEqual([photos[1], photos[0], photos[2]]);
});

test("should filter by sort date ascending", () => {
  const filters = {
    text: "",
    sortBy: "descend",
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisiblePhotos(photos, filters);
  expect(result).toEqual([photos[2], photos[0], photos[1]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "",
    startDate: moment(0),
    endDate: undefined
  };

  const result = getVisiblePhotos(photos, filters);
  expect(result).toEqual([photos[0], photos[2]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: moment(0)
  };

  const result = getVisiblePhotos(photos, filters);
  expect(result).toEqual([photos[0], photos[1]]);
});

