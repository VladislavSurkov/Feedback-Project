import { StyledPlusIcon, Box } from './ModalAddFeedback.styled';
import { AddForm } from 'components/FormikModal';
interface IProps {
  onSubmit: () => void;
  onClose: () => void;
}

export default function ModalAddFeedback({ onClose, onSubmit }: IProps) {
  return (
    <Box>
      <StyledPlusIcon />
      <AddForm />
    </Box>
  );
}
