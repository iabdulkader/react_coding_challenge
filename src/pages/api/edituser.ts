import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/connect";
import { UserModel } from "@/db/models/user";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const { userId, name, seletctedOption, agreedToTerms } = req.body;
    

    await dbConnect();

    try {
       const user = await UserModel.findOneAndUpdate({ _id: userId }, { name, seletctedOption, agreedToTerms }, { new: true });

        res.status(200).json({ success: true, user });

        
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
  }