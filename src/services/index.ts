import RequestService from "./api/RequestService";
import TodosService from "./api/TodosService";
import * as counter from "./counter-service";

const RequestServiceInstance = new RequestService();

export default {
    api: {
        todosService: new TodosService(RequestServiceInstance),
        counterService: counter,
    },
}