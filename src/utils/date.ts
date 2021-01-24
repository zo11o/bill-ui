import dayjs from 'dayjs';

export type DayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const DAY_MAP = {
  0: '星期日',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
};

dayjs.locale('zh-cn');

export default dayjs;
