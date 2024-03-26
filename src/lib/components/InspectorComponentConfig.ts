export class InspectorComponentConfig {
    OptionsElements
}



export class InspectorOptionElement {
    optionName: string = ""
    optionTooltip: string = ""
    optionGroup: string = ""
    optionTab: string = ""
    defaultValue: string | Function = ()=>{}
    formType: 'Date' | 'Select' | 'Text' | 'Checkbox' | 'LongText' = 'Text'
}