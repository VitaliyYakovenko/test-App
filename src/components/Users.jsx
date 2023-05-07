import { useDispatch} from 'react-redux';
import  PropTypes  from "prop-types";
import { addFollowers } from '../redux/mockAPI/addFollowers';
import { removeFollowers } from '../redux/mockAPI/removeFollowers';
import logo from "../images/logo.svg";
import css from './Users.module.css';

export default function Users({ users }) {
    const dispatch = useDispatch();

    const onFollowUserAPI = (data) => {
        const { follow} = data;
        if (!follow) dispatch(addFollowers(data));
        if (follow) dispatch(removeFollowers(data));      
    } 

    return (<>
         {users.map(user => (
            <li 
            className={css.userCard}
            key={user.id}>
            <img className={css.logo} src={logo} alt='logo' />
            <div className={css.userBlock}>     
            <div className={css.userImg}>
            <img className={css.userAvatar} src={user?.avatar} width="42" height="42" alt="avatar" />
            </div>     
            <h1 className={css.userName}>{user.name}</h1>
            <p className={css.userTweets}>{user.tweets} tweets</p>
            <p className={css.userFollows}>{user.follow 
             ? String(user.followers).replaceAll(`${user.followers}`,"100,501")
             : String(user.followers).replaceAll(`${user.followers}`,"100,500") 
            } followers</p>
            <button
            className={css.btnFollow}
            style={{ backgroundColor: user.follow
            ? `#5CD3A8`
            : `#EBD8FF`            
            }}
            onClick={() => onFollowUserAPI(user, user.follow)}>
            {user.follow
            ? <span>following</span>
            : <span>follow</span>}
            </button>
            </div>         
             </li>
        ))}
    </>)
}


Users.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            followers: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
            follow: PropTypes.bool.isRequired,
            tweets: PropTypes.number.isRequired,
        })
    )
}
