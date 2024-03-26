import { Injectable } from "@angular/core";
import { ElementRuntime } from "./ElementRuntime";

@Injectable({
    providedIn: 'root'
})
export class ContentTreeService {
    public Content: Map<string, ElementRuntime> = new Map();

    constructor(){
        //TODO: For testing, please remove

        this.Content.set('123', new ElementRuntime({id: '_TitleElement', configuration: {}})),
        this.Content.set('456', new ElementRuntime({id: '_DivElement', configuration: {}}))
    }
}