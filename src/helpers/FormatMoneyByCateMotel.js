const THOUSAND_NUMBER = 5;
const MILLION_NUMBER = 6;
function CheckRangeOfMoney(money) {
  if (parseFloat(money / Math.pow(10, MILLION_NUMBER)) > 1) {
    return {
      showingMoney: parseFloat(money / Math.pow(10, MILLION_NUMBER)),
      typeMoney: `tr`,
    };
  } else if (parseFloat(money / Math.pow(10, THOUSAND_NUMBER)) > 1) {
    return {
      showingMoney: parseFloat(money / Math.pow(10, THOUSAND_NUMBER)) * 100,
      typeMoney: `k`,
    };
  }
}
function FormatMoneyByCateMotel(typeCate, money) {
  let showingMoney = CheckRangeOfMoney(money);
  return {
    ...showingMoney,
    type:
      typeCate === "Dormitory"
        ? "người"
        : typeCate === "Shared" && typeCate === "NotShared"
        ? "phòng"
        : "căn",
  };
}

module.exports = FormatMoneyByCateMotel;
