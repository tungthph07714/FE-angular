import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills = [
    {
      id: 1,
      name: 'healing',
      image: '',
      mana: 100,
      countdown: 10,
      display: true
    },
    {
      id: 2,
      name: 'burning',
      image: '',
      mana: 110,
      countdown: 10,
      display: true
    },
    {
      id: 3,
      name: 'flash',
      image: '',
      mana: 120,
      countdown: 10,
      display: true
    },
    {
      id: 4,
      name: 'teleport',
      image: '',
      mana: 130,
      countdown: 10,
      display: true
    },
    {
      id: 5,
      name: 'healinrun',
      image: '',
      mana: 140,
      countdown: 10,
      display: true
    },
  ]

  skillItem ={
    id: 0,
    name: "",
    image: "",
    mana: "",
    countdownt: "",
    display: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
