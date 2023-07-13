import { IOption } from 'helpers/types/CategoriesTypes';
import { IoCheckmarkSharp } from 'react-icons/io5';

import {
  IndicatorSeparatorProps,
  StylesConfig,
  ThemeConfig,
} from 'react-select';
import { CSSProperties } from 'react';

export const colorStyles: StylesConfig<IOption> = {
  control: () => ({
    display: 'flex',
  }),
  placeholder: base => ({
    ...base,
    color: '#f2f4febf',
    margin: 0,
  }),
  singleValue: base => ({
    ...base,
    color: '#f2f4fe',
    margin: 0,
  }),
  valueContainer: base => ({
    ...base,
    padding: 0,
    margin: 0,
    marginLeft: '5px',
  }),
  option: (base, { isSelected }) => ({
    ...base,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    color: isSelected ? '#AD1FEA' : '#647196',
    ':active': {
      color: '#AD1FEA',
    },
    ':not(:last-child)': {
      borderBottom: '1px solid #3a43747f',
    },
  }),
};

export const CustomOption = (props: any) => {
  const { innerProps, children, isSelected, getStyles } = props;
  // console.log(props);
  return (
    <div style={getStyles('option', props) as CSSProperties} {...innerProps}>
      {children}
      {isSelected ? (
        <IoCheckmarkSharp
          style={{
            color: '#AD1FEA',
          }}
        />
      ) : null}
    </div>
  );
};

export const themeStyles: ThemeConfig = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'none',
    primary: 'none',
  },
});

export const IndicatorSeparator = ({
  innerProps,
}: IndicatorSeparatorProps<IOption, true>) => {
  return <span style={{ display: 'none' }} {...innerProps} />;
};
