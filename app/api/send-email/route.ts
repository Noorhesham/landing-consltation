import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const { from_name, email, phone, message } = body;

  if (!from_name || !email || !phone || !message) {
    return new Response(JSON.stringify({ message: "All fields are required" }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your email provider
    auth: {
      user: "noordragon2004@gmail.com", // Replace with your email
      pass: "dtgm jocm nbsk tlxm", // Replace with your app-specific password
    },
  });

  try {
    await transporter.sendMail({
      from: `${from_name} <${email}>`,
      to: "Info@qbseg.com",
      subject: `New Contact Form Submission from ${from_name}`,
      text: `Name: ${from_name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email", error: error.message }), { status: 500 });
  }
}
