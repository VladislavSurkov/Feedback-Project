import { StyledPlusIcon, Title, Box } from './ModalAddFeedback.styled';
import { FormikModal } from 'components/FormikModal/FormikModal';

export default function ModalAddFeedback() {
  return (
    <Box>
      <StyledPlusIcon />
      <Title>Create New Feedback</Title>
      <FormikModal />
    </Box>
  );
}
