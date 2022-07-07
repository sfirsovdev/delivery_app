import user from '../components/data/user.json';
import Shops from '../components/Shops/Shops';
import Profile from '../components/profile/Profile'
import './Homepage.css'



const Homepage = () => {
    return (
        <div>
        <Shops />
        <Profile
        username={user.username}
        location={user.location}
        avatar={user.avatar}
        />
        </div>
    )
}

export {Homepage}