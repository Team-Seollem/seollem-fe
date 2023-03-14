import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const getLatestUpdateDate = (createdAt: string, updatedAt: string) => {
  const timeZone = dayjs.tz.guess();
  const formattedCreatedAt = dayjs
    .utc(createdAt)
    .tz(timeZone)
    .format('YYYY.MM.DD A HH:mm');
  const formattedUpdatedAt = dayjs
    .utc(updatedAt)
    .tz(timeZone)
    .format('YYYY.MM.DD A HH:mm');

  return !dayjs(formattedUpdatedAt).isSame(dayjs(formattedCreatedAt))
    ? formattedUpdatedAt
    : formattedCreatedAt;
};
