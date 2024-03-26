import { Component, inject } from "@angular/core";
import { ElementService } from "~lib/WDElements/Element.service";
import { ElementsItemComponent } from './ElementsItem.component'

@Component({
    selector: 'app-elements-explorer',
    standalone: true,
    imports: [ElementsItemComponent],
    providers: [ElementService],
    templateUrl: './ElementsExplorer.component.html',
    styleUrl: './ElementsExplorer.component.scss'
})
export class ElementsExplorerComponent {
    public elementService = inject(ElementService)
}