function GetUrlImgUtil(typeUtil, Constant) {
  return Constant.utilities.find((util) => {
    return util.type === typeUtil;
  });
}

module.exports = GetUrlImgUtil;
