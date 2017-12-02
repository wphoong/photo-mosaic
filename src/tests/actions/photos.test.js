import React from "react";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  addPhoto,
  startAddPhoto,
  editPhoto,
  startEditPhoto,
  removePhoto,
  startRemovePhoto,
  setPhotos,
  startSetPhotos
} from "../../actions/photos.js";
import photos from "../fixtures/photos.js";
import database from "../../firebase/firebase.js";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const photosData = {};
  photos.forEach(({ id, photoLink, title, createdAt, description }) => {
    photosData[id] = { photoLink, title, createdAt, description };
  });
  database.ref(`photos`).set(photosData).then(() => done());
});

test("should setup add photo action object", () => {
  const photo = photos[0];
  const action = addPhoto(photo);
  expect(action).toEqual({
    type: "ADD_PHOTO",
    photo
  });
});

test("should setup add photo with provided values to database and store", (done) => {
  const store = createMockStore({});
  const photo = {
    photoLink: "hehe",
    title: "test",
    createdAt: 0,
    description: "lul"
  };

  store.dispatch(startAddPhoto(photo)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_PHOTO",
      photo: {
        id: expect.any(String),
        ...photo
      }
    });
    return database.ref(`photos/${actions[0].photo.id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(photo);
    done();
  });
});

test("should setup add photo with default values to database and store", (done) => {
  const store = createMockStore({});
  const photoDefault = {
    photoLink: "",
    title: "",
    createdAt: 0,
    description: ""
  };

  store.dispatch(startAddPhoto()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_PHOTO",
      photo: {
        id: expect.any(String),
        ...photoDefault
      }
    });
    return database.ref(`photos/${actions[0].photo.id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(photoDefault);
    done();
  });
});

test("should setup edit expense action object", () => {
  const id = photos[0].id;
  const updates = { title: "monkas" };
  const action = editPhoto(id, updates);
  expect(action).toEqual({
    type: "EDIT_PHOTO",
    id,
    updates
  });
});

test("should edit photo in database", (done) => {
  const store = createMockStore({});
  const id = photos[0].id;
  const updates = { title: "monkas" };

  store.dispatch(startEditPhoto(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_PHOTO",
      id,
      updates
    });

    return database.ref(`photos/${id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val().title).toBe(updates.title);
    done();
  });
});

test("should setup remove photo action object", () => {
  const id = photos[0].id;
  const action = removePhoto({id});
  expect(action).toEqual({
    type: "REMOVE_PHOTO",
    id
  });
});

test("should remove photo from database and store", (done) => {
  const store = createMockStore({});
  const id = photos[0].id;
  store.dispatch(startRemovePhoto({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_PHOTO",
      id
    });
    return database.ref(`photos/${id}`).once("value", (snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
  });
});

test("should setup set photos action object", () => {
  const action = setPhotos(photos);
  expect(action).toEqual({
    type: "SET_PHOTOS",
    photos
  });
});

test("should call startSetPhotos to fetch expenses from firebase", (done) => {
  const store = createMockStore({});

  store.dispatch(startSetPhotos()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_PHOTOS",
      photos
    });
    done();
  });
});



