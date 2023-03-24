export const MEMO_BACKGROUND = {
  WHITE: {
    value: 'WHITE',
    btnImageUrl: new URL('../assets/memoBgBtn/btn-white.png', import.meta.url)
      .href,
    imageUrl: new URL('../assets/memoBg/white.png', import.meta.url).href,
    color: '#222',
  },
  AURORA: {
    value: 'AURORA',
    btnImageUrl: new URL('../assets/memoBgBtn/btn-aurora.png', import.meta.url)
      .href,
    imageUrl: new URL('../assets/memoBg/aurora.png', import.meta.url),
    color: '#f9f9f9',
  },
  BLUE: {
    value: 'BLUE',
    btnImageUrl: new URL(
      '../assets/memoBgBtn/btn-blugradient.png',
      import.meta.url
    ).href,
    imageUrl: new URL('../assets/memoBg/blugradient.png', import.meta.url).href,
    color: '#f9f9f9',
  },
  PINK: {
    value: 'PINK',
    btnImageUrl: new URL('../assets/memoBgBtn/btn-pink.png', import.meta.url)
      .href,
    imageUrl: new URL('../assets/memoBg/pink.png', import.meta.url).href,
    color: '#222',
  },
  SKY: {
    value: 'SKY',
    btnImageUrl: new URL('../assets/memoBgBtn/btn-sky.png', import.meta.url)
      .href,
    imageUrl: new URL('../assets/memoBg/sky.png', import.meta.url).href,
    color: '#222',
  },
  STAR: {
    value: 'STAR',
    btnImageUrl: new URL('../assets/memoBgBtn/btn-star5.png', import.meta.url)
      .href,
    imageUrl: new URL('../assets/memoBg/star5.png', import.meta.url).href,
    color: '#f9f9f9',
  },
} as const;

export type BgType =
  typeof MEMO_BACKGROUND[keyof typeof MEMO_BACKGROUND]['value'];
