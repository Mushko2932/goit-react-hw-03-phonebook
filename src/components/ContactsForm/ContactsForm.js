import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Form, FormLabel, FormBtn, Field } from './ContactsForm.styled';

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
});

const state = {
  name: '',
  number: '',
};

export const ContactsForm = ({onAdd}) => {
  const handleSabmit = (values, actions) => {
      console.log('values :>> ', values);
      onAdd({
          ...values,
          id: nanoid()
      });
      actions.resetForm();
  };
  return (
    <Formik
      initialValues={state}
      validationSchema={ContactShema}
      onSubmit={handleSabmit}
    >
      <Form>
        <FormLabel>
          Name
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};
