import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {todolistItemAdd, getUnDoneTodolistItems, todolistItemDone, loadTodolist} from "../store/toDoList";
import configureStore from "../store/configureStore"

describe("todolistSlice", () => {
    let store;
    let fakeAxios;

    beforeEach(() => {
        store = configureStore();
        fakeAxios = new MockAdapter(axios);
    });

    const todoSlice = () => store.getState().entities.todolist;
    const createState = () => ({
        entities: {
            todolist: {
                list: [],
                lastFetch: null,
            }
        }
    });

    it("should add todo to the store if it's saved on the server", async () => {
        // Arrange
        const todo = {name: "a"};
        const savedTodo = {...todo, id: 1};
        fakeAxios.onPost('/todolist').reply(200, savedTodo);

        // Act
        await store.dispatch(todolistItemAdd(todo));

        // Assert
        expect(todoSlice().list).toContainEqual(savedTodo);
    });

    it("should NOT add todo to the store if it's not saved on the server", async () => {
        // Arrange
        const todo = {name: "b"};
        fakeAxios.onPost('/todolist').reply(500);

        // Act
        await store.dispatch(todolistItemAdd(todo));

        // Assert
        expect(todoSlice().list).toHaveLength(0);
    });

    describe("selectors", () => {
        it("getUnDoneTodolistItems", () => {
            const state = createState();
            state.entities.todolist.list = [
                {id: 1},
                {id: 2, isComplete: true},
                {id: 3}
            ];

            const result = getUnDoneTodolistItems(state);

            expect(result).toHaveLength(2);
        })
    })

    it("should mark todo as resolved if it's saved to the server", async () => {
        fakeAxios.onPost('/todolist').reply(200, {id: 1});
        fakeAxios.onPatch("/todolist/1").reply(200, {id: 1, isComplete: true});

        await store.dispatch(todolistItemAdd({}));
        await store.dispatch(todolistItemDone(1));

        expect(todoSlice().list[0].isComplete).toBe(true);
    })

    it("should not mark todo as resolved if it's not saved to the server", async () => {
        fakeAxios.onPost('/todolist').reply(200, {id: 1});
        fakeAxios.onPatch("/todolist/1").reply(500);

        await store.dispatch(todolistItemAdd({}));
        await store.dispatch(todolistItemDone(1));

        expect(todoSlice().list[0].isComplete).not.toBe(true);
    })

    describe("loading todos", () => {
        describe("if todos exist in the cache", () => {
            it("they shouldn't be fetched from the server again", async () => {

                fakeAxios.onGet("/todolist").reply(200, [{id: 23}]);

                await store.dispatch(loadTodolist());
                await store.dispatch(loadTodolist());

                expect(fakeAxios.history.get.length).toBe(1);
            })
        })
        describe("if todos don't exist in the cache", () => {

            it("they should be fetched from the server and put in the store", async () => {
                fakeAxios.onGet("/todolist").reply(200, [{id: 23}]);

                await store.dispatch(loadTodolist());


                expect(fakeAxios.history.get.length).toBe(1);
            })

            describe("loading indicator", () => {

                it("should be true while fetching todos", () =>{
                    fakeAxios.onGet("/todolist").reply( () => {
                        expect(todoSlice().loading).toBe(true);
                        return [200, {id: 1}]
                    });
                })

                it("should be false after the todos are fetched", async () =>{
                    fakeAxios.onGet("/todolist").reply(200, [{id: 1}]);

                    await store.dispatch(loadTodolist());

                    expect(todoSlice().loading).toBe(false);
                })

                it("should be false if the server return an error", async () =>{
                    fakeAxios.onGet("/todolist").reply(500);

                    await store.dispatch(loadTodolist());

                    expect(todoSlice().loading).toBe(false);
                })
            })
        })
    })

})

