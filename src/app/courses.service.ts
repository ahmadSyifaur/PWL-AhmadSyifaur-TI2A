import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getAuthor(){
    return[
      'Author 1',
      'Author 2',
      'Author 3',
    ];
  }
  getHobby(){
    return [
      {no:1,hobby:'Lari',keterangan:'Lari 1 Jam'},
      {no:2,hobby:'Senam',keterangan:'Senam tiap Sore'},
      {no:3,hobby:'Bermain Musik',keterangan:'Bermain Musik saat waktu senggang'},
    ]
  }
}
