import { map } from "rxjs/operators";
import { Todo } from "MyModels";

const todos: Todo[] = [
    { id: 0, name: `Hustle Everyday :)`, isComplete: true },
    { id: 1, name: `Learn Something New`, isComplete: false },
    { id: 2, name: `Howdy Howdy`, isComplete: true },
];

export default class TodosService {
    readonly service;

    constructor(service: any) {
        this.service = service
    }


    getTodos() {
        return this.service
            .fetch$({
                url: 'http://www.mocky.io/v2/5e5592ed31000033b7eb3930?mocky-delay=2000ms',
            })
            .pipe(map((res: any) => res.data));
    }


    loadSnapshot(): Promise<Todo[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(todos);
            }, 500);
        });
    }

// saveSnapshot(data: Todo[]): Promise<undefined> {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 todos = data;
//                 //resolve();
//             }, 500);
//         });
//     }
}