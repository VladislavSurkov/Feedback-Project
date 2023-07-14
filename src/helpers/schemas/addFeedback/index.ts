import * as Yup from 'yup';

export const AddFeedback = Yup.object().shape({
  title: Yup.string().min(4, "It's short").max(80, "It's long").required(),
  description: Yup.string().min(4, "It's short").max(80, "It's long").required(),
});
