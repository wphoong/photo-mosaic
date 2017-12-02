const photosReducerDefaultState = [];

const photosReducer = (state = photosReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PHOTO":
      return [
        ...state,
        action.photo
      ];
    case "EDIT_PHOTO":
      return state.map((photo) => {
        if (photo.id === action.id) {
          return {
            ...photo,
            ...action.updates
          };
        } else {
          return photo;
        }
      });
    case "REMOVE_PHOTO":
      return state.filter(({id}) => id !== action.id);
    case "SET_PHOTOS":
      return action.photos;
    default:
      return state;
  }
};

export default photosReducer;