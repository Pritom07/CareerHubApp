const getitem = () => {
  const getdata = localStorage.getItem("ID");
  if (getdata) {
    return JSON.parse(getdata).filter((id) => id !== null);
  }
  return [];
};

const setDatatoStorage = (fromstorage) => {
  const stringified = JSON.stringify(fromstorage.filter((id) => id !== null));
  localStorage.setItem("ID", stringified);
};

const setdata = (id) => {
  const fromstorage = getitem();
  const filternull = fromstorage.filter((idx) => idx !== null);
  const filter = filternull.find((idx) => idx === id);
  if (!filter) {
    fromstorage.push(id);
  }
  setDatatoStorage(fromstorage);
};

const removeFromstorage = (id) => {
  const fromstorage = getitem();
  const remaining = fromstorage.filter((idx) => idx !== id && idx !== null);
  setDatatoStorage(remaining);
};
export { getitem, setdata, removeFromstorage };
