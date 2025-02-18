import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
     {
          name: {
               type: String,
               required: true,
               trim: true,
          },
          email: {
               type: String,
               required: true,
               unique: true,
          },
          password: {
               type: String,
               required: true,
          },
          address: {
               type: String,
               required: false,
          },
          role: {
               type: Number,
               default: 1.0,
          },
     },
     { timestamps: true }
);
export default mongoose.model("users", userSchema);
