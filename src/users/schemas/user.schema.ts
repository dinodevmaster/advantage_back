import { Schema } from 'mongoose';

export const UserSchema = new Schema({
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
})