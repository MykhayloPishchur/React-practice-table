const fullLocation = (data) => {
  const full = ` ${data.street.number} ${data.street.name} ${data.city} ${data.postcode}`;
  return full;
};

export default fullLocation;
