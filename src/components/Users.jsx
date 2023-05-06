import css from './Users.module.css';



export default function Users({ users , onFollowUser }) {
      
    return (<>
         {users.map(user => (
            <li className={css.user} key={user.id}>
            <img src={user?.avatar} width="62" height="62" alt="avatar"/>
            <h1>{user.name}</h1>
            <p>{user.tweets}</p>
            <p>{user.followers}</p>
            <button onClick={()=> onFollowUser(user.id)}>follow</button>
            </li>
        ))}
    </>)
}