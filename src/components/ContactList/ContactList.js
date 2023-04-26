import PropTypes from 'prop-types';
import {
  ContactRoster,
  ContactItem,
  ContactBtn,
  ContactInfo,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  console.log('contacts :>> ', contacts);
  return (
    <ContactRoster>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>{name}:</ContactInfo>
          <ContactInfo>{number}:</ContactInfo>
          <ContactBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ContactRoster>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};