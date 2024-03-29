import { version } from "../../exporter.json";

export const currentExporterVersion = version;

export const brandNames = {
  vigo: "01 - VIGo",
  cpp: "02 - CPP",
  koop: "03 - Koop",
  knz: "04 - KNZ",
  sus: "05 - SUS",
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
