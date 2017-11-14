const filtersDefaultState = {
  text: "",
  sortBy: "descend",
  startDate: 0,
  endDate: 0
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
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filtersReducer;