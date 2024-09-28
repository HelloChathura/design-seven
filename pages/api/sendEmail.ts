import type { NextApiRequest, NextApiResponse } from 'next';
import Mailjet from 'node-mailjet';

const mailjetClient = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_API_SECRET!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const result = await mailjetClient.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'info@designsevenstudio.com',
              Name: 'Your Name',
            },
            To: [
              {
                Email: 'designseven0707@gmail.com',
                Name: 'Recipient Name',
              },
            ],
            Subject: 'Design Seven - Contact Us',
            TextPart: `Message from ${name} (${email}, ${mobile}): ${message}`,
            HTMLPart: `<h3>New message from ${name}</h3><p>Email: ${email}</p><p>Mobile: ${mobile}</p><p>Message: ${message}</p>`,
          },
        ],
      });

      return res.status(200).json({ message: 'Email sent successfully', result });
    } catch (error: any) { 
      console.error('Email sending error:', error.message); 
      return res.status(500).json({ error: 'Failed to send email', details: error.message }); 
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} not allowed`);
  }
}
