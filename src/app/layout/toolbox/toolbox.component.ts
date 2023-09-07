import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  public isToolboxVisible: boolean = false;

  public toggleToolbox(): void {
    this.isToolboxVisible = !this.isToolboxVisible;
  }
}
