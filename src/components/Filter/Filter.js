import style from './Filter.module.css'
import PropTypes from 'prop-types';


const Filter = ({filter, onChangeFilter}) => {
    return (
        <label className={style.formLabel}>
                Find contacts by name
                <input
                className={style.formInput}
                    type="text"
                    name="filter"
                    onChange={onChangeFilter}
                    value={filter}
                />
            </label>
    );
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
}