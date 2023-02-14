import dbConnect from '../../lib/dbConnect'
import Tool from '../../models/Tool'

export default async function handler (req, res) {
  await dbConnect()
    try {
        const users = await Tool.find({})
        res.status(200).json({ success: true, data: users })
    } catch (error) {
        res.status(400).json({ success: false })
    } 
}