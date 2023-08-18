import { FocusEventHandler } from "react";
import { IOption } from "./ItemsTypes";
import { ActionMeta, GroupBase, SingleValue, StylesConfig, ThemeConfig } from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

type GroupedOption = {
    label: string;
    options: IOption[];
};

export type FormikReactProps = {
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
} & Omit<StateManagerProps<IOption, false | true, GroupedOption>, 'value' | 'onChange'>;

export type ISelectProps = {
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