import { FC, useState } from 'react';
import { Form, Formik } from 'formik';
import { useAppDispatch } from 'hooks/useHooks';
import { createProducts } from 'redux/todo/product-operations';
import { setModal } from 'redux/modal/modal-slice';
import { Button } from 'components/Buttons/Button';
import { categoriesItem } from 'selectItems/selectItems';
import { ModalFeedback } from 'helpers/schemas/ModalFeedback';
import { ISendProduct } from 'helpers/types/product';
import {
  BoxInput,
  Placeholder,
  FeedbackTitle,
  Input,
  ErrorMsg,
} from './FormikModal.styled';

const initialValues = {
  title: '',
  category: '',
  description: '',
};

export const FormikModal: FC = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const dispatch = useAppDispatch();

  const modalClose = () => dispatch(setModal(false));

  //  useEffect(() => {
  //    if (productData) {
  //      setFormValues({
  //        title: productData.title,
  //        category: productData.category,
  //        description: productData.description,
  //      });
  //    }
  //  }, [productData]);

  const handleSubmit = (values: ISendProduct) => {
    dispatch(createProducts(values));
    dispatch(setModal(false));

    setFormValues(initialValues);
  };

  return (
    <>
      <Formik
        validationSchema={ModalFeedback}
        initialValues={formValues}
        onSubmit={values => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <BoxInput>
              <FeedbackTitle>Feedback Title</FeedbackTitle>
              <Placeholder htmlFor="title">
                Add a short, descriptive headline
              </Placeholder>
              <Input
                component="textarea"
                name="title"
                error={touched.title && errors.title}
              />
              <ErrorMsg component="div" name="title" />
            </BoxInput>

            <BoxInput>
              <FeedbackTitle>Category</FeedbackTitle>
              <Placeholder htmlFor="category">
                Choose a category for your feedback
              </Placeholder>
              <Input
                component="select"
                name="category"
                error={touched.category && errors.category}
              >
                <option disabled value="">
                  {formValues.category}
                </option>
                {categoriesItem &&
                  categoriesItem.map(item => (
                    <option key={item.value} value={item.label}>
                      {item.label}
                    </option>
                  ))}
              </Input>
              <ErrorMsg component="div" name="category" />
            </BoxInput>

            <BoxInput>
              <FeedbackTitle>Feedback Detail</FeedbackTitle>
              <Placeholder htmlFor="description">
                Include any specific comments on what should be improved, added,
                etc.
              </Placeholder>
              <Input
                component="textarea"
                name="description"
                error={touched.description && errors.description}
              />
              <ErrorMsg component="div" name="description" />
            </BoxInput>

            <Button type="submit" color="first" width="addSave">
              Add
            </Button>
            <Button
              type="button"
              color="third"
              width="delete"
              onClick={modalClose}
            >
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
