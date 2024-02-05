import { calculateHue, calculateLightness, calculateSaturation, stringHSL, stringHSLA } from "./helpers";

const hslConvertor = (color: ColorTokenValue) => {
  const { r: _r, g: _g, b: _b, a: _a } = color;

  const r = _r / 255;
  const g = _g / 255;
  const b = _b / 255;
  const a = _a / 255;

  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;

  const hue = calculateHue(delta, cmax, r, g, b);
  const _lightness = calculateLightness(cmax, cmin);
  const _saturation = calculateSaturation(delta, _lightness);

  const lightness = +(_lightness * 100).toFixed(1);
  const saturation = +(_saturation * 100).toFixed(1);

  return a === 1 ? stringHSL(hue, saturation, lightness) : stringHSLA(hue, saturation, lightness, a);
};

export default hslConvertor;
