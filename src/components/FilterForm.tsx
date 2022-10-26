import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import styles from "../styles/components/Forms.module.scss";
import { useAppDispatch } from "../app/hooks";

import * as Yup from "yup";
import {
  setIsSuccessful,
  setStartEndDate,
} from "../features/launches/launchesSlice";
interface AddFromValues {
  startDate: string;
  endDate: string;
  isSuccessful: boolean;
}
const FilterForm = (props: { data?: AddFromValues }) => {
  const dispatch = useAppDispatch();
  const { data } = props;
  const initialValues: AddFromValues = {
    startDate: data ? data.startDate : "",
    endDate: data ? data.endDate || "" : "",
    isSuccessful: false,
  };
  const validationSchema = Yup.object({
    // startDate: Yup.string().required("Required"),
    // endDate: Yup.string().required("Required"),
  });
  const handleFormSubmit = (
    values: AddFromValues,
    actions: FormikHelpers<AddFromValues>
  ) => {
    console.log(values);
    if (values.startDate && values.endDate) {
      dispatch(
        setStartEndDate({
          startDate: new Date(values.startDate + "T00:00:00.000Z"),
          endDate: new Date(values.endDate + "T23:59:59.000Z"),
        })
      );
    }
    dispatch(setIsSuccessful(values.isSuccessful));

    // actions.resetForm();
    actions.setSubmitting(false);
  };
  return (
    <div className={styles.add_form_box}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isSubmitting, isValid }) => (
          <Form role="form" className={styles.form}>
            <label htmlFor="startDate">Date From</label>
            <Field
              className={`${styles.input} ${
                errors.startDate && touched.startDate && styles.input_error
              }`}
              as="input"
              type="date"
              name="startDate"
              data-testid={`startDate-input`}
            />
            <ErrorMessage name="startDate">
              {(msg) => <div className={styles.form_error}>{msg}</div>}
            </ErrorMessage>

            <label htmlFor="endDate">Date To</label>
            <Field
              className={`${styles.input} ${
                errors.startDate && touched.startDate && styles.input_error
              }`}
              as="input"
              type="date"
              name="endDate"
              data-testid={`endDate-input`}
            />
            <ErrorMessage name="endDate">
              {(msg) => <div className={styles.form_error}>{msg}</div>}
            </ErrorMessage>
            <br />
            <label style={{ marginBottom: 10 }}>
              <Field
                type="checkbox"
                name="isSuccessful"
                data-testid={`successful-input`}
              />
              Just Successful Launches?
            </label>

            <button
              className={`${styles.button} ${styles.success}`}
              type="submit"
              disabled={isSubmitting && !isValid}
              data-testid={`submit`}
            >
              Filter
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterForm;
