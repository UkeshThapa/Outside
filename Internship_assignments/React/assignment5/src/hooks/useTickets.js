import { useEffect, useState } from "react"
import axios from "axios";



const useTickets = () =>{
    const [tickets,setTickets] = useState([]);
    const [errorMessage,setErrorMessage] = useState();

    const getTickets = async()=>{
        try {
            const res = await axios.get("http://localhost:3006/tickets");
            setTickets(res.data);
        } catch (error) {
            setErrorMessage(error.message);
        }
    }


    const addTickets = async(data)=>{
        const request = {
            id:Number(tickets.length)+1,
            'customerName' : data.name,
            "detailsMessage" : data.message,
            "priority" : data.priority

        }
        const res = await axios.post("http://localhost:3006/tickets",request)
        setTickets([request,...tickets])
    }

    useEffect(()=>{
        getTickets();
    },[])


    return {tickets,errorMessage,addTickets}

}

export default useTickets;
