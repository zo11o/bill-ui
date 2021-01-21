import Mock from 'mockjs';

const data = Mock.mock({
  'data|10-50': [
    {
      'id|+1': Mock.Random.natural(1, 9999),
      'name|+1': Mock.Random.string('lower', 5),
      'value|1-2.01': '23.55',
      'icon|1-4': 'house',
    },
  ],
  msg: 'ok',
  code: '200',
});

export default data;
