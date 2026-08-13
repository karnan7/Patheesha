/**
 * Patheesha is dark-first. There is no light palette yet, but every colour is referenced through a
 * semantic token rather than a literal, so adding one later means filling in a second object here
 * and touching nothing else.
 *
 * The money colours carry meaning and must stay consistent everywhere:
 *   income   money in, savings rate, budgets in a healthy state
 *   text     money out, headline figures
 *   warning  a budget between 80% and 100%
 *   danger   a budget over its limit, destructive actions
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  dark: {
    /** App background. */
    background: '#0B0D0C',
    /** Cards and raised surfaces. */
    backgroundElement: '#161A18',
    /** Pressed or selected surfaces, and unfilled progress tracks. */
    backgroundSelected: '#222825',
    /** Hairline borders. */
    border: '#2A312D',
    /** Primary text and expense amounts. */
    text: '#FFFFFF',
    /** Labels, metadata, secondary rows. */
    textSecondary: '#8A928C',
    /** Income, positive balances, healthy budgets. */
    income: '#C6F24E',
    /** Text placed on top of an `income`-filled surface. */
    onIncome: '#0B0D0C',
    /** A budget nearing its limit. */
    warning: '#F5A524',
    /** A budget over its limit, and destructive actions. */
    danger: '#F04438',
  },
} as const;

export type ThemeColor = keyof typeof Colors.dark;

/**
 * Donut segment colours, assigned to categories at seed time. Ordered so that adjacent categories
 * stay distinguishable, since the donut draws them largest-first rather than in seed order.
 */
export const CategoryPalette = {
  lime: '#C6F24E',
  teal: '#4ED9C0',
  sky: '#54B8F5',
  violet: '#A78BFA',
  pink: '#F472B6',
  coral: '#FB7185',
  amber: '#F5A524',
  sand: '#D6C08A',
  slate: '#8A928C',
} as const;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  small: 8,
  medium: 12,
  large: 20,
  pill: 999,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
