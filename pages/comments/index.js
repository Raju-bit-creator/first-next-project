import { useState } from 'react'

function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }
    const submitComment = async () => {
        const response = await fetch('api/comments', {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);
        fetchComments()


    }
    const deleteComment = async (commentId) => {
        const response = await fetch(`api/comments/${commentId}`, {
            method: 'DELETE',

        })
        const data = await response.json()
        console.log(data);
        fetchComments()

    }
    // const editComment = async(commentId) => {
    //     const response = await fetch(`api/comments/${commentId}`, {
    //         method: 'PUT',
    //     })
    //     const data= await response.json()
    //     console.log(data);
    //     fetchComments()

        


    // }
    return (
        <>
            <input type='text' value={comment} onChange={e => setComment(e.target.value)}></input>
            <button type='submit' onClick={submitComment}>Submit</button>
            <button onClick={fetchComments}>Load commments</button>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            {comment.id}{comment.text}
                            <button onClick={() => deleteComment(comment.id)}>Delete</button>
                            {/* <button onClick={() => editComment(comment.id)}>Edit</button> */}
                        </div>
                    )
                })
            }
        </>
    )
}
export default CommentsPage