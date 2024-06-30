import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Glycemie } from 'src/app/model/glycemie'; // Adjust path as necessary
import { HttpService } from 'src/app/services/http.service'; // Adjust path as necessary

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todoToBeUpdated: Glycemie = new Glycemie(); // Assuming Glycemie is a class with default constructor
  updatedForm: FormGroup = new FormGroup({}); // Initialize empty FormGroup
  show: boolean = false;

  constructor(
    private httpService: HttpService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpService.findById(+id).subscribe(todo => {
        this.todoToBeUpdated = todo;
        this.initializeForm();
      });
    }
  }

  initializeForm(): void {
    this.updatedForm = this.fb.group({
      id: [{ value: this.todoToBeUpdated.id, disabled: true }],
      date: [this.todoToBeUpdated.date],
      time: [this.todoToBeUpdated.time],
      level: [this.todoToBeUpdated.level],
    });
  }

  handelSubmitUpdate(): void {
    if (this.updatedForm.valid) {
      this.httpService.update(this.todoToBeUpdated.id!, this.updatedForm.value).subscribe(() => {
        console.log('Update successful');
      });
      
        // Optionally, you can navigate back to the homepage or show a success message here
     
    }
  }

  update1(): void {
    this.show = !this.show;
  }
  update() {
    this.updatedForm.setValue({
      id: this.todoToBeUpdated.id,
      date: this.todoToBeUpdated.date,
      time: this.todoToBeUpdated.time,
      level: this.todoToBeUpdated.level,
    });
  }

}
