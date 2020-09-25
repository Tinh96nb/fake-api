var byRegion = {
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
              "name": "Region",
              "type": "STRING",
              "dataType": "STRING"
            }
          ],
          "rows": [
            [
              "AMRO",
              536948,
              44787594,
              3706945,
              310323.91999999987,
              753150.0900000001,
              15872421,
              1122290906,
              108886291,
              638045.1900000003,
              25490478.889999993
            ],
            [
              "SEARO",
              106842,
              5657038,
              720672,
              51729.35999999995,
              12575.310000000003,
              6436394,
              283651401,
              43115319,
              153194.35,
              1601769.1099999994
            ],
            [
              "EURO",
              232572,
              31861694,
              1614821,
              430418.7200000003,
              1592129.3200000003,
              5450309,
              488949037,
              37028621,
              1071670.6999999995,
              37445858.47999999
            ],
            [
              "EMRO",
              59191,
              4785523,
              406184,
              130847.50000000003,
              122644.62,
              2285565,
              182856171,
              15628168,
              345195.2000000001,
              15109030.580000002
            ],
            [
              "AFRO",
              25202,
              1612581,
              173859,
              219297.44000000012,
              91211.44999999997,
              1161212,
              79943613,
              8043245,
              653793.7599999994,
              5965261.369999999
            ],
            [
              "WPRO",
              12885,
              1533241,
              88887,
              152262.40999999995,
              24653.39999999999,
              591666,
              53006912,
              4067568,
              420595.19999999995,
              2430124.11
            ],
            [
              "OTHER",
              13,
              2548,
              91,
              -183.3499999999998,
              0,
              741,
              161792,
              5187,
              4681.339999999999,
              0
            ]
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

module.exports = byRegion;
