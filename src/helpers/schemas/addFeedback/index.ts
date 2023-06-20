import * as Yup from 'yup';

export const AddFeedback = Yup.object().shape({
  feedback: Yup.string().min(4, "It's short").max(80, "It's long").required(),
  details: Yup.string().min(4, "It's short").max(80, "It's long").required(),
  // articleType: Yup.
});
