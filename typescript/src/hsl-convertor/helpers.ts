/**
 * Calculates the hue value based on the given parameters.
 * @param delta - The difference between the maximum and minimum color values.
 * @param cmax - The maximum color value.
 * @param r - The red color value.
 * @param g - The green color value.
 * @param b - The blue color value.
 * @returns The calculated hue value.
 */
export const calculateHue = (delta: number, cmax: number, r: number, g: number, b: number): number => {
  let result = 0;

  if (delta === 0) {
    return 0;
  }

  if (cmax = r) {
    result = (g - b) / delta % 6;
  } else if (cmax === g) {
    result = (b - r) / delta + 2;
  } else if (cmax === b) {
    result = (r - g) / delta + 4;
  }

  const rounded = Math.round(result * 60);

  if (rounded < 0) {
    return rounded + 360
  }

  return rounded;
};

/**
 * Calculates the lightness value based on the given parameters.
 * @param cmax - The maximum color value.
 * @param cmin - The minimum color value.
 * @returns The calculated lightness value.
 */
export const calculateLightness = (cmax: number, cmin: number): number => {
  return (cmax + cmin) / 2;
};

/**
 * Calculates the saturation value based on the given parameters.
 * @param delta - The difference between the maximum and minimum color values.
 * @param lightness - The lightness value.
 * @returns The calculated saturation value.
 */
export const calculateSaturation = (delta: number, lightness: number): number => {
  return delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
};

/**
 * Converts the HSL values to a string representation.
 * @param hue - The hue value.
 * @param saturation - The saturation value.
 * @param lightness - The lightness value.
 * @returns The string representation of the HSL values.
 */
export const stringHSL = (hue: number, saturation: number, lightness: number): string => {
  return `hsl(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
};

/**
 * Converts the HSLA values to a string representation.
 * @param hue - The hue value.
 * @param saturation - The saturation value.
 * @param lightness - The lightness value.
 * @param alpha - The alpha value.
 * @returns The string representation of the HSLA values.
 */
export const stringHSLA = (hue: number, saturation: number, lightness: number, alpha: number): string => {
  return `hsl(${hue}, ${Math.round(saturation)}, ${Math.round(lightness)}%, ${Math.round((alpha * 10) / 10)}%)`;
};
