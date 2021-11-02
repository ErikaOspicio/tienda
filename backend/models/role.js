import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    regiterDate: { type: Date, default: Date.now },
    dbstatus: Boolean,

});

const role = mongoose.model("roles", roleSchema);

export default role