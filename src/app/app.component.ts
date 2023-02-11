import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
interface UserFormGroup {
  userData: FormGroup,
  gender: FormControl,
  interests: FormArray<FormControl<string>>
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup<UserFormGroup>;

  ngOnInit() {
    this.signupForm = new FormGroup<UserFormGroup>({
      "userData": new FormGroup({
        "username": new FormControl(null, Validators.required),
        "email": new FormControl(null,[Validators.required, Validators.email]),
      }),
      "gender": new FormControl('male'),
      "interests": new FormArray<FormControl<string>>([new FormControl(null)])
    })
  }
  onAddInterest() {
    const control: FormControl<string> = new FormControl(null, Validators.required);
    (this.signupForm.get('interests') as FormArray).push(control)
  }
  onSubmit() {
    console.log(this.signupForm.value)
  }
}
