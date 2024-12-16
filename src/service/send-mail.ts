import nodemailer from 'nodemailer';

/**
 * Send an email using Nodemailer.
 * @param senderData - The data containing the sender's information.
 * @returns A promise resolving with the recipient's name.
 */
export const sendEmail = async (senderData: IMail): Promise<string> => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: import.meta.env.VITE_EMAIL,
            pass: import.meta.env.VITE_PASSWORD,
        },
    });

    const mailOptionsToYou = {
        from: senderData.email,
        to: `${import.meta.env.VITE_EMAIL}`,
        subject: 'New Client Message - Request for Service',
        html: `
            <h1>New Client Message</h1>
            <p><strong>Name:</strong> ${senderData.name}</p>
            <p><strong>Email:</strong> ${senderData.email}</p>
            <p><strong>Requested Services:</strong> ${senderData.services.join(', ')}</p>
            <p><strong>Message:</strong><br/>${senderData.message}</p>
            <p>Best regards,</p>
            <p>${senderData.name}</p>
        `,
    };

    const mailOptionsAutoReply = {
        from: import.meta.env.VITE_EMAIL,
        to: senderData.email,
        subject: 'Thank You for Your Message - We Will Be in Touch',
        html: `
            <h1>Hello ${senderData.name},</h1>
            <p>Thank you for your message. We have successfully received your request for the following services: ${senderData.services.join(', ')}.</p>
            <p>We will review your request and get back to you as soon as possible.</p>
            <p>If you have any questions in the meantime, feel free to reach out to us.</p>
            <p>Best regards,</p>
            <p>Blessing Tutka</p>
        `,
    };

    try {
        const infoToYou = await transporter.sendMail(mailOptionsToYou);
        console.log('Email sent to you:', infoToYou.response);

        const infoAutoReply = await transporter.sendMail(mailOptionsAutoReply);
        console.log('Auto-reply sent to the sender:', infoAutoReply.response);

        return senderData.email;
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};
