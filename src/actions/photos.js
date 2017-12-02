import uuid from "uuid";
import database from "../firebase/firebase.js";

// ADD PHOTO

export const addPhoto = (photo) => ({
  type: "ADD_PHOTO",
  photo
});

export const startAddPhoto = (photoData = {}) => {
  return (dispatch) => {
    const {
      photoLink = "",
      title = "",
      createdAt = 0,
      description = ""
    } = photoData;

    const photo = { photoLink, title, createdAt, description };

    return database.ref(`photos`).push(photo).then((ref) => {
      dispatch(addPhoto({
        id: ref.key,
        ...photo
      }));
    });
  };
};

export const editPhoto = (id, updates) => ({
  type: "EDIT_PHOTO",
  id,
  updates
});

export const startEditPhoto = (id, updates) => {
  return (dispatch) => {
    return database.ref(`photos/${id}`).update(updates).then(() => {
      dispatch(editPhoto(id, updates));
    });
  };
};

export const removePhoto = ({id} = {}) => ({
  type: "REMOVE_PHOTO",
  id
});

export const startRemovePhoto = ({id}) => {
  return (dispatch) => {
    return database.ref(`photos/${id}`).remove().then(() => {
      dispatch(removePhoto({id}));
    });
  };
};


export const setPhotos = (photos) => ({
  type: "SET_PHOTOS",
  photos
});

export const startSetPhotos = () => {
  return (dispatch) => {
    return database.ref("photos").once("value").then((snapshot) => {
      const photos = [];

      snapshot.forEach((childSnapshot) => {
        photos.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setPhotos(photos));
    });
  };
};

