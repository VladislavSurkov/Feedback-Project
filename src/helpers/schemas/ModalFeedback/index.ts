import * as Yup from 'yup';

export const ModalFeedback = Yup.object().shape({
  title: Yup.string().min(4, "It's short").max(80, "It's long").required('Can’t be empty'),
  description: Yup.string().min(4, "It's short").max(80, "It's long").required('Can’t be empty'),
  category: Yup.string().required('Can’t be empty'),
});
