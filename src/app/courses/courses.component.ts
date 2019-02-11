import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Nama = 'Ahmad Syifaur romli';
  Alamat= 'tungulwulung';
  getNama(){
    return 'Nama : '+this.Nama ;
  }
  getAlamat(){
    return 'Alamat : '+this.Alamat;
  }
  title='Angular';
  getTitle(){
    return this.title;
  }
  judul='INI Tugas Pertama Biodata';
  getJudul(){
    return this.judul;
  }
  tanggal;
  // getTanggal(){
  //   return this.tanggal;
  // }

  Hobby;
  Courses;
  Length;
  constructor(private service:CoursesService) {
    this.Hobby=service.getHobby();
    this.Courses=service.getAuthor();
    this.Length=service.getAuthor().length;
  }
  
  ngOnInit() {
    this.tanggal = new Date().getTime();
  }

}
