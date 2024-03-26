import { Component } from '@angular/core';
import { ElementsExplorerComponent } from '~lib/WDElements/Components/ElementsExplorer.component'

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [ElementsExplorerComponent],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {}
