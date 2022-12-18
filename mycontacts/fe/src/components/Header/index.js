import { HeaderContainer } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="My Contacts" />
    </HeaderContainer>
  );
}
