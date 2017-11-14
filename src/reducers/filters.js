const filtersDefaultState = {
  text: "",
  sortBy: "descend",
  setStartDate: 0,
  setEndDate: 0
};

const filtersReducer = (state=filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE_ASCEND":
      return {
        ...state,
        sortBy: "ascend"
      };
    case "SORT_BY_DATE_DESCEND":
      return {
        ...state,
        sortBy: "descend"
      };
    default:
      return state;
  }
};

export default filtersReducer;