import { HexColor, HexCommonColor } from '@/model';

interface ColorPalette {
  fifty: string;
  hundred: string;
  twoHundred: string;
  threeHundred: string;
  fourHundred: string;
  fiveHundred: string;
  sixHundred: string;
  sevenHundred: string;
  eightHundred: string;
  nineHundred: string;
}

export const createColorPalette = (color: HexColor): ColorPalette => {
  switch (color) {
    case HexCommonColor.default:
      return {
        fifty: '#eaf3f3',
        hundred: '#bcd9db',
        twoHundred: '#9cc7ca',
        threeHundred: '#6faeb1',
        fourHundred: '#539ea2',
        fiveHundred: '#28868b',
        sixHundred: '#247a7e',
        sevenHundred: '#1c5f63',
        eightHundred: '#164a4c',
        nineHundred: '#11383a',
      };
    case HexCommonColor.red:
      return {
        fifty: '#ffe8eb',
        hundred: '#feb8c2',
        twoHundred: '#fe96a4',
        threeHundred: '#fe667a',
        fourHundred: '#fd4961',
        fiveHundred: '#fd1b39',
        sixHundred: '#e61934',
        sevenHundred: '#b41328',
        eightHundred: '#8b0f1f',
        nineHundred: '#6a0b18',
      };
    case HexCommonColor.green:
      return {
        fifty: '#e9f9ef',
        hundred: '#baeccd',
        twoHundred: '#98e3b4',
        threeHundred: '#6ad692',
        fourHundred: '#4dce7d',
        fiveHundred: '#20c25d',
        sixHundred: '#1db155',
        sevenHundred: '#178a42',
        eightHundred: '#126b33',
        nineHundred: '#0d5127',
      };
    case HexCommonColor.orange:
      return {
        fifty: '#fcefeb',
        hundred: '#f6cdc0',
        twoHundred: '#f1b5a2',
        threeHundred: '#eb9477',
        fourHundred: '#e77f5d',
        fiveHundred: '#e15f34',
        sixHundred: '#cd562f',
        sevenHundred: '#a04325',
        eightHundred: '#7c341d',
        nineHundred: '#5f2816',
      };
    case HexCommonColor.yellow:
      return {
        fifty: '#fefae8',
        hundred: '#fcf0b9',
        twoHundred: '#fae997',
        threeHundred: '#f8df67',
        fourHundred: '#f6d949',
        fiveHundred: '#f4cf1c',
        sixHundred: '#debc19',
        sevenHundred: '#ad9314',
        eightHundred: '#86720f',
        nineHundred: '#66570c',
      };
    case HexCommonColor.dark:
      return {
        fifty: '#e9eaeb',
        hundred: '#b9bfc1',
        twoHundred: '#989fa3',
        threeHundred: '#68747a',
        fourHundred: '#4b5960',
        fiveHundred: '#1e2f38',
        sixHundred: '#1b2b33',
        sevenHundred: '#152128',
        eightHundred: '#111a1f',
        nineHundred: '#0d1418',
      };
    default:
      return {
        fifty: '#eaf3f3',
        hundred: '#bcd9db',
        twoHundred: '#9cc7ca',
        threeHundred: '#6faeb1',
        fourHundred: '#539ea2',
        fiveHundred: '#28868b',
        sixHundred: '#247a7e',
        sevenHundred: '#1c5f63',
        eightHundred: '#164a4c',
        nineHundred: '#11383a',
      };
  }
};
