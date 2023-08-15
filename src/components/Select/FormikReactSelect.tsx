import { useField, useFormikContext } from 'formik';
import Select, { GroupBase, StylesConfig, ThemeConfig } from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { IOption } from 'helpers/types/ItemsTypes';
import { FocusEventHandler } from 'react';
// modalAdd
type GroupedOption = {
  label: string;
  options: IOption[];
};

type Props = {
  onBlur?: FocusEventHandler;
  isSearchable?: boolean;
  onFocus?: FocusEventHandler;
  styles?:
    | (StylesConfig<IOption, false, GroupBase<IOption>> &
        StylesConfig<IOption, boolean, GroupedOption>)
    | undefined;
  theme?: ThemeConfig;
  placeholder?: string;
  required?: boolean;

  components?: any;

  name: string;
} & Omit<
  StateManagerProps<IOption, false | true, GroupedOption>,
  'value' | 'onChange'
>;

const FormikReactSelect = (props: Props) => {
  const { name, ...restProps } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const flattenedOptions = props.options?.flatMap(o => {
    const isNotGrouped = 'value' in o;
    if (isNotGrouped) {
      return o;
    } else {
      return o.options;
    }
  });

  const value = flattenedOptions?.filter(o => {
    const isArrayValue = Array.isArray(field.value);

    if (isArrayValue) {
      const values = field.value as Array<any>;
      return values.includes(o.value);
    } else {
      return field.value === o.value;
    }
  });
  return (
    <Select
      {...restProps}
      value={value}
      onChange={val => {
        const _val = val as IOption[] | IOption;
        const isArray = Array.isArray(_val);
        if (isArray) {
          const values = _val.map(o => o.value);
          setFieldValue(name, values);
        } else {
          setFieldValue(name, _val.value);
        }
      }}
    />
  );
};

export default FormikReactSelect;
