import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { RandomBreedImageResponse } from './models/random-breed-image-response.model';
import { DogLink } from './models/dog-link.model';

@Injectable({
    providedIn: 'root'
})
export class DogService {
    constructor(private httpClient: HttpClient) {}

    public getRandomDogImage(): Observable<string> {
        return this.httpClient
        .get<RandomBreedImageResponse>('https://dog.ceo/api/breeds/image/random/1')
        .pipe(
            map((randomBreedImageResponse: RandomBreedImageResponse) => randomBreedImageResponse.message[0])
        )
    }

    public getRandomDogs(): Observable<Array<DogLink>> {
        return this.httpClient
        .get<RandomBreedImageResponse>('https://dog.ceo/api/breeds/image/random/10')
        .pipe(
            map((randomBreedImageResponse: RandomBreedImageResponse) => {
                return randomBreedImageResponse.message.map((url: string) => {
                    return {
                        name: this.getFormattedName(url),
                        url
                    }
                })
            })
        )
    }

    private normalizeBreedName(breed: string): string {
        return breed.replace("-", " ").split(' ').reverse().join(' ');
    }

    private getFormattedName(url: string): string {
        const breedExpression: RegExp = /\/(?:[a-z]+)\/([a-z\-]+)/gm;
        const breed: RegExpExecArray | null = breedExpression.exec(url);
        if(breed !== null) {
            const name: string = this.normalizeBreedName(breed[1]);
            return name;
        } else {
            return '';
        }
    }
}
