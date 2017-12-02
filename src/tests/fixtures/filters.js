import moment from "moment";

const filters = {
  text: "",
  sortBy: "descend",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

const filters2 = {
  text: "LUL",
  sortBy: "ascend",
  startDate: moment(0),
  endDate: moment(0).add(10, "days")
};

export { filters, filters2 };