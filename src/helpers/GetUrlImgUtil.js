function GetUrlImgUtil(typeUtil, resData) {
  return resData.find((util) => {
    return util.type === typeUtil;
  });
}

module.exports = GetUrlImgUtil;
