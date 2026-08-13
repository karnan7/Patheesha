import { Colors } from '@/constants/theme';

/**
 * Patheesha is dark-first, so this returns a fixed palette regardless of the system colour scheme.
 * When a light palette is added, switch on `useColorScheme()` here — no screen should need to change.
 */
export function useTheme() {
  return Colors.dark;
}
