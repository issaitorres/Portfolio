function ReformatDate(val) {
  var mydate = new Date(val);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${
    monthNames[mydate.getMonth()]
  } ${mydate.getDate()}, ${mydate.getFullYear()}`;
}

export default ReformatDate;
