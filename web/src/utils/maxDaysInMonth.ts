import dayjs from 'dayjs';

export function maxDaysInMonth() {
  return dayjs().daysInMonth();
}
