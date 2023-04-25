import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailFormData {
	recipient: string;
	subject: string;
	message: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { recipient, subject, message }: EmailFormData = JSON.parse(req.body);

	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.google.com',
			port: 587,
			secure: false, // upgrade later with STARTTLS
			auth: {
				user: 'stevechez',
				pass: 'm8qugViX!!',
			},
		});

		const info = await transporter.sendMail({
			from: 'stevechez@gmail.com',
			to: recipient,
			subject,
			text: message,
		});

		console.log('Email sent:', info.messageId);
		res.status(200).json({ success: true });
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).json({ error: 'Error sending email' });
	}
}
