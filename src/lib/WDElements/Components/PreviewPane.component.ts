import { Component, inject } from "@angular/core";
import { ContentTreeService } from "../ContentTree.service";
import { DropzoneComponent } from "./Dropzone.component";

@Component({
    standalone: true,
    selector: 'app-elements-preview-pane',
    templateUrl: './PreviewPane.component.html',
    styleUrl: './PreviewPane.component.scss',
    imports: [DropzoneComponent]
})
export class PreviewPaneComponent {
    public contentTreeService = inject(ContentTreeService);

}