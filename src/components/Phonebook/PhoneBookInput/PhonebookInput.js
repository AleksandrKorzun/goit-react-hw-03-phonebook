import style from './PhonebookInput.module.css'
import PropTypes from 'prop-types';


const PhonebookInput = ({name, number, onSubmitContacts, onChangeInpuntName}) => {
    return (
        <form className={style.form} onSubmit={onSubmitContacts}>
            <label className={style.formLabel}>
                Name
            <input
                className={style.formInput}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={onChangeInpuntName}
                value={name}
            />
            </label>
            <label className={style.formLabel}>
                Number
                <input
                className={style.formInput}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={onChangeInpuntName}
                value={number}
                />
            </label>
            <button type="submit" className={style.btn}>ADD contacts</button>
        </form>
    );
}

export default PhonebookInput;

PhonebookInput.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}