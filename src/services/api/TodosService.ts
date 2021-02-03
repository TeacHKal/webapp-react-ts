import { map } from "rxjs/operators";
import { Todo } from "MyModels";

export default class TodosService {
    readonly service;

    constructor(service: any) {
        this.service = service
    }

    getTodos() {
        return this.service
            .fetch$({
                url: 'http://www.mocky.io/v2/5e5592ed31000033b7eb3930?mocky-delay=2000ms',
                method: 'get'
            })
            .pipe(map((result: Array<Todo>) => {
                    return result
                }
            ));
    }

}