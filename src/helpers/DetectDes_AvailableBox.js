function DetectDes_AvailableBox(number_vacancy) {
  if (number_vacancy <= 4) {
    return [2, 3, 4];
  } else if (number_vacancy > 4) {
    return [5, 6, 7];
  }
}

module.exports = DetectDes_AvailableBox;
