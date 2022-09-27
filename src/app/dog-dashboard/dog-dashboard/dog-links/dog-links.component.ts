import { Component, OnInit, Input } from '@angular/core';
import { DogLink } from '../../models/dog-link.model';

@Component({
    selector: 'app-dog-links',
    templateUrl: './dog-links.component.html',
    styleUrls: ['./dog-links.component.scss']
})
export class DogLinksComponent implements OnInit {
    @Input() links: Array<DogLink> = [];
    constructor() { }

    ngOnInit(): void {
    }
}
