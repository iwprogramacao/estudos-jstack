import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import arrow from '../../assets/images/icons/arrow.svg';
import { PageHeaderContainer } from './styles';

export default function PageHeader({ title }) {
  return (
    <PageHeaderContainer>
      <Link to="/">
        <img src={arrow} alt="Voltar para a Home" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </PageHeaderContainer>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
