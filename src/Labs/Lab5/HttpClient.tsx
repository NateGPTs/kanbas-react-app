// In HttpClient.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";

export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

    const fetchWelcomeOnClick = async () => {
        const message = await client.fetchWelcomeMessage() as string;
        setWelcomeOnClick(message);
    };

    const fetchWelcomeOnLoad = async () => {
        // Changed this line - actually call the function
        const welcome = await client.fetchWelcomeMessage() as string;
        setWelcomeOnLoad(welcome);
    };

    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);
   
    return (
        <div>
            <h3>HTTP Client</h3> <hr />
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button> <br />
            Response from server: <b>{welcomeOnClick}</b>
            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr />
        </div>
    );
}