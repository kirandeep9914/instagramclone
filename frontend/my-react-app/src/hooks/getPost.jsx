import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch, } from 'react-redux';
import { setPosts } from '../redux/postSlice';

const GetPost= () => {
    const dispatch = useDispatch();  // To dispatch actions
    useEffect(() => {
      const getpost = async () => {
        try {
          const response = await axios.get(
            " https://instagramclone-19.onrender.com/getallpost",
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true, // Include cookies or tokens
            }
          );
          console.log(response.data.posts); // Log the response data
          dispatch(setPosts(response.data.posts))
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      getpost(); // Call the function inside useEffect
    }, []); // Empty dependency array to run the effect once on mount
  
    return <div>Check the console for user data.</div>; // Basic return statement
  };
  
  export default GetPost;
