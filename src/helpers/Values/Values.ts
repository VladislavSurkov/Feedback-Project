import { ObjStatusValue } from "helpers/types/product";


export  const objStatusValue: ObjStatusValue = {
    Planned: 'Planned',
    InProgress : 'In-Progress',
    Live : 'Live'
}

export const statusDescript = {
    [objStatusValue.Planned]: 'Ideas prioritized for research',
    [objStatusValue.InProgress]: 'Currently being developed',
    [objStatusValue.Live]: 'Released features',
};

export const statusColors = {
    [objStatusValue.Planned]: '#F49F85',
    [objStatusValue.InProgress]: '#AD1FEA',
    [objStatusValue.Live]: '#62BCFA',
};