import Select from 'react-select';
import { useField, useFormikContext } from 'formik';

import { IOption } from 'helpers/types/ItemsTypes';
import { FormikReactProps } from 'helpers/types/select';


const FormikReactSelect = (props: FormikReactProps) => {
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
