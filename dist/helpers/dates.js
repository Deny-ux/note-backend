"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStringDate = void 0;
function createStringDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
exports.createStringDate = createStringDate;
//# sourceMappingURL=dates.js.map