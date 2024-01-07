export interface SpritesMap {
  shared:
    | 'arrow'
    | 'cap'
    | 'check'
    | 'cross'
    | 'crown'
    | 'delete'
    | 'eye-closed'
    | 'eye'
    | 'image'
    | 'lightning'
    | 'logo-colored'
    | 'logo'
    | 'no-image'
    | 'updated'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  shared: {
    filePath: 'shared.svg',
    items: {
      'arrow': {
        viewBox: '0 0 21 12',
        width: 21,
        height: 12,
      },
      'cap': {
        viewBox: '0 0 69 70',
        width: 69,
        height: 70,
      },
      'check': {
        viewBox: '0 0 14 12',
        width: 14,
        height: 12,
      },
      'cross': {
        viewBox: '0 0 17 17',
        width: 17,
        height: 17,
      },
      'crown': {
        viewBox: '0 0 70 62',
        width: 70,
        height: 62,
      },
      'delete': {
        viewBox: '0 0 384 470',
        width: 384,
        height: 470,
      },
      'eye-closed': {
        viewBox: '0 0 20 16',
        width: 20,
        height: 16,
      },
      'eye': {
        viewBox: '0 0 20 14',
        width: 20,
        height: 14,
      },
      'image': {
        viewBox: '0 0 512 512',
        width: 512,
        height: 512,
      },
      'lightning': {
        viewBox: '0 0 60 70',
        width: 60,
        height: 70,
      },
      'logo-colored': {
        viewBox: '0 0 64 50',
        width: 64,
        height: 50,
      },
      'logo': {
        viewBox: '0 0 501 391',
        width: 501,
        height: 391,
      },
      'no-image': {
        viewBox: '0 0 450 450',
        width: 450,
        height: 450,
      },
      'updated': {
        viewBox: '0 0 512 434',
        width: 512,
        height: 434,
      },
    },
  },
}
