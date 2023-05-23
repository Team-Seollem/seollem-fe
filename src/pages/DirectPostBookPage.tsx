import DirectPostBook from '@components/DirectPostBook';

export default function DirectPostBookPage() {
  const imgUrl = new URL('/basicBookCover.png', import.meta.url).href;
  const directBookInfoData = {
    title: '',
    author: '',
    itemPage: 0,
    publisher: '',
    cover: imgUrl,
  };
  return <DirectPostBook directBookInfoData={directBookInfoData} />;
}
