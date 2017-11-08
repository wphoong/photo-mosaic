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
      photoLink = "",
      title = "",
      description = "",
      createdAt = 0
    } = photoData;
    const photo = { photoLink, title, description, createdAt };
    
    return dispatch(addPhoto({
      id: ref.key,
      ...photo 
    }));
  };
};