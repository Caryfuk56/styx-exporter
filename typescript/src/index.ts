import {
  currentDate,
  getBrandId,
  exportedFileName,
  variableName,
  groupNameComment,
  stylexTokenName,
  filterTokens,
  printOutput,
  tokenNameByOriginName,
  stylexGroupName,
  toLowerCase,
  joinArrayBySlash,
  gradientAngle,
  shadowTokenValue,
  tokenNameWithCategory,
} from "./helpers";
import hslConvertor from "./hsl-convertor";
import { behavior, brandNames, currentExporterVersion, stylexCategories } from "./payloads";

// Functions registration
Pulsar.registerFunction("currentDate", currentDate);
Pulsar.registerFunction("getBrandId", getBrandId);
Pulsar.registerFunction("exportedFileName", exportedFileName);
Pulsar.registerFunction("variableName", variableName);
Pulsar.registerFunction("hslConvertor", hslConvertor);
Pulsar.registerFunction("groupNameComment", groupNameComment);
Pulsar.registerFunction("stylexTokenName", stylexTokenName);
Pulsar.registerFunction("filterTokens", filterTokens);
Pulsar.registerFunction("printOutput", printOutput);
Pulsar.registerFunction("tokenNameByOriginName", tokenNameByOriginName);
Pulsar.registerFunction("stylexGroupName", stylexGroupName);
Pulsar.registerFunction("toLowerCase", toLowerCase);
Pulsar.registerFunction("joinArrayBySlash", joinArrayBySlash);
Pulsar.registerFunction("gradientAngle", gradientAngle);
Pulsar.registerFunction("shadowTokenValue", shadowTokenValue);
Pulsar.registerFunction("tokenNameWithCategory", tokenNameWithCategory);

// Payloads
Pulsar.registerPayload("currentExporterVersion", currentExporterVersion);
Pulsar.registerPayload("brandNames", brandNames);
Pulsar.registerPayload("behavior", behavior);
Pulsar.registerPayload("stylexCategories", stylexCategories);
