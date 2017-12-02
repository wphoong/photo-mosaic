import photosReducer from "../../reducers/photos.js";
import photos from "../fixtures/photos.js";

test("should set default state", () => {
  const state = photosReducer(undefined, { type: "@@init" });
  expect(state).toEqual([]);
});

test("should add photo", () => {
  const photo = {
    id: 4,
    photoLink: "lul4",
    title: "test4",
    createdAt: 4
  };

  const action = {
    type: "ADD_PHOTO",
    photo
  }
  const state = photosReducer(photos, action);
  expect(state).toEqual([...photos, photo]);
});

test("should edit photo", () => {
  const id = photos[0].id;
  const updates = { createdAt: 99 };
  const action = {
    type: "EDIT_PHOTO",
    id,
    updates
  };
  const state = photosReducer(photos, action);
  expect(state[0].createdAt).toBe(99);
});

test("should remove photo by id", () => {
  const id = photos[0].id;
  const action = {
    type: "REMOVE_PHOTO",
    id
  };
  const state = photosReducer(photos, action);
  expect(state).toEqual([photos[1], photos[2]]);
});

test("should not remove photo by id if id not found", () => {
  const id = 100;
  const action = {
    type: "REMOVE_PHOTO",
    id
  };
  const state = photosReducer(photos, action);
  expect(state).toEqual(photos);
});


