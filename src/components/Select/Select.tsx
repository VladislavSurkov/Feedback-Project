import Select from 'react-select';
import { ISelectProps } from 'helpers/types/select';


const DropdownSelect = (props: ISelectProps) => {
  return <Select {...props} />;
};

export default DropdownSelect;
