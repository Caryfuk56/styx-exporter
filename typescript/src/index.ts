import {
  currentDate,
  getBrandId,
  exportedFileName,
  variableName,
  groupNameComment,
  stylexTokenName,
} from "./helpers";
import hslConvertor from "./hsl-convertor";
import { behavior, brandNames, currentExporterVersion } from "./payloads";

// Functions registration
Pulsar.registerFunction("currentDate", currentDate);
Pulsar.registerFunction("getBrandId", getBrandId);
Pulsar.registerFunction("exportedFileName", exportedFileName);
Pulsar.registerFunction("variableName", variableName);
Pulsar.registerFunction("hslConvertor", hslConvertor);
Pulsar.registerFunction("groupNameComment", groupNameComment);
Pulsar.registerFunction("stylexTokenName", stylexTokenName);

// Payloads
Pulsar.registerPayload("currentExporterVersion", currentExporterVersion);
Pulsar.registerPayload("brandNames", brandNames);
Pulsar.registerPayload("behavior", behavior);
