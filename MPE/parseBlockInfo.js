"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBlockInfo = void 0;
const block_attributes_1 = require("../block-attributes");
const parseBlockInfo = (raw = "") => {
    let initRaw = raw.trim();
    if(raw.indexOf("{") !== -1 && raw.indexOf("mermaid") === -1) {
        initRaw =  raw.replace(
            /^\{\.(.*?)\s/,
            function (match, p1, offset, str) {
              return `${p1}${str}`;
            }
        )
    }
    let language;
    let attributesAsString;
    let attributes;
    const trimmedParams = initRaw;
    const match = trimmedParams.indexOf("{") !== -1
        ? trimmedParams.match(/^([^\s{]*)\s*\{(.*?)\}/)
        : trimmedParams.match(/^([^\s]+)\s+(.+?)$/);
    if (match) {
        if (match[1].length) {
            language = match[1];
        }
        attributesAsString = match[2];
    }
    else {
        language = trimmedParams;
        attributesAsString = "";
    }
    if (attributesAsString) {
        try {
            attributes = (0, block_attributes_1.parseBlockAttributes)(attributesAsString);
        }
        catch (e) {
            attributes = {};
        }
    }
    else {
        attributes = {};
    }
    return { language, attributes };
};
exports.parseBlockInfo = parseBlockInfo;
//# sourceMappingURL=parseBlockInfo.js.map

