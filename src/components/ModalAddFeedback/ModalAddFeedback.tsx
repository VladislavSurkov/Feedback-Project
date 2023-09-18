import { IPropsModal } from 'helpers/types/modal';
import { StyledPlusIcon, Title, Box } from './ModalAddFeedback.styled';
import { FormikModal } from 'components/FormikModal/FormikModal';

export default function ModalAddFeedback({ onClose }: IPropsModal) {
  return (
    <Box>
      <StyledPlusIcon />
      <Title>Create New Feedback</Title>
      <FormikModal onClose={onClose} />
    </Box>
  );
}
