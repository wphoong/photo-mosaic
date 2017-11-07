import uuid from "uuid";

// ADD PHOTO

export const addPhoto = (photo) => ({
  type: "ADD_PHOTO",
  photo
});

export const startAddPhoto = (photoData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      photo = "",
      title = "",
      description = "",
      createdAt = 0
    } = photoData;
    const photo = { photo, title, description, createdAt };
    
    return dispatch(addPhoto({ ...expense }));
  };
};