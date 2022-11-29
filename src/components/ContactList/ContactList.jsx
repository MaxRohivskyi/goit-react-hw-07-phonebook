import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { NotFound } from 'components/NotFound/NotFound';
import { ContactListWrapper } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length > 0 ? (
        <ContactListWrapper>
          {contacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ContactListWrapper>
      ) : (
        <NotFound />
      )}
    </>
  );
};
