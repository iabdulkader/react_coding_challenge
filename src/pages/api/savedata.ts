import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/db/connect";
import { UserModel } from "@/db/models/user";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const { name, seletctedOption, agreedToTerms } = req.body;
    

    await dbConnect();

    try {
        const user = new UserModel({ name, seletctedOption, agreedToTerms });
        const newUser = await user.save();
        res.status(200).json({ success: true, user: newUser });

        
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
  }