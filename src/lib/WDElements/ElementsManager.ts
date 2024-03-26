import { Injectable } from "@angular/core";
import { ElementEditor } from "./ElementEditor";


@Injectable({ providedIn: 'root' })
export class ElementsManagerService {
    public registeredElements: Map<string, ElementEditor> = new Map();

    constructor(){
        import('./basic_elements/main').then((m)=>{
            m.default.forEach((elem)=>{
                //this.registeredElements.set(elem.options.id, elem);
            })
        })
    }
}


export const ElementsManagerSingleton = new ElementsManagerService()