const photosReducerDefaultState = [];

const photosReducer = (state = photosReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PHOTO":
      return [
        ...state,
        action.photo
      ];
    default:
      return state;
  }
};

export default photosReducer;