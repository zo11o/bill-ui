import dayjs from 'dayjs';

export type DayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const DAY_MAP = {
  0: '星期一',
  1: '星期二',
  2: '星期三',
  3: '星期四',
  4: '星期五',
  5: '星期六',
  6: '星期日',
};

dayjs.locale('zh-cn');

export default dayjs;
