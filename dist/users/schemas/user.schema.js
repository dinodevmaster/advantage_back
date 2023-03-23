"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    fullName: {
        type: String, require: true
    },
    birthdate: String,
    email: String,
    telephone: String,
    sign: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=user.schema.js.map