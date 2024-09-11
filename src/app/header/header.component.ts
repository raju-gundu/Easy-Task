import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [],
    styleUrl: './header.component.css'
  
})
export class HeaderComponent {
    title = 'Angular App';
}



