import { DataType } from "@/types";
import mongoose, { model, Schema } from "mongoose";


const ChildSchema = new Schema<DataType>({
    id: Number,
    value: String,
  });
  
  ChildSchema.add({ children: [ChildSchema] });
  
  const storedData = new Schema<DataType>({
    id: Number,
    value: String,
    children: [ChildSchema]
  });


  const getModelFunction = () => {
    return mongoose.models && mongoose.models.storedAllData
      ? mongoose.models.storedAllData as mongoose.Model<DataType>
      : model<DataType>("storedAllData", storedData);
  };

const storedDataModel = getModelFunction();

export { storedDataModel }