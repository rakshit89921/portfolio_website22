import { neon } from '@netlify/neon';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    try {
        const sql = neon(); // uses NETLIFY_DATABASE_URL from env
        await sql`
      INSERT INTO info (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;
        return res.status(200).json({ status: 'success', message: 'Contact saved!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};