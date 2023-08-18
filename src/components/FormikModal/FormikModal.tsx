import { Form, Formik } from 'formik';

import { Button } from 'components/Buttons/Button';
import { categoriesItem } from 'selectItems/selectItems';
import { AddFeedback } from 'helpers/schemas/addFeedback';
import { IPropsModal } from 'helpers/types/modal';
import { ISendProduct } from 'helpers/types/product';
import { useAppDispatch } from 'hooks/useHooks';
import { createProducts } from 'redux/todo/product-operations';
import {
  Category,
  FeedbackTitle,
  FormSelect,
  Input,
  InputDetails,
  Label,
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
      <Title>Great new feedback</Title>
      <Formik
        validationSchema={AddFeedback}
        initialValues={initialValues}
        onSubmit={values => handleSubmit(values)}
      >
        <Form>
          <FeedbackTitle htmlFor="title">Feedback Title</FeedbackTitle>
          <Input
            component="textarea"
            name="title"
            placeholder="Add a short, descriptive headline"
          />
          <Category htmlFor="category">Category</Category>
          <FormSelect component="select" name="category">
            <option disabled value="">
              Choose a category for your feedback
            </option>
            {categoriesItem &&
              categoriesItem.map(item => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
          </FormSelect>
          <Label htmlFor="description">Feedback Detail</Label>
          <InputDetails
            component="textarea"
            name="description"
            placeholder="Include any specific comments on what should be improved, added,
            etc."
          />
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
