import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog-pictures.service';

import { Subscription } from 'rxjs';
import { DogLink } from '../models/dog-link.model';

@Component({
    selector: 'app-dog-dashboard',
    templateUrl: './dog-dashboard.component.html',
    styleUrls: ['./dog-dashboard.component.scss']
})
export class DogDashboardComponent implements OnInit {
    private randomImageSubscription!: Subscription;
    private randomDogsSubscription!: Subscription;
    public dogImgUrl: string = '';
    public dogs: Array<DogLink> = [];

    constructor(private dogService: DogService) {}

    ngOnInit(): void {
        this.getRandomImage();
        this.getRandomDogs();
    }

    ngOnDestroy(): void {
        if(this.randomImageSubscription) {
            this.randomImageSubscription.unsubscribe();
        }
        if(this.randomDogsSubscription) {
            this.randomDogsSubscription.unsubscribe();
        }
    }

    private getRandomImage(): void {
        this.randomImageSubscription = this.dogService.getRandomDogImage().subscribe(response => this.dogImgUrl = response);
    }

    private getRandomDogs(): void {
        this.randomDogsSubscription = this.dogService.getRandomDogs().subscribe(response => this.dogs = response);
    }
}
