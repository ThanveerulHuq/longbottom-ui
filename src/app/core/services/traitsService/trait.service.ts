import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraitService {
  traits: any;
  // traits: any ={
  //   "traits": [
  //     {
  //       "trait": "creator",
  //       "value": 18.16530994954284
  //     },
  //     {
  //       "trait": "persuader",
  //       "value": 17.95108872018479
  //     },
  //     {
  //       "trait": "doer",
  //       "value": 17.26425954653336
  //     },
  //     {
  //       "trait": "organizer",
  //       "value": 16.44761401842796
  //     },
  //     {
  //       "trait": "thinker",
  //       "value": 16.266501707417504
  //     },
  //     {
  //       "trait": "helper",
  //       "value": 13.905226057893563
  //     }
  //   ],
  //   "careers": [
  //     {
  //       "careerName": "Fashion Photographer",
  //       "description": "Fashion photographers work in the fashion industry and focus their skills specifically on styles of clothing and personal image.  They work closely with designers and fashion houses to ensure they are portraying the desired image for the brand.",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "TV Correspondent",
  //       "description": "TV correspondents research topics and stories to report during a television broadcast. They usually have a bachelor's degree in journalism or broadcasting. Because of the nature of this position, TV correspondents must have excellent communication skills.",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "Producer",
  //       "description": "some description",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "Radio Jockey(RJ)/Video Jockey",
  //       "description": "some description",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "Sound Engineer",
  //       "description": "some description",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "Sound Mixer and Sound Recordist",
  //       "description": "some description",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "Film Editor",
  //       "description": "some description",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "Event manager",
  //       "description": "some description",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "Advertising",
  //       "description": "some description",
  //       "scope": "growth",
  //       "salary": 1000
  //     },
  //     {
  //       "careerName": "Graphic designer",
  //       "description": "some description",
  //       "scope": "growth",
  //       "salary": 1000
  //     }
  //   ]
  // }
  courseName: string;

  constructor() { }
}
