import { IPropsModal } from 'helpers/types/modal';
import { StyledPlusIcon, Box } from './ModalAddFeedback.styled';
import { FormikModal } from 'components/FormikModal/FormikModal';


export default function ModalAddFeedback({ onClose }: IPropsModal) {
  return (
    <Box>
      <StyledPlusIcon />
      <FormikModal onClose={onClose} />
    </Box>
  );
}
