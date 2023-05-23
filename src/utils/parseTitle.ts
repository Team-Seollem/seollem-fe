export const parseTitle = (titleData: string) => {
  const [title, subTitle = ''] = titleData.split('-');
  return {
    title: title.trim(),
    subTitle: subTitle.trim(),
  };
};
