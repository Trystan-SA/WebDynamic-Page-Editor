interface IWDElementOptions {
    id: string
    name: string
    icon: string
}

/** Instance of a specific Wedynamic Element that hold editor data & config. */
export class ElementEditor {
    options: IWDElementOptions;
    template: string = '';
    style: string = '';
    script: string = '';


    constructor(options: IWDElementOptions, template : string, style : string, script: string){
        this.options = {
            id: '',
            name: 'Untilted Element',
            icon: 'unknown'
        };
        this.options = options;

        this.template = template;
        this.style = style;
        this.script = script;
    }
}