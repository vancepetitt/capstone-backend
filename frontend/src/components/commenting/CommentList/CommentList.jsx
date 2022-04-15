import React, { useState, useEffect} from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import "./CommentList.css"

const CommentList = ({test}) => {

    const [user, token] = useAuth();
    const [comments, setComments] = useState([]);

    async function fetchComments() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/comments/')
            console.log('allcomments', response.data)
            setComments(response.data.filter((comment)=>{
                if (comment.environment.id===test.environment.id) {return comment}}));
        }
        catch(error){
            console.log(error.message)
        }};

    useEffect(() => {
        fetchComments()
    }, []);

    return (
        <div className="comments">
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

export default CommentList;