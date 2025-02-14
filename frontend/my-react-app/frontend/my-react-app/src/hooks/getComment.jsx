import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setComment, setPosts } from '../redux/postSlice'


const getComment = () => {
  const dispatch = useDispatch();
useEffect(() => {
    const getComments = async()=>{
        try {
          const response = await axios.get("http://localhost:5000/api/posts/getallcomments", {
            headers: {
              'Content-Type': 'application/json', // Example header
            },
            withCredentials: true, // Allows cookies to be sent with the request
          });
          console.log(response.data.comments)
          dispatch(setComment(response.data.comments));
        } catch (error) {
          console.error("Error fetching users:", error);
        }
    }
 getComments();
}, [])

}

export default getComment
