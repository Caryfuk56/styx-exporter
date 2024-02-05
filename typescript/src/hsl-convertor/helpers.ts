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

export const calculateLightness = (cmax: number, cmin: number): number => {
  return (cmax + cmin) / 2;
};

export const calculateSaturation = (delta: number, lightness: number): number => {
  return delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
};

export const stringHSL = (hue: number, saturation: number, lightness: number): string => {
  return `hsl(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
};

export const stringHSLA = (hue: number, saturation: number, lightness: number, alpha: number): string => {
  return `hsl(${hue}, ${Math.round(saturation)}, ${Math.round(lightness)}%, ${Math.round((alpha * 10) / 10)}%)`;
};
