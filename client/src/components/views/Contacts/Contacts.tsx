import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import styles from './Contacts.module.scss';



interface MyFormValues {
  yourName: string;
  yourEmail: string;
  yourPhone: string;
}






const Contacts: React.FC<{}> = () => {
  const initialValues: MyFormValues = { 
    yourName: '',
    yourEmail: '',
    yourPhone: ''
  };
  return (
    <div className={styles.contacts}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field 
            className={styles.contacts__field}
            id="yourName"
            name="yourName" 
            placeholder="Your Name" 
          />
          <Field 
            className={styles.contacts__field}
            id="yourEmail" 
            name="yourEmail" 
            placeholder="Your Email" 
          />
          <Field 
            className={styles.contacts__field}
            id="yourPhone" 
            name="yourPhone" 
            placeholder="Your Phone" 
          />
          <button 
            className={styles.contacts__btn}
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contacts;