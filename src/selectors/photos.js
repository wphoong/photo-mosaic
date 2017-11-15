import moment from "moment";

const getVisiblePhotos = (photos, { text, sortBy, startDate, endDate}) => {
  return photos.filter((photo) => {
    const createdAtMoment = moment(photo.createdAt);
    const setTextMatch = photo.title.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;

    return setTextMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
      if (sortBy === "descend") {
        return b.createdAt - a.createdAt;
      } else if (soryBy === "ascend") {
        return a.createdAt - b.createdAt;
      }
    }
  );
};

export default getVisiblePhotos;
