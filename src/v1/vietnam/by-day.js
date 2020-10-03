"use strict";

var cityTemperature = [
  {
    date: '01/10/2011',
    "Tử vong": 63,
    "Cộng đồng": 72,
    "Nhập cảnh": 62,
  }, {
    date: '02/10/2011',
    "Tử vong": 58,
    "Cộng đồng": 67,
    "Nhập cảnh": 59,
  }, {
    date: '20/10/1103',
    "Tử vong": 53,
    "Cộng đồng": 69,
    "Nhập cảnh": 59,
  }, {
    date: '04/10/2011',
    "Tử vong": 55,
    "Cộng đồng": 68,
    "Nhập cảnh": 58,
  }, {
    date: '05/10/2011',
    "Tử vong": 64,
    "Cộng đồng": 72,
    "Nhập cảnh": 58,
  }, {
    date: '06/10/2011',
    "Tử vong": 58,
    "Cộng đồng": 77,
    "Nhập cảnh": 57,
  }, {
    date: '07/10/2011',
    "Tử vong": 57,
    "Cộng đồng": 82,
    "Nhập cảnh": 56,
  }, {
    date: '08/10/2011',
    "Tử vong": 61,
    "Cộng đồng": 78,
    "Nhập cảnh": 56,
  }, {
    date: '09/10/2011',
    "Tử vong": 69,
    "Cộng đồng": 68,
    "Nhập cảnh": 56,
  }, {
    date: '10/10/2011',
    "Tử vong": 71,
    "Cộng đồng": 68,
    "Nhập cảnh": 60,
  }, {
    date: '11/10/2011',
    "Tử vong": 68,
    "Cộng đồng": 70,
    "Nhập cảnh": 61,
  }, {
    date: '12/10/2011',
    "Tử vong": 61,
    "Cộng đồng": 75,
    "Nhập cảnh": 61,
  }, {
    date: '13/10/2011',
    "Tử vong": 63,
    "Cộng đồng": 76,
    "Nhập cảnh": 64,
  }, {
    date: '14/10/2011',
    "Tử vong": 66,
    "Cộng đồng": 66,
    "Nhập cảnh": 67,
  }, {
    date: '15/10/2011',
    "Tử vong": 61,
    "Cộng đồng": 68,
    "Nhập cảnh": 64,
  }, {
    date: '16/10/2011',
    "Tử vong": 61,
    "Cộng đồng": 70,
    "Nhập cảnh": 61,
  }, {
    date: '17/10/2011',
    "Tử vong": 62,
    "Cộng đồng": 71,
    "Nhập cảnh": 61,
  }, {
    date: '18/10/2011',
    "Tử vong": 60,
    "Cộng đồng": 70,
    "Nhập cảnh": 59,
  }, {
    date: '19/10/2011',
    "Tử vong": 62,
    "Cộng đồng": 61,
    "Nhập cảnh": 58,
  }, {
    date: '20/10/2011',
    "Tử vong": 65,
    "Cộng đồng": 57,
    "Nhập cảnh": 57,
  }, {
    date: '21/10/2011',
    "Tử vong": 55,
    "Cộng đồng": 64,
    "Nhập cảnh": 56,
  }, {
    date: '22/10/2011',
    "Tử vong": 54,
    "Cộng đồng": 72,
    "Nhập cảnh": 60,
  }, {
    date: '23/10/2011',
    "Tử vong": 54,
    "Cộng đồng": 72,
    "Nhập cảnh": 65,
  }, {
    date: '24/10/2011',
    "Tử vong": 54,
    "Cộng đồng": 72,
    "Nhập cảnh": 60,
  }, {
    date: '25/10/2011',
    "Tử vong": 57,
    "Cộng đồng": 72,
    "Nhập cảnh": 56,
  }, {
    date: '26/10/2011',
    "Tử vong": 54,
    "Cộng đồng": 73,
    "Nhập cảnh": 54,
  }, {
    date: '27/10/2011',
    "Tử vong": 54,
    "Cộng đồng": 70,
    "Nhập cảnh": 56,
  }, {
    date: '28/10/2011',
    "Tử vong": 42,
    "Cộng đồng": 56,
    "Nhập cảnh": 58,
  }, {
    date: '29/10/2011',
    "Tử vong": 40,
    "Cộng đồng": 51,
    "Nhập cảnh": 57,
  }, {
    date: '30/10/2011',
    "Tử vong": 38,
    "Cộng đồng": 54,
    "Nhập cảnh": 57,
  }, {
    date: '31/10/2011',
    "Tử vong": 44,
    "Cộng đồng": 58,
    "Nhập cảnh": 55,
  }, {
    date: '01/11/2011',
    "Tử vong": 49,
    "Cộng đồng": 62,
    "Nhập cảnh": 57,
  }, {
    date: '02/11/2011',
    "Tử vong": 47,
    "Cộng đồng": 71,
    "Nhập cảnh": 64,
  }, {
    date: '03/11/2011',
    "Tử vong": 50,
    "Cộng đồng": 58,
    "Nhập cảnh": 56,
  }, {
    date: '04/11/2011',
    "Tử vong": 50,
    "Cộng đồng": 45,
    "Nhập cảnh": 50,
  }, {
    date: '05/11/2011',
    "Tử vong": 43,
    "Cộng đồng": 52,
    "Nhập cảnh": 51,
  }, {
    date: '06/11/2011',
    "Tử vong": 43,
    "Cộng đồng": 73,
    "Nhập cảnh": 52,
  }, {
    date: '07/11/2011',
    "Tử vong": 48,
    "Cộng đồng": 75,
    "Nhập cảnh": 51,
  }, {
    date: '08/11/2011',
    "Tử vong": 55,
    "Cộng đồng": 72,
    "Nhập cảnh": 50,
  }, {
    date: '09/11/2011',
    "Tử vong": 53,
    "Cộng đồng": 56,
    "Nhập cảnh": 54,
  }, {
    date: '10/11/2011',
    "Tử vong": 57,
    "Cộng đồng": 55,
    "Nhập cảnh": 55,
  }, {
    date: '11/11/2011',
    "Tử vong": 48,
    "Cộng đồng": 46,
    "Nhập cảnh": 53,
  }, {
    date: '12/11/2011',
    "Tử vong": 46,
    "Cộng đồng": 62,
    "Nhập cảnh": 54,
  }, {
    date: '13/11/2011',
    "Tử vong": 51,
    "Cộng đồng": 71,
    "Nhập cảnh": 53,
  }, {
    date: '14/11/2011',
    "Tử vong": 56,
    "Cộng đồng": 75,
    "Nhập cảnh": 53,
  }, {
    date: '15/11/2011',
    "Tử vong": 59,
    "Cộng đồng": 72,
    "Nhập cảnh": 53,
  }, {
    date: '16/11/2011',
    "Tử vong": 56,
    "Cộng đồng": 65,
    "Nhập cảnh": 52,
  }, {
    date: '17/11/2011',
    "Tử vong": 49,
    "Cộng đồng": 56,
    "Nhập cảnh": 52,
  }, {
    date: '18/11/2011',
    "Tử vong": 41,
    "Cộng đồng": 49,
    "Nhập cảnh": 53,
  }, {
    date: '19/11/2011',
    "Tử vong": 44,
    "Cộng đồng": 71,
    "Nhập cảnh": 49,
  }, {
    date: '20/11/2011',
    "Tử vong": 54,
    "Cộng đồng": 77,
    "Nhập cảnh": 50,
  }, {
    date: '21/11/2011',
    "Tử vong": 54,
    "Cộng đồng": 76,
    "Nhập cảnh": 51,
  }, {
    date: '22/11/2011',
    "Tử vong": 49,
    "Cộng đồng": 68,
    "Nhập cảnh": 52,
  }, {
    date: '23/11/2011',
    "Tử vong": 50,
    "Cộng đồng": 57,
    "Nhập cảnh": 54,
  }, {
    date: '24/11/2011',
    "Tử vong": 44,
    "Cộng đồng": 55,
    "Nhập cảnh": 55,
  }, {
    date: '25/11/2011',
    "Tử vong": 50,
    "Cộng đồng": 61,
    "Nhập cảnh": 51,
  }, {
    date: '26/11/2011',
    "Tử vong": 52,
    "Cộng đồng": 64,
    "Nhập cảnh": 53,
  }, {
    date: '27/11/2011',
    "Tử vong": 49,
    "Cộng đồng": 51,
    "Nhập cảnh": 52,
  }, {
    date: '28/11/2011',
    "Tử vong": 57,
    "Cộng đồng": 43,
    "Nhập cảnh": 51,
  }, {
    date: '29/11/2011',
    "Tử vong": 59,
    "Cộng đồng": 46,
    "Nhập cảnh": 49,
  }, {
    date: '30/11/2011',
    "Tử vong": 50,
    "Cộng đồng": 48,
    "Nhập cảnh": 49,
  }, {
    date: '01/12/2011',
    "Tử vong": 44,
    "Cộng đồng": 48,
    "Nhập cảnh": 60,
  }, {
    date: '02/12/2011',
    "Tử vong": 43,
    "Cộng đồng": 60,
    "Nhập cảnh": 62,
  }, {
    date: '03/12/2011',
    "Tử vong": 42,
    "Cộng đồng": 62,
    "Nhập cảnh": 58,
  }, {
    date: '04/12/2011',
    "Tử vong": 43,
    "Cộng đồng": 57,
    "Nhập cảnh": 52,
  }, {
    date: '05/12/2011',
    "Tử vong": 50,
    "Cộng đồng": 44,
    "Nhập cảnh": 51,
  }, {
    date: '06/12/2011',
    "Tử vong": 54,
    "Cộng đồng": 37,
    "Nhập cảnh": 49,
  }, {
    date: '07/12/2011',
    "Tử vong": 54,
    "Cộng đồng": 35,
    "Nhập cảnh": 48,
  }, {
    date: '08/12/2011',
    "Tử vong": 43,
    "Cộng đồng": 37,
    "Nhập cảnh": 46,
  }, {
    date: '09/12/2011',
    "Tử vong": 42,
    "Cộng đồng": 45,
    "Nhập cảnh": 49,
  }, {
    date: '10/12/2011',
    "Tử vong": 45,
    "Cộng đồng": 50,
    "Nhập cảnh": 52,
  }, {
    date: '11/12/2011',
    "Tử vong": 33,
    "Cộng đồng": 48,
    "Nhập cảnh": 48,
  }, {
    date: '12/12/2011',
    "Tử vong": 36,
    "Cộng đồng": 52,
    "Nhập cảnh": 47,
  }, {
    date: '13/12/2011',
    "Tử vong": 38,
    "Cộng đồng": 60,
    "Nhập cảnh": 47,
  }, {
    date: '14/12/2011',
    "Tử vong": 41,
    "Cộng đồng": 70,
    "Nhập cảnh": 46,
  }, {
    date: '15/12/2011',
    "Tử vong": 49,
    "Cộng đồng": 64,
    "Nhập cảnh": 48,
  }, {
    date: '16/12/2011',
    "Tử vong": 50,
    "Cộng đồng": 50,
    "Nhập cảnh": 47,
  }, {
    date: '17/12/2011',
    "Tử vong": 40,
    "Cộng đồng": 51,
    "Nhập cảnh": 49,
  }, {
    date: '18/12/2011',
    "Tử vong": 29,
    "Cộng đồng": 55,
    "Nhập cảnh": 49,
  }, {
    date: '19/12/2011',
    "Tử vong": 33,
    "Cộng đồng": 62,
    "Nhập cảnh": 48,
  }, {
    date: '20/12/2011',
    "Tử vong": 45,
    "Cộng đồng": 56,
    "Nhập cảnh": 49,
  }, {
    date: '21/12/2011',
    "Tử vong": 47,
    "Cộng đồng": 47,
    "Nhập cảnh": 48,
  }, {
    date: '22/12/2011',
    "Tử vong": 54,
    "Cộng đồng": 52,
    "Nhập cảnh": 53,
  }, {
    date: '23/12/2011',
    "Tử vong": 47,
    "Cộng đồng": 45,
    "Nhập cảnh": 47,
  }, {
    date: '24/12/2011',
    "Tử vong": 34,
    "Cộng đồng": 43,
    "Nhập cảnh": 47,
  }, {
    date: '25/12/2011',
    "Tử vong": 35,
    "Cộng đồng": 42,
    "Nhập cảnh": 48,
  }, {
    date: '26/12/2011',
    "Tử vong": 43,
    "Cộng đồng": 48,
    "Nhập cảnh": 45,
  }, {
    date: '27/12/2011',
    "Tử vong": 42,
    "Cộng đồng": 45,
    "Nhập cảnh": 47,
  }, {
    date: '28/12/2011',
    "Tử vong": 46,
    "Cộng đồng": 44,
    "Nhập cảnh": 48,
  }, {
    date: '29/12/2011',
    "Tử vong": 30,
    "Cộng đồng": 50,
    "Nhập cảnh": 50,
  }, {
    date: '30/12/2011',
    "Tử vong": 40,
    "Cộng đồng": 52,
    "Nhập cảnh": 52,
  }, {
    date: '31/12/2011',
    "Tử vong": 49,
    "Cộng đồng": 53,
    "Nhập cảnh": 50,
  }, {
    date: '01/01/2012',
    "Tử vong": 46,
    "Cộng đồng": 55,
    "Nhập cảnh": 53,
  }, {
    date: '02/01/2012',
    "Tử vong": 43,
    "Cộng đồng": 48,
    "Nhập cảnh": 53,
  }, {
    date: '03/01/2012',
    "Tử vong": 30,
    "Cộng đồng": 41,
    "Nhập cảnh": 49,
  }, {
    date: '04/01/2012',
    "Tử vong": 19,
    "Cộng đồng": 48,
    "Nhập cảnh": 52,
  }, {
    date: '05/01/2012',
    "Tử vong": 32,
    "Cộng đồng": 54,
    "Nhập cảnh": 52,
  }, {
    date: '06/01/2012',
    "Tử vong": 41,
    "Cộng đồng": 61,
    "Nhập cảnh": 49,
  }, {
    date: '07/01/2012',
    "Tử vong": 47,
    "Cộng đồng": 59,
    "Nhập cảnh": 51,
  }, {
    date: '08/01/2012',
    "Tử vong": 46,
    "Cộng đồng": 52,
    "Nhập cảnh": 56,
  }, {
    date: '09/01/2012',
    "Tử vong": 34,
    "Cộng đồng": 54,
    "Nhập cảnh": 52,
  }, {
    date: '10/01/2012',
    "Tử vong": 39,
    "Cộng đồng": 47,
    "Nhập cảnh": 51,
  }, {
    date: '11/01/2012',
    "Tử vong": 40,
    "Cộng đồng": 49,
    "Nhập cảnh": 49,
  }, {
    date: '12/01/2012',
    "Tử vong": 45,
    "Cộng đồng": 48,
    "Nhập cảnh": 51,
  }, {
    date: '13/01/2012',
    "Tử vong": 40,
    "Cộng đồng": 40,
    "Nhập cảnh": 53,
  }, {
    date: '14/01/2012',
    "Tử vong": 30,
    "Cộng đồng": 43,
    "Nhập cảnh": 52,
  }, {
    date: '15/01/2012',
    "Tử vong": 23,
    "Cộng đồng": 45,
    "Nhập cảnh": 49,
  }, {
    date: '16/01/2012',
    "Tử vong": 22,
    "Cộng đồng": 65,
    "Nhập cảnh": 45,
  }, {
    date: '17/01/2012',
    "Tử vong": 39,
    "Cộng đồng": 68,
    "Nhập cảnh": 43,
  }, {
    date: '18/01/2012',
    "Tử vong": 43,
    "Cộng đồng": 47,
    "Nhập cảnh": 45,
  }, {
    date: '19/01/2012',
    "Tử vong": 26,
    "Cộng đồng": 57,
    "Nhập cảnh": 47,
  }, {
    date: '20/01/2012',
    "Tử vong": 32,
    "Cộng đồng": 61,
    "Nhập cảnh": 51,
  }, {
    date: '21/01/2012',
    "Tử vong": 27,
    "Cộng đồng": 54,
    "Nhập cảnh": 53,
  }, {
    date: '22/01/2012',
    "Tử vong": 25,
    "Cộng đồng": 56,
    "Nhập cảnh": 48,
  }, {
    date: '23/01/2012',
    "Tử vong": 39,
    "Cộng đồng": 54,
    "Nhập cảnh": 52,
  }, {
    date: '24/01/2012',
    "Tử vong": 48,
    "Cộng đồng": 52,
    "Nhập cảnh": 49,
  }, {
    date: '25/01/2012',
    "Tử vong": 43,
    "Cộng đồng": 61,
    "Nhập cảnh": 52,
  }, {
    date: '26/01/2012',
    "Tử vong": 37,
    "Cộng đồng": 55,
    "Nhập cảnh": 53,
  }, {
    date: '27/01/2012',
    "Tử vong": 48,
    "Cộng đồng": 50,
    "Nhập cảnh": 50,
  }, {
    date: '28/01/2012',
    "Tử vong": 43,
    "Cộng đồng": 52,
    "Nhập cảnh": 50,
  }, {
    date: '29/01/2012',
    "Tử vong": 40,
    "Cộng đồng": 44,
    "Nhập cảnh": 53,
  }, {
    date: '30/01/2012',
    "Tử vong": 38,
    "Cộng đồng": 49,
    "Nhập cảnh": 51,
  }, {
    date: '31/01/2012',
    "Tử vong": 43,
    "Cộng đồng": 62,
    "Nhập cảnh": 50,
  }, {
    date: '01/02/2012',
    "Tử vong": 50,
    "Cộng đồng": 64,
    "Nhập cảnh": 50,
  }, {
    date: '02/02/2012',
    "Tử vong": 45,
    "Cộng đồng": 61,
    "Nhập cảnh": 51,
  }, {
    date: '03/02/2012',
    "Tử vong": 37,
    "Cộng đồng": 70,
    "Nhập cảnh": 51,
  }, {
    date: '04/02/2012',
    "Tử vong": 40,
    "Cộng đồng": 61,
    "Nhập cảnh": 52,
  }, {
    date: '05/02/2012',
    "Tử vong": 36,
    "Cộng đồng": 48,
    "Nhập cảnh": 53,
  }, {
    date: '06/02/2012',
    "Tử vong": 39,
    "Cộng đồng": 44,
    "Nhập cảnh": 54,
  }, {
    date: '07/02/2012',
    "Tử vong": 43,
    "Cộng đồng": 51,
    "Nhập cảnh": 54,
  }, {
    date: '08/02/2012',
    "Tử vong": 36,
    "Cộng đồng": 49,
    "Nhập cảnh": 51,
  }, {
    date: '09/02/2012',
    "Tử vong": 36,
    "Cộng đồng": 45,
    "Nhập cảnh": 53,
  }, {
    date: '10/02/2012',
    "Tử vong": 38,
    "Cộng đồng": 54,
    "Nhập cảnh": 53,
  }, {
    date: '11/02/2012',
    "Tử vong": 36,
    "Cộng đồng": 44,
    "Nhập cảnh": 52,
  }, {
    date: '12/02/2012',
    "Tử vong": 29,
    "Cộng đồng": 36,
    "Nhập cảnh": 50,
  }, {
    date: '13/02/2012',
    "Tử vong": 33,
    "Cộng đồng": 44,
    "Nhập cảnh": 49,
  }, {
    date: '14/02/2012',
    "Tử vong": 39,
    "Cộng đồng": 52,
    "Nhập cảnh": 48,
  }, {
    date: '15/02/2012',
    "Tử vong": 42,
    "Cộng đồng": 68,
    "Nhập cảnh": 49,
  }, {
    date: '16/02/2012',
    "Tử vong": 39,
    "Cộng đồng": 54,
    "Nhập cảnh": 52,
  }, {
    date: '17/02/2012',
    "Tử vong": 46,
    "Cộng đồng": 53,
    "Nhập cảnh": 49,
  }, {
    date: '18/02/2012',
    "Tử vong": 41,
    "Cộng đồng": 56,
    "Nhập cảnh": 51,
  }, {
    date: '19/02/2012',
    "Tử vong": 39,
    "Cộng đồng": 50,
    "Nhập cảnh": 47,
  }, {
    date: '20/02/2012',
    "Tử vong": 38,
    "Cộng đồng": 53,
    "Nhập cảnh": 48,
  }, {
    date: '21/02/2012',
    "Tử vong": 37,
    "Cộng đồng": 61,
    "Nhập cảnh": 49,
  }, {
    date: '22/02/2012',
    "Tử vong": 45,
    "Cộng đồng": 68,
    "Nhập cảnh": 53,
  }, {
    date: '23/02/2012',
    "Tử vong": 50,
    "Cộng đồng": 69,
    "Nhập cảnh": 54,
  }, {
    date: '24/02/2012',
    "Tử vong": 42,
    "Cộng đồng": 59,
    "Nhập cảnh": 55,
  }, {
    date: '25/02/2012',
    "Tử vong": 42,
    "Cộng đồng": 47,
    "Nhập cảnh": 51,
  }, {
    date: '26/02/2012',
    "Tử vong": 36,
    "Cộng đồng": 47,
    "Nhập cảnh": 47,
  }, {
    date: '27/02/2012',
    "Tử vong": 40,
    "Cộng đồng": 61,
    "Nhập cảnh": 45,
  }, {
    date: '28/02/2012',
    "Tử vong": 45,
    "Cộng đồng": 67,
    "Nhập cảnh": 47,
  }, {
    date: '29/02/2012',
    "Tử vong": 40,
    "Cộng đồng": 70,
    "Nhập cảnh": 49,
  }, {
    date: '01/03/2012',
    "Tử vong": 41,
    "Cộng đồng": 62,
    "Nhập cảnh": 48,
  }, {
    date: '02/03/2012',
    "Tử vong": 36,
    "Cộng đồng": 72,
    "Nhập cảnh": 48,
  }, {
    date: '03/03/2012',
    "Tử vong": 47,
    "Cộng đồng": 59,
    "Nhập cảnh": 50,
  }, {
    date: '04/03/2012',
    "Tử vong": 44,
    "Cộng đồng": 51,
    "Nhập cảnh": 55,
  }, {
    date: '05/03/2012',
    "Tử vong": 38,
    "Cộng đồng": 55,
    "Nhập cảnh": 48,
  }, {
    date: '06/03/2012',
    "Tử vong": 32,
    "Cộng đồng": 61,
    "Nhập cảnh": 48,
  }, {
    date: '07/03/2012',
    "Tử vong": 43,
    "Cộng đồng": 67,
    "Nhập cảnh": 49,
  }, {
    date: '08/03/2012',
    "Tử vong": 51,
    "Cộng đồng": 72,
    "Nhập cảnh": 49,
  }, {
    date: '09/03/2012',
    "Tử vong": 47,
    "Cộng đồng": 46,
    "Nhập cảnh": 51,
  }, {
    date: '10/03/2012',
    "Tử vong": 37,
    "Cộng đồng": 46,
    "Nhập cảnh": 49,
  }, {
    date: '11/03/2012',
    "Tử vong": 42,
    "Cộng đồng": 56,
    "Nhập cảnh": 50,
  }, {
    date: '12/03/2012',
    "Tử vong": 48,
    "Cộng đồng": 61,
    "Nhập cảnh": 48,
  }, {
    date: '13/03/2012',
    "Tử vong": 52,
    "Cộng đồng": 68,
    "Nhập cảnh": 53,
  }, {
    date: '14/03/2012',
    "Tử vong": 60,
    "Cộng đồng": 71,
    "Nhập cảnh": 55,
  }, {
    date: '15/03/2012',
    "Tử vong": 47,
    "Cộng đồng": 72,
    "Nhập cảnh": 55,
  }, {
    date: '16/03/2012',
    "Tử vong": 44,
    "Cộng đồng": 72,
    "Nhập cảnh": 54,
  }, {
    date: '17/03/2012',
    "Tử vong": 48,
    "Cộng đồng": 71,
    "Nhập cảnh": 48,
  }, {
    date: '18/03/2012',
    "Tử vong": 48,
    "Cộng đồng": 71,
    "Nhập cảnh": 47,
  }, {
    date: '19/03/2012',
    "Tử vong": 53,
    "Cộng đồng": 73,
    "Nhập cảnh": 45,
  }, {
    date: '20/03/2012',
    "Tử vong": 57,
    "Cộng đồng": 63,
    "Nhập cảnh": 49,
  }, {
    date: '21/03/2012',
    "Tử vong": 57,
    "Cộng đồng": 60,
    "Nhập cảnh": 51,
  }, {
    date: '22/03/2012',
    "Tử vong": 57,
    "Cộng đồng": 62,
    "Nhập cảnh": 51,
  }, {
    date: '23/03/2012',
    "Tử vong": 61,
    "Cộng đồng": 61,
    "Nhập cảnh": 48,
  }, {
    date: '24/03/2012',
    "Tử vong": 55,
    "Cộng đồng": 62,
    "Nhập cảnh": 49,
  }, {
    date: '25/03/2012',
    "Tử vong": 48,
    "Cộng đồng": 64,
    "Nhập cảnh": 46,
  }, {
    date: '26/03/2012',
    "Tử vong": 49,
    "Cộng đồng": 66,
    "Nhập cảnh": 49,
  }, {
    date: '27/03/2012',
    "Tử vong": 39,
    "Cộng đồng": 65,
    "Nhập cảnh": 54,
  }, {
    date: '28/03/2012',
    "Tử vong": 49,
    "Cộng đồng": 69,
    "Nhập cảnh": 54,
  }, {
    date: '29/03/2012',
    "Tử vong": 56,
    "Cộng đồng": 69,
    "Nhập cảnh": 52,
  }, {
    date: '30/03/2012',
    "Tử vong": 46,
    "Cộng đồng": 73,
    "Nhập cảnh": 54,
  }, {
    date: '31/03/2012',
    "Tử vong": 42,
    "Cộng đồng": 73,
    "Nhập cảnh": 56,
  }, {
    date: '01/04/2012',
    "Tử vong": 45,
    "Cộng đồng": 75,
    "Nhập cảnh": 51,
  }, {
    date: '02/04/2012',
    "Tử vong": 48,
    "Cộng đồng": 75,
    "Nhập cảnh": 50,
  }, {
    date: '03/04/2012',
    "Tử vong": 51,
    "Cộng đồng": 77,
    "Nhập cảnh": 52,
  }, {
    date: '04/04/2012',
    "Tử vong": 61,
    "Cộng đồng": 67,
    "Nhập cảnh": 50,
  }, {
    date: '05/04/2012',
    "Tử vong": 50,
    "Cộng đồng": 71,
    "Nhập cảnh": 47,
  }, {
    date: '06/04/2012',
    "Tử vong": 48,
    "Cộng đồng": 70,
    "Nhập cảnh": 47,
  }, {
    date: '07/04/2012',
    "Tử vong": 51,
    "Cộng đồng": 73,
    "Nhập cảnh": 49,
  }, {
    date: '08/04/2012',
    "Tử vong": 55,
    "Cộng đồng": 71,
    "Nhập cảnh": 50,
  }, {
    date: '09/04/2012',
    "Tử vong": 58,
    "Cộng đồng": 70,
    "Nhập cảnh": 51,
  }, {
    date: '10/04/2012',
    "Tử vong": 55,
    "Cộng đồng": 69,
    "Nhập cảnh": 53,
  }, {
    date: '11/04/2012',
    "Tử vong": 49,
    "Cộng đồng": 69,
    "Nhập cảnh": 52,
  }, {
    date: '12/04/2012',
    "Tử vong": 51,
    "Cộng đồng": 74,
    "Nhập cảnh": 53,
  }, {
    date: '13/04/2012',
    "Tử vong": 53,
    "Cộng đồng": 73,
    "Nhập cảnh": 50,
  }, {
    date: '14/04/2012',
    "Tử vong": 55,
    "Cộng đồng": 76,
    "Nhập cảnh": 50,
  }, {
    date: '15/04/2012',
    "Tử vong": 62,
    "Cộng đồng": 74,
    "Nhập cảnh": 51,
  }, {
    date: '16/04/2012',
    "Tử vong": 62,
    "Cộng đồng": 63,
    "Nhập cảnh": 51,
  }, {
    date: '17/04/2012',
    "Tử vong": 69,
    "Cộng đồng": 67,
    "Nhập cảnh": 53,
  }, {
    date: '18/04/2012',
    "Tử vong": 59,
    "Cộng đồng": 65,
    "Nhập cảnh": 53,
  }, {
    date: '19/04/2012',
    "Tử vong": 54,
    "Cộng đồng": 67,
    "Nhập cảnh": 55,
  }, {
    date: '20/04/2012',
    "Tử vong": 56,
    "Cộng đồng": 68,
    "Nhập cảnh": 55,
  }, {
    date: '21/04/2012',
    "Tử vong": 58,
    "Cộng đồng": 65,
    "Nhập cảnh": 58,
  }, {
    date: '22/04/2012',
    "Tử vong": 52,
    "Cộng đồng": 65,
    "Nhập cảnh": 52,
  }, {
    date: '23/04/2012',
    "Tử vong": 51,
    "Cộng đồng": 70,
    "Nhập cảnh": 55,
  }, {
    date: '24/04/2012',
    "Tử vong": 49,
    "Cộng đồng": 67,
    "Nhập cảnh": 57,
  }, {
    date: '25/04/2012',
    "Tử vong": 52,
    "Cộng đồng": 75,
    "Nhập cảnh": 57,
  }, {
    date: '26/04/2012',
    "Tử vong": 50,
    "Cộng đồng": 77,
    "Nhập cảnh": 55,
  }, {
    date: '27/04/2012',
    "Tử vong": 51,
    "Cộng đồng": 77,
    "Nhập cảnh": 53,
  }, {
    date: '28/04/2012',
    "Tử vong": 47,
    "Cộng đồng": 77,
    "Nhập cảnh": 54,
  }, {
    date: '29/04/2012',
    "Tử vong": 54,
    "Cộng đồng": 77,
    "Nhập cảnh": 54,
  }, {
    date: '30/04/2012',
    "Tử vong": 51,
    "Cộng đồng": 77,
    "Nhập cảnh": 53,
  }, {
    date: '01/05/2012',
    "Tử vong": 57,
    "Cộng đồng": 77,
    "Nhập cảnh": 52,
  }, {
    date: '02/05/2012',
    "Tử vong": 53,
    "Cộng đồng": 77,
    "Nhập cảnh": 50,
  }, {
    date: '03/05/2012',
    "Tử vong": 53,
    "Cộng đồng": 79,
    "Nhập cảnh": 52,
  }, {
    date: '04/05/2012',
    "Tử vong": 57,
    "Cộng đồng": 80,
    "Nhập cảnh": 53,
  }, {
    date: '05/05/2012',
    "Tử vong": 57,
    "Cộng đồng": 82,
    "Nhập cảnh": 53,
  }, {
    date: '06/05/2012',
    "Tử vong": 56,
    "Cộng đồng": 79,
    "Nhập cảnh": 56,
  }, {
    date: '07/05/2012',
    "Tử vong": 54,
    "Cộng đồng": 79,
    "Nhập cảnh": 55,
  }, {
    date: '08/05/2012',
    "Tử vong": 57,
    "Cộng đồng": 70,
    "Nhập cảnh": 52,
  }, {
    date: '09/05/2012',
    "Tử vong": 59,
    "Cộng đồng": 69,
    "Nhập cảnh": 52,
  }, {
    date: '10/05/2012',
    "Tử vong": 61,
    "Cộng đồng": 71,
    "Nhập cảnh": 53,
  }, {
    date: '11/05/2012',
    "Tử vong": 59,
    "Cộng đồng": 69,
    "Nhập cảnh": 53,
  }, {
    date: '12/05/2012',
    "Tử vong": 64,
    "Cộng đồng": 72,
    "Nhập cảnh": 49,
  }, {
    date: '13/05/2012',
    "Tử vong": 65,
    "Cộng đồng": 72,
    "Nhập cảnh": 52,
  }, {
    date: '14/05/2012',
    "Tử vong": 64,
    "Cộng đồng": 72,
    "Nhập cảnh": 56,
  }, {
    date: '15/05/2012',
    "Tử vong": 62,
    "Cộng đồng": 67,
    "Nhập cảnh": 53,
  }, {
    date: '16/05/2012',
    "Tử vong": 63,
    "Cộng đồng": 69,
    "Nhập cảnh": 51,
  }, {
    date: '17/05/2012',
    "Tử vong": 64,
    "Cộng đồng": 72,
    "Nhập cảnh": 51,
  }, {
    date: '18/05/2012',
    "Tử vong": 61,
    "Cộng đồng": 73,
    "Nhập cảnh": 52,
  }, {
    date: '19/05/2012',
    "Tử vong": 62,
    "Cộng đồng": 77,
    "Nhập cảnh": 52,
  }, {
    date: '20/05/2012',
    "Tử vong": 66,
    "Cộng đồng": 75,
    "Nhập cảnh": 54,
  }, {
    date: '21/05/2012',
    "Tử vong": 62,
    "Cộng đồng": 76,
    "Nhập cảnh": 52,
  }, {
    date: '22/05/2012',
    "Tử vong": 63,
    "Cộng đồng": 78,
    "Nhập cảnh": 53,
  }, {
    date: '23/05/2012',
    "Tử vong": 66,
    "Cộng đồng": 77,
    "Nhập cảnh": 56,
  }, {
    date: '24/05/2012',
    "Tử vong": 64,
    "Cộng đồng": 80,
    "Nhập cảnh": 54,
  }, {
    date: '25/05/2012',
    "Tử vong": 65,
    "Cộng đồng": 81,
    "Nhập cảnh": 52,
  }, {
    date: '26/05/2012',
    "Tử vong": 69,
    "Cộng đồng": 82,
    "Nhập cảnh": 52,
  }, {
    date: '27/05/2012',
    "Tử vong": 71,
    "Cộng đồng": 80,
    "Nhập cảnh": 52,
  }, {
    date: '28/05/2012',
    "Tử vong": 74,
    "Cộng đồng": 80,
    "Nhập cảnh": 52,
  }, {
    date: '29/05/2012',
    "Tử vong": 75,
    "Cộng đồng": 82,
    "Nhập cảnh": 52,
  }, {
    date: '30/05/2012',
    "Tử vong": 72,
    "Cộng đồng": 81,
    "Nhập cảnh": 52,
  }, {
    date: '31/05/2012',
    "Tử vong": 72,
    "Cộng đồng": 82,
    "Nhập cảnh": 53,
  }, {
    date: '01/06/2012',
    "Tử vong": 67,
    "Cộng đồng": 77,
    "Nhập cảnh": 54,
  }, {
    date: '02/06/2012',
    "Tử vong": 68,
    "Cộng đồng": 81,
    "Nhập cảnh": 54,
  }, {
    date: '03/06/2012',
    "Tử vong": 67,
    "Cộng đồng": 82,
    "Nhập cảnh": 52,
  }, {
    date: '04/06/2012',
    "Tử vong": 61,
    "Cộng đồng": 81,
    "Nhập cảnh": 55,
  }, {
    date: '05/06/2012',
    "Tử vong": 58,
    "Cộng đồng": 83,
    "Nhập cảnh": 53,
  }, {
    date: '06/06/2012',
    "Tử vong": 61,
    "Cộng đồng": 83,
    "Nhập cảnh": 54,
  }, {
    date: '07/06/2012',
    "Tử vong": 66,
    "Cộng đồng": 82,
    "Nhập cảnh": 53,
  }, {
    date: '08/06/2012',
    "Tử vong": 68,
    "Cộng đồng": 77,
    "Nhập cảnh": 54,
  }, {
    date: '09/06/2012',
    "Tử vong": 72,
    "Cộng đồng": 77,
    "Nhập cảnh": 55,
  }, {
    date: '10/06/2012',
    "Tử vong": 72,
    "Cộng đồng": 82,
    "Nhập cảnh": 60,
  }, {
    date: '11/06/2012',
    "Tử vong": 69,
    "Cộng đồng": 86,
    "Nhập cảnh": 57,
  }, {
    date: '12/06/2012',
    "Tử vong": 66,
    "Cộng đồng": 85,
    "Nhập cảnh": 55,
  }, {
    date: '13/06/2012',
    "Tử vong": 66,
    "Cộng đồng": 76,
    "Nhập cảnh": 53,
  }, {
    date: '14/06/2012',
    "Tử vong": 67,
    "Cộng đồng": 84,
    "Nhập cảnh": 53,
  }, {
    date: '15/06/2012',
    "Tử vong": 68,
    "Cộng đồng": 84,
    "Nhập cảnh": 54,
  }, {
    date: '16/06/2012',
    "Tử vong": 67,
    "Cộng đồng": 83,
    "Nhập cảnh": 57,
  }, {
    date: '17/06/2012',
    "Tử vong": 64,
    "Cộng đồng": 82,
    "Nhập cảnh": 55,
  }, {
    date: '18/06/2012',
    "Tử vong": 61,
    "Cộng đồng": 82,
    "Nhập cảnh": 52,
  }, {
    date: '19/06/2012',
    "Tử vong": 66,
    "Cộng đồng": 82,
    "Nhập cảnh": 53,
  }, {
    date: '20/06/2012',
    "Tử vong": 77,
    "Cộng đồng": 81,
    "Nhập cảnh": 55,
  }, {
    date: '21/06/2012',
    "Tử vong": 88,
    "Cộng đồng": 80,
    "Nhập cảnh": 53,
  }, {
    date: '22/06/2012',
    "Tử vong": 82,
    "Cộng đồng": 81,
    "Nhập cảnh": 54,
  }, {
    date: '23/06/2012',
    "Tử vong": 77,
    "Cộng đồng": 83,
    "Nhập cảnh": 55,
  }, {
    date: '24/06/2012',
    "Tử vong": 75,
    "Cộng đồng": 85,
    "Nhập cảnh": 55,
  }, {
    date: '25/06/2012',
    "Tử vong": 70,
    "Cộng đồng": 87,
    "Nhập cảnh": 56,
  }, {
    date: '26/06/2012',
    "Tử vong": 65,
    "Cộng đồng": 88,
    "Nhập cảnh": 57,
  }, {
    date: '27/06/2012',
    "Tử vong": 73,
    "Cộng đồng": 89,
    "Nhập cảnh": 57,
  }, {
    date: '28/06/2012',
    "Tử vong": 77,
    "Cộng đồng": 86,
    "Nhập cảnh": 56,
  }, {
    date: '29/06/2012',
    "Tử vong": 79,
    "Cộng đồng": 85,
    "Nhập cảnh": 56,
  }, {
    date: '30/06/2012',
    "Tử vong": 84,
    "Cộng đồng": 81,
    "Nhập cảnh": 58,
  }, {
    date: '01/07/2012',
    "Tử vong": 81,
    "Cộng đồng": 78,
    "Nhập cảnh": 58,
  }, {
    date: '02/07/2012',
    "Tử vong": 82,
    "Cộng đồng": 83,
    "Nhập cảnh": 56,
  }, {
    date: '03/07/2012',
    "Tử vong": 80,
    "Cộng đồng": 83,
    "Nhập cảnh": 56,
  }, {
    date: '04/07/2012',
    "Tử vong": 77,
    "Cộng đồng": 84,
    "Nhập cảnh": 55,
  }, {
    date: '05/07/2012',
    "Tử vong": 86,
    "Cộng đồng": 84,
    "Nhập cảnh": 54,
  }, {
    date: '06/07/2012',
    "Tử vong": 79,
    "Cộng đồng": 84,
    "Nhập cảnh": 54,
  }, {
    date: '07/07/2012',
    "Tử vong": 83,
    "Cộng đồng": 86,
    "Nhập cảnh": 54,
  }, {
    date: '08/07/2012',
    "Tử vong": 81,
    "Cộng đồng": 84,
    "Nhập cảnh": 52,
  }, {
    date: '09/07/2012',
    "Tử vong": 77,
    "Cộng đồng": 83,
    "Nhập cảnh": 53,
  }, {
    date: '10/07/2012',
    "Tử vong": 76,
    "Cộng đồng": 77,
    "Nhập cảnh": 53,
  }, {
    date: '11/07/2012',
    "Tử vong": 76,
    "Cộng đồng": 77,
    "Nhập cảnh": 52,
  }, {
    date: '12/07/2012',
    "Tử vong": 75,
    "Cộng đồng": 80,
    "Nhập cảnh": 52,
  }, {
    date: '13/07/2012',
    "Tử vong": 77,
    "Cộng đồng": 81,
    "Nhập cảnh": 53,
  }, {
    date: '14/07/2012',
    "Tử vong": 79,
    "Cộng đồng": 80,
    "Nhập cảnh": 54,
  }, {
    date: '15/07/2012',
    "Tử vong": 78,
    "Cộng đồng": 81,
    "Nhập cảnh": 54,
  }, {
    date: '16/07/2012',
    "Tử vong": 79,
    "Cộng đồng": 77,
    "Nhập cảnh": 54,
  }, {
    date: '17/07/2012',
    "Tử vong": 83,
    "Cộng đồng": 80,
    "Nhập cảnh": 56,
  }, {
    date: '18/07/2012',
    "Tử vong": 84,
    "Cộng đồng": 81,
    "Nhập cảnh": 57,
  }, {
    date: '19/07/2012',
    "Tử vong": 75,
    "Cộng đồng": 80,
    "Nhập cảnh": 57,
  }, {
    date: '20/07/2012',
    "Tử vong": 68,
    "Cộng đồng": 83,
    "Nhập cảnh": 58,
  }, {
    date: '21/07/2012',
    "Tử vong": 68,
    "Cộng đồng": 85,
    "Nhập cảnh": 57,
  }, {
    date: '22/07/2012',
    "Tử vong": 72,
    "Cộng đồng": 83,
    "Nhập cảnh": 56,
  }, {
    date: '23/07/2012',
    "Tử vong": 75,
    "Cộng đồng": 84,
    "Nhập cảnh": 56,
  }, {
    date: '24/07/2012',
    "Tử vong": 82,
    "Cộng đồng": 83,
    "Nhập cảnh": 57,
  }, {
    date: '25/07/2012',
    "Tử vong": 78,
    "Cộng đồng": 84,
    "Nhập cảnh": 57,
  }, {
    date: '26/07/2012',
    "Tử vong": 77,
    "Cộng đồng": 84,
    "Nhập cảnh": 56,
  }, {
    date: '27/07/2012',
    "Tử vong": 79,
    "Cộng đồng": 84,
    "Nhập cảnh": 55,
  }, {
    date: '28/07/2012',
    "Tử vong": 77,
    "Cộng đồng": 83,
    "Nhập cảnh": 55,
  }, {
    date: '29/07/2012',
    "Tử vong": 72,
    "Cộng đồng": 85,
    "Nhập cảnh": 55,
  }, {
    date: '30/07/2012',
    "Tử vong": 72,
    "Cộng đồng": 84,
    "Nhập cảnh": 55,
  }, {
    date: '31/07/2012',
    "Tử vong": 73,
    "Cộng đồng": 86,
    "Nhập cảnh": 55,
  }, {
    date: '01/08/2012',
    "Tử vong": 75,
    "Cộng đồng": 86,
    "Nhập cảnh": 55,
  }, {
    date: '02/08/2012',
    "Tử vong": 77,
    "Cộng đồng": 85,
    "Nhập cảnh": 54,
  }, {
    date: '03/08/2012',
    "Tử vong": 79,
    "Cộng đồng": 85,
    "Nhập cảnh": 53,
  }, {
    date: '04/08/2012',
    "Tử vong": 79,
    "Cộng đồng": 86,
    "Nhập cảnh": 54,
  }, {
    date: '05/08/2012',
    "Tử vong": 81,
    "Cộng đồng": 84,
    "Nhập cảnh": 57,
  }, {
    date: '06/08/2012',
    "Tử vong": 80,
    "Cộng đồng": 81,
    "Nhập cảnh": 58,
  }, {
    date: '07/08/2012',
    "Tử vong": 75,
    "Cộng đồng": 86,
    "Nhập cảnh": 58,
  }, {
    date: '08/08/2012',
    "Tử vong": 77,
    "Cộng đồng": 86,
    "Nhập cảnh": 57,
  }, {
    date: '09/08/2012',
    "Tử vong": 78,
    "Cộng đồng": 86,
    "Nhập cảnh": 55,
  }, {
    date: '10/08/2012',
    "Tử vong": 77,
    "Cộng đồng": 88,
    "Nhập cảnh": 54,
  }, {
    date: '11/08/2012',
    "Tử vong": 78,
    "Cộng đồng": 85,
    "Nhập cảnh": 53,
  }, {
    date: '12/08/2012',
    "Tử vong": 78,
    "Cộng đồng": 87,
    "Nhập cảnh": 52,
  }, {
    date: '13/08/2012',
    "Tử vong": 78,
    "Cộng đồng": 88,
    "Nhập cảnh": 53,
  }, {
    date: '14/08/2012',
    "Tử vong": 76,
    "Cộng đồng": 88,
    "Nhập cảnh": 53,
  }, {
    date: '15/08/2012',
    "Tử vong": 76,
    "Cộng đồng": 87,
    "Nhập cảnh": 56,
  }, {
    date: '16/08/2012',
    "Tử vong": 75,
    "Cộng đồng": 86,
    "Nhập cảnh": 57,
  }, {
    date: '17/08/2012',
    "Tử vong": 77,
    "Cộng đồng": 86,
    "Nhập cảnh": 55,
  }, {
    date: '18/08/2012',
    "Tử vong": 72,
    "Cộng đồng": 84,
    "Nhập cảnh": 56,
  }, {
    date: '19/08/2012',
    "Tử vong": 70,
    "Cộng đồng": 76,
    "Nhập cảnh": 54,
  }, {
    date: '20/08/2012',
    "Tử vong": 71,
    "Cộng đồng": 80,
    "Nhập cảnh": 53,
  }, {
    date: '21/08/2012',
    "Tử vong": 73,
    "Cộng đồng": 80,
    "Nhập cảnh": 53,
  }, {
    date: '22/08/2012',
    "Tử vong": 74,
    "Cộng đồng": 78,
    "Nhập cảnh": 54,
  }, {
    date: '23/08/2012',
    "Tử vong": 74,
    "Cộng đồng": 79,
    "Nhập cảnh": 55,
  }, {
    date: '24/08/2012',
    "Tử vong": 76,
    "Cộng đồng": 81,
    "Nhập cảnh": 54,
  }, {
    date: '25/08/2012',
    "Tử vong": 76,
    "Cộng đồng": 84,
    "Nhập cảnh": 53,
  }, {
    date: '26/08/2012',
    "Tử vong": 73,
    "Cộng đồng": 83,
    "Nhập cảnh": 56,
  }, {
    date: '27/08/2012',
    "Tử vong": 74,
    "Cộng đồng": 82,
    "Nhập cảnh": 58,
  }, {
    date: '28/08/2012',
    "Tử vong": 79,
    "Cộng đồng": 84,
    "Nhập cảnh": 58,
  }, {
    date: '29/08/2012',
    "Tử vong": 74,
    "Cộng đồng": 85,
    "Nhập cảnh": 57,
  }, {
    date: '30/08/2012',
    "Tử vong": 73,
    "Cộng đồng": 87,
    "Nhập cảnh": 55,
  }, {
    date: '31/08/2012',
    "Tử vong": 77,
    "Cộng đồng": 82,
    "Nhập cảnh": 55,
  }, {
    date: '01/09/2012',
    "Tử vong": 80,
    "Cộng đồng": 84,
    "Nhập cảnh": 55,
  }, {
    date: '02/09/2012',
    "Tử vong": 75,
    "Cộng đồng": 83,
    "Nhập cảnh": 53,
  }, {
    date: '03/09/2012',
    "Tử vong": 73,
    "Cộng đồng": 85,
    "Nhập cảnh": 53,
  }, {
    date: '04/09/2012',
    "Tử vong": 73,
    "Cộng đồng": 86,
    "Nhập cảnh": 52,
  }, {
    date: '05/09/2012',
    "Tử vong": 77,
    "Cộng đồng": 85,
    "Nhập cảnh": 54,
  }, {
    date: '06/09/2012',
    "Tử vong": 74,
    "Cộng đồng": 85,
    "Nhập cảnh": 56,
  }, {
    date: '07/09/2012',
    "Tử vong": 76,
    "Cộng đồng": 85,
    "Nhập cảnh": 56,
  }, {
    date: '08/09/2012',
    "Tử vong": 77,
    "Cộng đồng": 81,
    "Nhập cảnh": 56,
  }, {
    date: '09/09/2012',
    "Tử vong": 69,
    "Cộng đồng": 74,
    "Nhập cảnh": 56,
  }, {
    date: '10/09/2012',
    "Tử vong": 67,
    "Cộng đồng": 71,
    "Nhập cảnh": 55,
  }, {
    date: '11/09/2012',
    "Tử vong": 64,
    "Cộng đồng": 75,
    "Nhập cảnh": 56,
  }, {
    date: '12/09/2012',
    "Tử vong": 68,
    "Cộng đồng": 82,
    "Nhập cảnh": 55,
  }, {
    date: '13/09/2012',
    "Tử vong": 69,
    "Cộng đồng": 80,
    "Nhập cảnh": 54,
  }, {
    date: '14/09/2012',
    "Tử vong": 70,
    "Cộng đồng": 70,
    "Nhập cảnh": 55,
  }, {
    date: '15/09/2012',
    "Tử vong": 69,
    "Cộng đồng": 71,
    "Nhập cảnh": 54,
  }, {
    date: '16/09/2012',
    "Tử vong": 66,
    "Cộng đồng": 70,
    "Nhập cảnh": 52,
  }, {
    date: '17/09/2012',
    "Tử vong": 67,
    "Cộng đồng": 72,
    "Nhập cảnh": 54,
  }, {
    date: '18/09/2012',
    "Tử vong": 72,
    "Cộng đồng": 73,
    "Nhập cảnh": 54,
  }, {
    date: '19/09/2012',
    "Tử vong": 67,
    "Cộng đồng": 72,
    "Nhập cảnh": 56,
  }, {
    date: '20/09/2012',
    "Tử vong": 62,
    "Cộng đồng": 71,
    "Nhập cảnh": 55,
  }, {
    date: '21/09/2012',
    "Tử vong": 64,
    "Cộng đồng": 72,
    "Nhập cảnh": 55,
  }, {
    date: '22/09/2012',
    "Tử vong": 65,
    "Cộng đồng": 73,
    "Nhập cảnh": 55,
  }, {
    date: '23/09/2012',
    "Tử vong": 65,
    "Cộng đồng": 75,
    "Nhập cảnh": 52,
  }, {
    date: '24/09/2012',
    "Tử vong": 60,
    "Cộng đồng": 78,
    "Nhập cảnh": 54,
  }, {
    date: '25/09/2012',
    "Tử vong": 63,
    "Cộng đồng": 78,
    "Nhập cảnh": 53,
  }, {
    date: '26/09/2012',
    "Tử vong": 68,
    "Cộng đồng": 79,
    "Nhập cảnh": 53,
  }, {
    date: '27/09/2012',
    "Tử vong": 69,
    "Cộng đồng": 76,
    "Nhập cảnh": 52,
  }, {
    date: '28/09/2012',
    "Tử vong": 68,
    "Cộng đồng": 77,
    "Nhập cảnh": 52,
  }, {
    date: '29/09/2012',
    "Tử vong": 62,
    "Cộng đồng": 75,
    "Nhập cảnh": 53,
  }, {
    date: '30/09/2012',
    "Tử vong": 62,
    "Cộng đồng": 71,
    "Nhập cảnh": 55,
  }
];

module.exports = cityTemperature;
