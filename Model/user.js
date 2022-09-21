const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchmea = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["admin", "staff", "student"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = model("user", userSchmea);