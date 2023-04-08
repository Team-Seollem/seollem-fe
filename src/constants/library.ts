export const BOOKSTATUS = {
  YET: { typeValue: 'YET', typeText: '읽고 싶은 책' },
  ING: { typeValue: 'ING', typeText: '읽고 있는 책' },
  DONE: { typeValue: 'DONE', typeText: '다 읽은 책' },
} as const;

export const bookStatusList = Object.values(BOOKSTATUS);
