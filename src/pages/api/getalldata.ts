import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/connect";
import { storedDataModel } from "@/db/models/storedData";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    

    await dbConnect();
    try {
        
        const data = await storedDataModel.find();
 
        res.status(200).json({ data });

        
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
  }