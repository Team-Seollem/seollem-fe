export const MEMO_TYPES = {
  BOOK_CONTENT: { typeValue: 'BOOK_CONTENT', typeText: '책 속 문장' },
  SUMMARY: { typeValue: 'SUMMARY', typeText: '책 내용 요약' },
  THOUGHT: { typeValue: 'THOUGHT', typeText: '나만의 생각' },
  QUESTION: { typeValue: 'QUESTION', typeText: '나만의 질문' },
} as const;

export const memoTypeList = Object.values(MEMO_TYPES);
