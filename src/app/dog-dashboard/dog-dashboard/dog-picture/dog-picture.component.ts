import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dog-picture',
    templateUrl: './dog-picture.component.html',
    styleUrls: ['./dog-picture.component.scss']
})
export class DogPictureComponent implements OnInit {
    @Input() url: string = '';
    constructor() { }

    ngOnInit(): void {
    }

}
