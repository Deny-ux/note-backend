"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCategory = void 0;
const noteTypes_1 = require("../types/noteTypes");
const isValidCategory = (x) => noteTypes_1.categories.includes(x);
exports.isValidCategory = isValidCategory;
