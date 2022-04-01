import mailer from "../../helper/email/sendMail.js";
import { USER } from "../../models/user-model.js";
import fs from "fs"
import path from "path";

let tryed = false;

export default async function sendMailController(req, res) 
{
    try
    {
        if(!tryed)
        {
            const trys = req.cookies.trys || 0;
            res.cookie('trys', Number(trys) + 1, {
                secure: true,
                httpOnly: true,
                maxAge: 60 * 10
            })
            if(Number(trys) > 5)
            {
                return res.status(400).json({ ok: false, msg: "So much request, try later pls!"} )
            }
            const {email} = req.body;
            const user = await USER.findOne({ email });
            const verificationLink = process.env.apiUrl + "/api/account/verification/" + user.verificationLink;
            const mail = await fs.readFileSync(path.resolve(path.resolve(), "helper", "email", "mailHtml.txt"), "utf-8")
            await mailer("Test Skills", email, "Verification", mail.replace(/&&&/gm, verificationLink), verificationLink)
            res.status(200).json({ msg: "Email sended!"})
            return tryed = true;
        }
        res.status(400).json({ ok: false, msg: "try later pls"} )
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({ ok: false, msg: "Dont can sand message, try later pls"} )
    }
}
