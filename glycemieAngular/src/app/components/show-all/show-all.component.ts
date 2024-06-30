import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Glycemie } from 'src/app/model/glycemie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  glycemieForm: FormGroup = this.f.group({}); 
  listOfGlycemie: Glycemie[] = [];
  show = false;


  constructor(private httpService: HttpService, private f: FormBuilder) { }

  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(glycemie => this.listOfGlycemie = glycemie);

    this.glycemieForm = this.f.group({
      id: [''],
      date: [''],
      time: [''],
      level: [''],
    });
  }

  handelSubmit() {
    this.httpService.addGlycemie(this.glycemieForm.value).subscribe();
    this.ngOnInit();
    window.location.reload();
  }
  showAddGlycemie() {
    this.show = !this.show;
  }

  delete(id: number | undefined) {
    if (id !== undefined) {
      this.httpService.delete(id).subscribe(() => {
        // Refresh the list after deletion
        this.httpService.fetchAll().subscribe(glycemie => this.listOfGlycemie = glycemie);
      });
    }
  }
}
