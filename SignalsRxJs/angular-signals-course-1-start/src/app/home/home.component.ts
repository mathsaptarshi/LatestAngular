import {Component, computed, effect, inject, Injector, signal} from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {Course, sortCoursesBySeqNo} from "../models/course.model";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {CoursesCardListComponent} from "../courses-card-list/courses-card-list.component";
import {MatDialog} from "@angular/material/dialog";
import {MessagesService} from "../messages/messages.service";
import {catchError, from, throwError} from "rxjs";
import {toObservable, toSignal, outputToObservable, outputFromObservable} from "@angular/core/rxjs-interop";
import { CoursesServiceWithFetch } from '../services/courses-fetch.service';

@Component({
    selector: 'home',
    imports: [
        MatTabGroup,
        MatTab,
        CoursesCardListComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    #courses = signal<Course[]>([]);

    courseService = inject(CoursesServiceWithFetch)

    beginnerCourses = computed(()=>{
        const courses = this.#courses();
        return courses.filter((data)=> data.category=='BEGINNER')
    });
    advancedCourses = computed(()=>{
        const course = this.#courses();
        return course.filter((data)=> data.category=="ADVANCED")
    });
    
    constructor() {

    effect(() => {
    //   console.log(`beginnersList: `, this.beginnersList())
    })

    effect(() => {
    //   console.log(`Beginner courses: `, this.beginnerCourses())
    //   console.log(`Advanced courses: `, this.advancedCourses())
    });

    this.loadCourses()
      .then(() => console.log(`All courses loaded:`, this.#courses()));
  }

    // loadCourses(){
    //     this.courseService.loadAllCourses()
    //         .then((courses)=> this.courses.set(courses))
    //         .catch((err)=> console.log(err))
    // }

    async loadCourses(){
        try{
            const courses = await this.courseService.loadAllCourses();
            this.#courses.set(courses)
        }catch(err){
            alert(err)
        }
    }
}
