import Mock from 'mockjs';

const data = Mock.mock({
  'data|10-50': [
    {
      'id|+1': Mock.Random.natural(1, 9999),
      'name|+1': '@cname',
      value: '@float(-99,999,1,2)',
      icon: '@word(3, 6)',
    },
  ],
  msg: 'ok',
  code: '200',
});

export default data;
