import axios from "axios";
import React, {useState, useEffect} from "react";
import useAuth from "../../../hooks/useAuth";
import "./CommentForm.css"

const CommentForm = ({test}) => {
    
    const [user, token] = useAuth();
    const [newText, setNewText] = useState('');

    async function handleSubmitForm(event) {
        event.preventDefault(); //prevent page refresh when commenting
        let newComment = {
            text: newText,
            environment: test.environment.id,
            user: user.id,
            environment_id: test.environment.id,
            user_id: user.id,
        };
        console.log(newComment);
    await axios.post('http://127.0.0.1:8000/api/comments/', newComment)};


    return ( 
        <form className="comment-form" onSubmit={handleSubmitForm}>
            <label>Comment:</label>
            <input type='text' placeholder="Add your insight to the discussion!" value={newText} onChange={(event) => setNewText(event.target.value)}/>
            <br>
            </br><button type='submit'>Post</button>
        </form>
     );
}
 
export default CommentForm;