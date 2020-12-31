function FormatDateTime(date_time) {
  const d = new Date(date_time);
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  return `${date} / ${month} / ${year}`;
}

module.exports = FormatDateTime;
