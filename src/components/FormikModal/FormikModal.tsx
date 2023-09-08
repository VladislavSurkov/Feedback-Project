import { Form, Formik } from 'formik';

import { Button } from 'components/Buttons/Button';
import { categoriesItem } from 'selectItems/selectItems';
import { AddFeedback } from 'helpers/schemas/addFeedback';
import { IPropsModal } from 'helpers/types/modal';
import { ISendProduct } from 'helpers/types/product';
import { useAppDispatch } from 'hooks/useHooks';
import { createProducts } from 'redux/todo/product-operations';
import {
  Placeholder,
  FeedbackTitle,
  Input,
  InputDetails,
  Title,
} from './FormikModal.styled';

export const FormikModal = ({ onClose }: IPropsModal) => {
  const dispatch = useAppDispatch();
  const initialValues = {
    title: '',
    description: '',
    category: '',
  };

  const handleSubmit = (values: ISendProduct) => {
    dispatch(createProducts(values));
    onClose();
  };

  return (
    <>
      <Title>Create New Feedback</Title>
      <Formik
        validationSchema={AddFeedback}
        initialValues={initialValues}
        onSubmit={values => handleSubmit(values)}
      >
        <Form>
          <FeedbackTitle>Feedback Title</FeedbackTitle>
          <Placeholder htmlFor="title">
            Add a short, descriptive headline
          </Placeholder>
          <Input component="textarea" name="title" />
          <FeedbackTitle>Category</FeedbackTitle>

          <Placeholder htmlFor="category">
            Choose a category for your feedback
          </Placeholder>
          <Input component="select" name="category">
            <option disabled value="">
            </option>
            {categoriesItem &&
              categoriesItem.map(item => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
          </Input>
          <FeedbackTitle>Feedback Detail</FeedbackTitle>
          <Placeholder htmlFor="description">
            Include any specific comments on what should be improved, added,
            etc.
          </Placeholder>
          <InputDetails component="textarea" name="description" />
          <Button type="submit" color="first" width="addSave">
            Add
          </Button>
          <Button type="button" color="third" width="delete" onClick={onClose}>
            Cancel
          </Button>
        </Form>
      </Formik>
    </>
  );
};
