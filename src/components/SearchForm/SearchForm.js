import PropTypes from 'prop-types';
import { Filter, FilterField } from './SearchForm.styled';

export const SearchForm = ({value, onChange}) => {
    return (
      <Filter>
        Find contacts by name
        <FilterField
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          placeholder="search"
        />
      </Filter>
    );
}

SearchForm.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}