const utils = {
  slugify,
};

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export default utils;
