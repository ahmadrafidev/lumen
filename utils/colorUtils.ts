/**
 * Calculate relative luminance of a color
 * @param color - The hex color code (e.g., "#ffffff").
 * @returns Luminance value as a number.
 */
export const calculateLuminance = (color: string): number => {
  const isValidHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
  const sanitizedColor = isValidHex ? color : "#000000";

  if (!isValidHex) {
    console.warn(`Invalid hex color: "${color}". Falling back to default: "#000000".`);
  }

  const rgb = sanitizedColor
    .replace("#", "")
    .match(/.{2}/g)
    ?.map((hex) => parseInt(hex, 16) / 255);

  if (!rgb) return 0;

  const [r, g, b] = rgb.map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/**
 * Calculate contrast ratio between two colors
 * @param foreground - The hex color code of the foreground (e.g., "#000000")
 * @param background - The hex color code of the background (e.g., "#ffffff")
 * @returns Contrast ratio as a number
 */
export const calculateContrastRatio = (
  foreground: string,
  background: string
): number => {
  const lum1 = calculateLuminance(foreground);
  const lum2 = calculateLuminance(background);

  return lum1 > lum2
    ? (lum1 + 0.05) / (lum2 + 0.05)
    : (lum2 + 0.05) / (lum1 + 0.05);
};
