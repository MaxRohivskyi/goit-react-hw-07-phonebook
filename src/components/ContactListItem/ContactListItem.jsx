import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import {
  DeleteIcon,
  Btn,
  Text,
  ContactListItemWrapper,
} from './ContactListItem.styled';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handlerDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactListItemWrapper>
        <Text>
          {name}: <>{phone}</>
        </Text>
        <Btn onClick={handlerDelete}>
          <DeleteIcon size="20" />
          Delete
        </Btn>
      </ContactListItemWrapper>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
