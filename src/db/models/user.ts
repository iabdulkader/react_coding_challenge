import { User } from "@/types";
import mongoose, { model, Schema } from "mongoose";

  
  const userSchema = new Schema<User>({
    name: String,
    seletctedOption: Object,
    agreedToTerms: Boolean,
  });


  const getModelFunction = () => {
    return mongoose.models && mongoose.models.User
      ? mongoose.models.User as mongoose.Model<User>
      : model<User>("User", userSchema);
  };

const UserModel = getModelFunction();

export { UserModel }