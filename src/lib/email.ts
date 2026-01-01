import {Resend} from "resend";

interface SendEmailsValues{
    to: string,
    subject: string,
    text: string,
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({to, subject, text}: SendEmailsValues){
    await resend.emails.send({
        from: "verification <onboarding@resend.dev>",
        to,
        subject,
        text,
    })
}