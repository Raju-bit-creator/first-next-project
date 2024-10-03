// import { comments } from "@/data/comments";

// export default function handler (req, res){
//     res.status(200).json(comments)
// }

import { comments } from "@/data/comments";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}