import moment from "moment";

function formatDate(date) {
  return moment(date).format("dddd Do MMMM YYYY");
}

function yearsSinceDate(date) {
  return moment().diff(moment(date), "years");
}

function daysSinceDate(date) {
  return moment().diff(moment(date), "days") + 1;
}

function getDayFromDate(date) {
  return moment(date).format("dddd");
}

export { formatDate, yearsSinceDate, daysSinceDate, getDayFromDate };
