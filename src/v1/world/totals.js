var totals = {
  "deaths":1003497,
  // "Cumulative Deaths":95936264,
  // "Deaths Last 7 Days":6926454,
  // "Deaths Last 7 Days Change":1317430.4199999988,
  // "Deaths Per Million":2741238.3400000473,
  "confirmed":33441919,
  // "Cumulative Confirmed":2401002422,
  // "Cases Last 7 Days":228490303,
  // "Cases Last 7 Days Change":3320759.4799999776,
  // "Cases Per Million":94757783.22000197,
  "cured": 21600000,
  "infections": 33441919 - 21600000 - 1003497
}

module.exports = totals;
