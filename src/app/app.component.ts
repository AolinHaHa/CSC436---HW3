import { Component,OnInit,Input } from '@angular/core';
import { Patient } from './patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() check: boolean;
  private patients: Patient[] = [
    new Patient('Homer', 'Simpson', 'HomerSimpson@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/72?cb=20140126234206', 'Akira'),
    new Patient('Marge', 'Simpson', 'MargeSimpson@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png/revision/latest/scale-to-width-down/78?cb=20130405164548', 'Cesar'),
    new Patient('Bart', 'Simpson', 'Bart_Simpson@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest/scale-to-width-down/80?cb=20140826010339', 'Cesar'),
    new Patient('Lisa', 'Simpson', 'Lisa_Simpson@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png/revision/latest/scale-to-width-down/74?cb=20130818115621', 'Akira'),
    new Patient('Maggie', 'Simpson', 'Maggie_Simpson@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/8/89/Maggie.png/revision/latest/scale-to-width-down/87?cb=20090115172358', 'Colin'),
    new Patient('Ned', 'Flanders', 'Ned_Flanders@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/8/84/Ned_Flanders.png/revision/latest/scale-to-width-down/115?cb=20100513160156', 'Colin'),
    new Patient('Krusty', 'Clown', 'Krusty_The_Clown@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/e/e5/Krusty_The_Clown.png/revision/latest/scale-to-width-down/152?cb=20131004191501', 'Akira'),
    new Patient('Seymour', 'Skinner', 'Seymour_Skinner@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/3/3a/Seymour_Skinner.png/revision/latest/scale-to-width-down/104?cb=20151011181559', 'Colin'),
    new Patient('Moe', 'Szyslak', 'Moe_Szyslak@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/8/80/Moe_Szyslak.png/revision/latest/scale-to-width-down/125?cb=20170101190543', 'Eddie'),
    new Patient('Edna', 'Krabappel', 'Edna_Krabappel@gmail.com',
      'https://vignette.wikia.nocookie.net/simpsons/images/7/76/Edna_Krabappel.png/revision/latest/scale-to-width-down/115?cb=20130817030613', 'Eddie')
  ];  
  displayedPatients: Patient[];
  searchText: string;
  ngOnInit() {
    this.displayedPatients = this.patients;
  }


  search() {
    let searchTextArray = this.searchText ? this.searchText.split(' ') : [];
    if (searchTextArray.length === 2) 
    {
      if (searchTextArray[0].toLocaleLowerCase() === 'name') {
        this.displayedPatients = this.patients.filter(patient => patient.FName[0].toLocaleLowerCase() === searchTextArray[1][0].toLocaleLowerCase());
      }
      else if (searchTextArray[0].toLocaleLowerCase() === 'doctor') {
        this.displayedPatients = this.patients.filter(patient => patient.doctorName.toLocaleLowerCase() === searchTextArray[1].toLocaleLowerCase());
      } 
      else {
        this.displayedPatients = [];
      }
    } 
    else {
      this.displayedPatients = [];
    }
  }
  refresh() {
    this.displayedPatients = this.patients;
  }
}


