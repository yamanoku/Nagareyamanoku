const dayjs = require("dayjs");

module.exports = async function() {
  return {
    year: dayjs().year()
  };
};
