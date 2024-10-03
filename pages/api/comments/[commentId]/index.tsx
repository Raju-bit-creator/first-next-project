import { comments } from "@/data/comments";


export default function handler(req, res) {
    const { commentId } = req.query

    if (req.method === 'GET') {
        const comment = comments.find((comment) => comment.id === parseInt(commentId))
        res.status(200).json(comment)
    } else if (req.method === 'DELETE') {
        const deletedComment = comments.find((comment) => comment.id === parseInt(commentId))

        const index = comments.findIndex((comment) => comment.id === parseInt(commentId))
        comments.splice(index, 1)
        res.status(200).json(deletedComment)
    }
    // else if (req.method === 'PUT') {
    //     const { text } = req.body;  // Assuming the new comment text is sent in the request body

    //     // Find the comment by its ID
    //     const commentIndex = comments.findIndex((comment) => comment.id === parseInt(commentId));

    //     if (commentIndex === -1) {
    //         return res.status(404).json({ message: "Comment not found" });
    //     }

    //     // Update the comment
    //     comments[commentIndex].text = text;

    //     // Return the updated comment
    //     res.status(200).json(comments[commentIndex]);
    // } else {
    //     res.status(405).json({ message: 'Method Not Allowed' });
    // }


}