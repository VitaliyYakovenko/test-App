import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchFollowers } from "../redux/mockAPI/getFollowers";
import Users from "../components/Users"
import css from "./Sub.module.css";



export default function Subscription() {
    const users = useSelector(state => state.follower.items);
    const isLoading = useSelector(state => state.follower.isLoading);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();   

    useEffect(() => {
        dispatch(fetchFollowers(1))
     },[dispatch]);


    useEffect(() => {
        if (page > 1) {
            dispatch(fetchFollowers(page))
        }
    }, [dispatch, page]);




    return (
        <>
        <ul> 
        <Users
        users={users}      
        />        
        </ul>
        {users.length === 13
        ? <></>
        :  <button
        onClick={() => setPage(prev => prev + 1)}
        className={css.loadMoreBtn}>
        {isLoading
        ? <span>Loading...</span>
        : <span>Load More</span>}        
        </button>              
        }     
     </>)
}











// import Users from "../components/Users"
// import { useEffect, useState } from "react"
// import getUsers from "../utils/mockAPI/getUsers";
// import css from "./Sub.module.css";


// export default function Subscription() {
//     const [users, setUsers] = useState([]);
//     const [page, setPage] = useState(1);
       
//     useEffect(() => {
//         getUsers(1)
//         .then(user => setUsers(user));     
//      },[]);
    
//     const addUsers = () => {
//         setPage(prev => prev + 1);
//     }

//     useEffect(() => {
//         if (page > 1) {
//             getUsers(page)
//             .then(resp => {
//             setUsers(prev => [...prev, ...resp]);
//             });
//         }
//     }, [page]);
    
//     const onFollowUser = (e) => {
//         console.log(e);
//     }


    
//     return (
//         <>
//         <ul>
//         <Users
//         users={users}
//         onFollowUser={onFollowUser}            
//         />
//         </ul>    
//         <button
//         onClick={addUsers}
//         className={css.loadMoreBtn}>
//         Load more
//         </button>    
//      </>)
// }