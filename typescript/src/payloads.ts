import { version } from "../../exporter.json";

export const currentExporterVersion = version;

export const brandNames = {
  cppDark: "CPP Dark",
  cpp: "CPP Light",
  koopDark: "Koop Dark",
  koop: "Koop Light",
  vigo: "VIGo",
};

export const behavior = {
  colorTokenPrefix: "color",
  borderTokenPrefix: "border",
  gradientTokenPrefix: "gradient",
  measureTokenPrefix: "measure",
  shadowTokenPrefix: "shadow",
  typographyTokenPrefix: "typography",
};

export const stylexCategories = [
  "core",
  "semantic",
  "component"
] as const;
