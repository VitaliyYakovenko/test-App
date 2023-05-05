import Users from "../components/Users"
import { useEffect, useState } from "react"
import getUsers from "../utils/mockAPI/getUsers";
import css from "./Sub.module.css";


export default function Subscription() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
       
    useEffect(() => {
        getUsers(1)
        .then(user => setUsers(user));     
     },[]);
    
    const addUsers = () => {
        setPage(prev => prev + 1);
    }

    useEffect(() => {
        if (page > 1) {
            getUsers(page)
            .then(resp => {
            setUsers(prev => [...prev, ...resp]);
            });
        }
    }, [page]);
    
    console.log(page);
    console.log(users);


    
    return (
        <>
        <ul>
        <Users users={users} />
        </ul>    
        <button
        onClick={addUsers}
        className={css.loadMoreBtn}>
        Load more
        </button>    
     </>)
}