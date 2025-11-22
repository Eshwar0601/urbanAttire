import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import * as path from 'path';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    if(req.method === 'GET') {
    try {
        const filePath :any  = path.join(process.cwd(), 'public', 'api', 'products.json'); 
        const fileContents : any = await fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return res.status(200).json(data);
      } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
        return res.status(500).json({ error: 'Failed to load data' });
      }

    } else {
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}