import Title from '@components/common/Title';
import dayjs from 'dayjs';
import useReadEndBooks from './hooks/useReadEndBooks';

export default function Calandar() {
  const currentDate = dayjs();

  console.log(currentDate.add(1, 'M').format('YYYY-MM-DD'));
  console.log(dayjs('2023-04-17T21:25:00').format('MM'));

  const { data } = useReadEndBooks({ year: 2023, month: 4 });

  console.log(data);

  return (
    <div>
      <Title>독서 달력</Title>
    </div>
  );
}
