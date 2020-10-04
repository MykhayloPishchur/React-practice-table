const formatedDateOfBirth = (data) =>
  data.date.slice(5, 10).split("-").join("/") + "/" + data.date.slice(0, 4);

export default formatedDateOfBirth;
