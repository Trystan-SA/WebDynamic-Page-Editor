import { Injectable } from '@angular/core';
import { ElementEditor } from './ElementEditor'

/** Angular Service for Elements (Editor-side).
 *  Use "ContentTree" services to control Runtime Elements rendering.
 */
@Injectable({
    providedIn: 'root'
})
export class ElementService {
    public RegisteredElements: Map<string, ElementEditor> = new Map();

    constructor(){
        this.LoadElementsPack();
    }

    public LoadElementsPack(){
        import('./basic_elements/main').then((m)=>{
            m.default.forEach((elem)=>{
                this.RegisteredElements.set(elem.options.id, elem);
            })
        })
    }
}