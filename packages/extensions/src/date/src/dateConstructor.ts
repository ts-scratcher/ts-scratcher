Date.dtNow = () => {
  return new Date(Date.now());
};
Date.today = () => {
  const dt = new Date(Date.now());
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
};
