import { USER } from "../../models/user-model.js";

export default async function verificationController(req, res) 
{
    try
    {
        const { code } = req.params;
        const user = await USER.findOne({ verificationLink: code });
        delete user.verificationLink
        user.verified = true;
        await user.save();
        return res.redirect(process.env.clientUrl);
    }
    catch(e)
    {
        console.log(e);
        res.status(400).send(e)
    }
}
