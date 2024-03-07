import { Component } from '@angular/core';


export type ResizeAnchorType = "Top" | "Left" | "Right" | "Bottom";


@Component({
  selector: 'app-resizable-panel',
  standalone: true,
  imports: [],
  templateUrl: './resizable-panel.component.html',
  styleUrl: './resizable-panel.component.scss'
})
export class ResizablePanelComponent {
    public resizeAnchorType: ResizeAnchorType = "Left";
}
