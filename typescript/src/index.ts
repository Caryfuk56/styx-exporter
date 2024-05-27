import {
  currentDate,
  getBrandId,
  exportedFileName,
  groupNameComment,
  filterTokens,
  printOutput,
  stylexGroupName,
  joinArrayBySlash,
  gradientAngle,
  shadowTokenValue,
  tokenNameWithCategoryFixDoubles,
  stringifyOutput,
  nameFromOrigin,
} from "./helpers";
import hslConvertor from "./hsl-convertor";
import { behavior, brandNames, currentExporterVersion, stylexCategories } from "./payloads";

// Functions registration
Pulsar.registerFunction("currentDate", currentDate);
Pulsar.registerFunction("getBrandId", getBrandId);
Pulsar.registerFunction("exportedFileName", exportedFileName);
Pulsar.registerFunction("hslConvertor", hslConvertor);
Pulsar.registerFunction("groupNameComment", groupNameComment);
Pulsar.registerFunction("filterTokens", filterTokens);
Pulsar.registerFunction("printOutput", printOutput);
Pulsar.registerFunction("stylexGroupName", stylexGroupName);
Pulsar.registerFunction("joinArrayBySlash", joinArrayBySlash);
Pulsar.registerFunction("gradientAngle", gradientAngle);
Pulsar.registerFunction("shadowTokenValue", shadowTokenValue);
Pulsar.registerFunction("tokenNameWithCategoryFixDoubles", tokenNameWithCategoryFixDoubles)
Pulsar.registerFunction("stringifyOutput", stringifyOutput)
Pulsar.registerFunction("nameFromOrigin", nameFromOrigin)

// Payloads
Pulsar.registerPayload("currentExporterVersion", currentExporterVersion);
Pulsar.registerPayload("brandNames", brandNames);
Pulsar.registerPayload("behavior", behavior);
Pulsar.registerPayload("stylexCategories", stylexCategories);
