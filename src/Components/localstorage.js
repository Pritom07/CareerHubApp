const getitem = () => {
  const getdata = localStorage.getItem("ID");
  if (getdata) {
    return JSON.parse(getdata);
  }
  return [];
};

const setDatatoStorage = (fromstorage) => {
  const stringified = JSON.stringify(fromstorage);
  localStorage.setItem("ID", stringified);
};

const setdata = (id) => {
  const fromstorage = getitem();
  const filter = fromstorage.find((idx) => idx === id);
  if (!filter) {
    fromstorage.push(id);
  }
  setDatatoStorage(fromstorage);
};
export { getitem, setdata };
