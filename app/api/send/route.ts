import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "contact@siddheshsule.de",
      to: ["siddhesh.sule47@gmail.com"],
      subject: "New Message from Contact Form",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred while sending the email." }),
      { status: 500 }
    );
  }
}
