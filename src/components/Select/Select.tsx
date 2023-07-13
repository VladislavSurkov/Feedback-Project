import { FocusEventHandler } from 'react';
import Select, {
  ActionMeta,
  GroupBase,
  SingleValue,
  StylesConfig,
  ThemeConfig,
} from 'react-select';
import { IOption } from 'helpers/types/CategoriesTypes';

type ISelectProps = {
  options: IOption[];
  value?: IOption | undefined;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  styles?: StylesConfig<IOption, false, GroupBase<IOption>>;
  theme?: ThemeConfig;
  placeholder?: string;
  name?: string;
  isSearchable?: boolean;

  components?: any;

  onChange:
    | ((
        newValue: SingleValue<IOption>,
        actionMeta: ActionMeta<IOption>
      ) => void)
    | undefined;
};

const DropdownSelect = (props: ISelectProps) => {
  return <Select {...props} />;
};
export default DropdownSelect;
