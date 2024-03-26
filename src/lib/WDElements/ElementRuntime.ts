import {ElementService} from './Element.service'
import { inject } from '@angular/core';

interface IElementRuntimeOptions {
    /** Reference to another "ElementEditor.id" */
    id: string

    /** Hold configuration data (Content, Style and Advanced) */
    configuration: any
}


/** Instance of a specific Webdynamic Element for Rendering (runtime) purpose. */
export class ElementRuntime { 
    private El = inject(ElementService);
    options: IElementRuntimeOptions;

    renderHTML(){
        return this.El.RegisteredElements.get(this.options.id)?.template;
    }

    constructor (options: IElementRuntimeOptions){
        this.options = options
    }
}


