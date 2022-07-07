import PropTypes from 'prop-types';
import './McDonyStyled.css'

export default function McDony({ username,  avatar }) {
  return (
    < div className='ProfileContainer'>
      <div className='DescriptionContainer'>
        <div className='AvatarImage'  src={avatar} alt="User avatar" />
        <div className='Name'>{username}</div>
        <div className='CartButton'>Add to Cart</div>
      </div>

      <div className='DescriptionContainer'>
        <div className='AvatarImage'  src={avatar} alt="User avatar" />
        <div className='Name'>{username}</div>
        <div className='CartButton'>Add to Cart</div>
      </div>

      <div className='DescriptionContainer'>
        <div className='AvatarImage'  src={avatar} alt="User avatar" />
        <div className='Name'>{username}</div>
        <div className='CartButton'>Add to Cart</div>
      </div>

      <div className='DescriptionContainer'>
        <div className='AvatarImage'  src={avatar} alt="User avatar" />
        <div className='Name'>{username}</div>
        <div className='CartButton'>Add to Cart</div>
      </div>

      <div className='DescriptionContainer'>
        <div className='AvatarImage'  src={avatar} alt="User avatar" />
        <div className='Name'>{username}</div>
        <div className='CartButton'>Add to Cart</div>
      </div>

      <div className='DescriptionContainer'>
        <div className='AvatarImage'  src={avatar} alt="User avatar" />
        <div className='Name'>{username}</div>
        <div className='CartButton'>Add to Cart</div>
      </div>
      

    </div>
  );
}

McDony.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};
