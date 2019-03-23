import { Component, OnInit } from '@angular/core';

declare function quizLogic(): any;

@Component({
  selector: 'app-demo-quiz',
  templateUrl: './demo-quiz.component.html',
  styleUrls: ['./demo-quiz.component.scss']
})
export class DemoQuizComponent implements OnInit {

  public q:any;
  p:number=1;
  constructor() {  }  

  ngOnInit() {
   this.q = [
     {
     "id":"1",
     "ques":"There are times when I do things, recklessly",
     "ans1":"yes, true",
      "ans2":"no, never",
      "ans3":"uncertain",
    },
    {
      "id":"2",
      "ques":"I readily converse in a group",
      "ans1":"yes, always",
      "ans2":"no, never",
      "ans3":"sometimes",
     },
     {
      "id":"3",
      "ques":"On a picnic, I would prefer:",
      "ans1":"to lead an exploring expedition",
      "ans2":"to participate in a group game",
      "ans3":"not to participate",
     },
     {
      "id":"4",
      "ques":"People think that I am calm and confident person",
      "ans1":"yes, certainly",
      "ans2":"no",
      "ans3":"sometimes",
     },
     {
      "id":"5",
      "ques":"I worry whether I am doing the right thing when I do it independently",
      "ans1":"often",
      "ans2":"rarely",
      "ans3":"occasionally",
     },
     {
      "id":"6",
      "ques":"When my work is shown to important people, I prefer:",
      "ans1":"to show it myself",
      "ans2":"give someone else to on my behalf",
      "ans3":"uncertain",
     },
     {
      "id":"7",
      "ques":"I usually keep others from knowing how I really feel about them",
      "ans1":"yes",
      "ans2":"hardly ever",
      "ans3":"sometimes",
     },
     {
      "id":"8",
      "ques":"I have no stage fright",
      "ans1":"true",
      "ans2":"false",
      "ans3":"sometimes it bothers me",
     },
     {
      "id":"9",
      "ques":"I take immediate steps when deciding a practical matter",
      "ans1":"true, always",
      "ans2":"not as a rule ",
      "ans3":"sometimes",
     },
     {
      "id":"10",
      "ques":"When I have a chance to exhibit my newly learnt skills , I feel:",
      "ans1":"glad to show",
      "ans2":"I will make a mess of it",
      "ans3":"uncertain",
     }
   ]
  }
  
 
}
