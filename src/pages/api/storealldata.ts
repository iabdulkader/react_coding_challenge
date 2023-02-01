import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/connect";
import { data } from "@/constants/data";
import { storedDataModel } from "@/db/models/storedData";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    

    await dbConnect();
        data.map(async (item) => {
            const ifExists = await storedDataModel.findOne({ value: item.value });

            if(ifExists) {
                return;
            } else {
                console.log(item);
                const storedData = new storedDataModel(item);
                await storedData.save();
            }
        });

        res.status(200).json({ success: true });
    try {


        
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
  }