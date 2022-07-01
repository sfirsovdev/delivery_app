import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescriptionContainer,
  AvatarImage,
  Name,
  CartButton
} from './McDonyStyled';

export default function McDony({ username,  avatar }) {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <AvatarImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <CartButton>Add to Cart</CartButton>
      </DescriptionContainer>

      <DescriptionContainer>
        <AvatarImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <CartButton>Add to Cart</CartButton>
      </DescriptionContainer>

      <DescriptionContainer>
        <AvatarImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <CartButton>Add to Cart</CartButton>
      </DescriptionContainer>

      <DescriptionContainer>
        <AvatarImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <CartButton>Add to Cart</CartButton>
      </DescriptionContainer>

      <DescriptionContainer>
        <AvatarImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <CartButton>Add to Cart</CartButton>
      </DescriptionContainer>

      <DescriptionContainer>
        <AvatarImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <CartButton>Add to Cart</CartButton>
      </DescriptionContainer>
      

    </ProfileContainer>
  );
}

McDony.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};
