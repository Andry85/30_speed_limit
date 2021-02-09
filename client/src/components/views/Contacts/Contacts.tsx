import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import * as Yup from 'yup';

import styles from './Contacts.module.scss';


import {useTranslation} from 'react-i18next';



interface MyFormValues {
  yourName: string;
  yourEmail: string;
  yourPhone: string;
  yourMessage: string;
}


const SignupSchema = Yup.object().shape({
  yourName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  yourEmail: Yup.string().email('Invalid email').required('Required'),
});






const Contacts: React.FC<{}> = () => {

  const { t, i18n } = useTranslation();

  const initialValues: MyFormValues = { 
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    yourMessage: ''
  };
  return (
    <div className={styles.contacts}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
      {({ errors, touched }) => (
          <Form>
            <Field 
              className={styles.contacts__field}
              id="yourName"
              name="yourName" 
              placeholder={t('contactPage.yourName')}
            />
            {errors.yourName && touched.yourName ? (
              <div className={styles.contacts__error}>{errors.yourName}</div>
            ) : null}
            <Field 
              className={styles.contacts__field}
              id="yourEmail" 
              name="yourEmail" 
              placeholder={t('contactPage.yourEmail')}
            />
             {errors.yourEmail && touched.yourEmail ? (
              <div className={styles.contacts__error}>{errors.yourEmail}</div>
            ) : null}
            <Field 
              className={styles.contacts__field}
              id="yourPhone" 
              name="yourPhone" 
              placeholder={t('contactPage.yourPhone')} 
            />
            <Field 
            as="textarea"
              className={styles.contacts__field}
              id="yourMessage" 
              name="yourMessage" 
              placeholder={t('contactPage.yourMessage')} 
            />
            <button 
              className={styles.contacts__btn}
              type="submit"
            >
              {t('contactPage.submit')} 
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contacts;