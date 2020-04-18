const dayjs = require("dayjs");

module.exports = async function() {
  return {
    year: dayjs().year(),
    today: dayjs().format('YYYY-MM-DDThh:mm:ss'),
    todayFormat: dayjs().format('YYYY年MM月DD日')
  };
};
