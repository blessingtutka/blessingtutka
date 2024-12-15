import nodemailer from 'nodemailer';

/**
 * Send an email using Nodemailer.
 * @param name - The name of the recipient.
 * @returns A promise resolving with the recipient's name.
 */
export const sendEmail = async (name: string): Promise<{ name: string }> => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: import.meta.env.VITE_EMAIL,
            pass: import.meta.env.VITE_PASSWORD,
        },
    });

    // Set up email options
    const mailOptions = {
        from: import.meta.env.VITE_EMAIL,
        to: import.meta.env.VITE_RECIPIENT,
        subject: 'Welcome to Our Service!',
        html: `
      <h1>Welcome to Our Service!</h1>
      <p>Hi ${name},</p>
      <p>Thanks for signing up. We're glad to have you!</p>
      <p>Best Regards,<br>Your Company</p>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);

        return { name };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};
