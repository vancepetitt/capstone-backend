import React, { useState, useEffect} from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const CommentList = ({test}) => {

    const [user, token] = useAuth();
    const [comments, setComments] = useState([]);

    async function fetchComments() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/comments/')
            console.log(response.data)
            console.log(comments)
            setComments(response.data.filter((comment)=>{
                if (comment.environment_id===test.environment.id) {return comment}}));
        }
        catch(error){
            console.log(error.message)
        }};

    useEffect(() => {
        fetchComments()
    }, []);

    return (
        <div>
            {comments &&
            comments.map((comment) => (
            <p key={comment.id}>
                {comment.user.first_name} {comment.user.last_name}<br></br>
                {comment.text}<br></br>
            </p>
            ))}
        </div>
    );
}

export default CommentList