var byDay = {
  "metrics": [
    {
      "name": "Deaths",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Cumulative Deaths",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Deaths Last 7 Days",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Deaths Last 7 Days Change",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Deaths Per Million",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Confirmed",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Cumulative Confirmed",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Cases Last 7 Days",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Cases Last 7 Days Change",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    },
    {
      "name": "Cases Per Million",
      "type": "NUMBER",
      "dataType": "NUMERIC",
      "aggregateFunction": "SUM"
    }
  ],
  "dimensions": [
    {
      "name": "day",
      "type": "TIMESTAMP",
      "dataType": "STRING"
    }
  ],
  "rows": [[0,1,2,3,4,5,6,7,8,9,11]
  ],
  "totals": [
    973653,
    90240219,
    6711459,
    1294695.9999999981,
    2596364.19000006,
    31798308,
    2210859832,
    216774399,
    3287175.7399999783,
    88042522.54000154
  ]
}

module.exports = byDay;
