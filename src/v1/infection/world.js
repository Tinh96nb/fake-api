const eu = {
  id: 'EU',
  date: [
    '2020-01-22',
    '2020-01-23',
    '2020-01-24',
    '2020-01-25',
    '2020-01-26',
    '2020-01-27',
    '2020-01-28',
    '2020-01-29',
    '2020-01-30',
  ],
  values: [
    { id: '', name: 'Hoa Kỳ', values: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: '', name: 'Tây Ban Nha', values: [2, 0, 0, 0, 0, 0, 0, 0] },
    { id: '', name: 'Italia', values: [0, 0, 0, 0, 0, 0, 0, 1] },
    { id: '', name: 'Pháp', values: [1, 2, 0, 1, 1, 2, 0, 3] },
    { id: '', name: 'Đức', values: [1, 2, 2, 1, 0, 6, 0, 0] },
    { id: '', name: 'Anh', values: [0, 0, 0, 0, 1, 0, 0, 0] },
    { id: '', name: 'Nga', values: [0, 0, 0, 0, 0, 0, 0, 0] },
  ],
  timestamp: +new Date(),
};
const asian = {
  id: 'ASIAN',
  date: [
    '2020-01-22',
    '2020-01-23',
    '2020-01-24',
    '2020-01-25',
    '2020-01-26',
    '2020-01-27',
    '2020-01-28',
    '2020-01-29',
    '2020-01-30',
  ],
  values: [
    { id: '', name: 'Brunei', values: [0, 1, 0, 3, 0, 0, 0, 0] },
    { id: '', name: 'Vietnam', values: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: '', name: 'Malaysia', values: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: '', name: 'Philippines ', values: [0, 2, 1, 0, 0, 1, 1, 0] },
    { id: '', name: 'Singapore', values: [0, 0, 0, 0, 1, 3, 0, 0] },
    { id: '', name: 'Thailand', values: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: '', name: 'Cambodia', values: [0, 0, 0, 0, 0, 0, 0, 0] },
    { id: '', name: 'Timor-Leste', values: [0, 0, 0, 0, 0, 0, 0, 0] },
  ],
  timestamp: +new Date(),
};
const asia = {
  id: 'ASIA',
  date: [
    '2020-01-22',
    '2020-01-23',
    '2020-01-24',
    '2020-01-25',
    '2020-01-26',
    '2020-01-27',
    '2020-01-28',
    '2020-01-29',
    '2020-01-30',
  ],
  values: [
    {
      id: '',
      name: 'Trung Quốc',
      values: [95, 277, 486, 669, 802, 2632, 578, 2054],
    },
    { id: '', name: 'Nhật Bản', values: [0, 0, 0, 2, 0, 3, 0, 4] },
    { id: '', name: 'Hàn Quốc', values: [0, 1, 0, 1, 1, 0, 0, 0] },
  ],
  timestamp: +new Date(),
};

module.exports = { eu, asian, asia, timestamp: +new Date() };
