import { PropTypes } from 'prop-types';
import { FormGroupContainer } from './styles';

export default function FormGroup({ children, error }) {
  return (
    <FormGroupContainer>
      {children}
      {error && <small>{error}</small>}
    </FormGroupContainer>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
