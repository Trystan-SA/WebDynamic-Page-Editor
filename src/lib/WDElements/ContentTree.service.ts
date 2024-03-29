import { Injectable } from "@angular/core";
import { ElementRuntime } from "./ElementRuntime";

@Injectable({
    providedIn: 'root'
})
export class ContentTreeService {
    public Content: Map<string, ElementRuntime> = new Map();
    constructor(){}


    /** Hold last drag&drop Element ID, so it can be used for later use */
    private DraggedElement: string | undefined

    setNewDraggedElement(id: string){
        this.DraggedElement = id
    }
    getNewDraggedElement(): string | undefined {
        return this.DraggedElement
    }

    
}