import uuid from "uuid";

// ADD PHOTO

export const addPhoto = (
  {
    photoLink = "",
    title = "",
    createdAt = 0,
    description = ""
  } = {}) => ({
    type: "ADD_PHOTO",
    photo: {
      id: uuid(),
      photoLink,
      title,
      createdAt,
      description
    }
  }
);

export const editPhoto = (id, updates) => ({
  type: "EDIT_PHOTO",
  id,
  updates
});

export const removePhoto = ({id} = {}) => ({
  type: "REMOVE_PHOTO",
  id
});

// export const startAddPhoto = (photoData = {}) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     const {
//       photoLink = "",
//       title = "",
//       description = "",
//       createdAt = 0
//     } = photoData;
//     const photo = { photoLink, title, description, createdAt };
    
//     return dispatch(addPhoto({
//       id: ref.key,
//       ...photo 
//     }));
//   };
// };