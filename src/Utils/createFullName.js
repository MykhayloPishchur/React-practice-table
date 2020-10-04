const fullName = (user) => {
  const full = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return full;
};

export default fullName;
