let nextId = 0;

const generateId = () => {
  result = nextId;
  nextId += 1;
  return result;
};

export default generateId;
