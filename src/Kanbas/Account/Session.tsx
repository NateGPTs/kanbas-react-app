import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {

  const [pending, setPending] = useState(true);

  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      // Check localStorage first
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        // If found in localStorage, set it in Redux
        dispatch(setCurrentUser(JSON.parse(storedUser)));
      } else {
        // If not in localStorage, try to fetch from server
        const currentUser = await client.profile();
        dispatch(setCurrentUser(currentUser));
        // Store in localStorage for future
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
    } catch (err: any) {
      console.error("Profile fetch failed:", err);
      // Clear localStorage and Redux on error
      localStorage.removeItem('currentUser');
      dispatch(setCurrentUser(null));
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if(!pending) {
    return children;
  }
  
}

