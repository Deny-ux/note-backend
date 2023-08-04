"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res) => res.status(404).json({ data: { msg: "Route not found!" } });
exports.default = notFound;
