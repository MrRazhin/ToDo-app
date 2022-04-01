<template>
    <div class="todolist">
        <div class="todolist__block">
            <div class="block-head">
                <span></span>
                <h2 class="block__title">
                To Do
                </h2>
                <div class="block__counter">
                {{ myList.length }}
                </div>
            </div>

            <div v-show="myList.length == 0" class="plus-block"><img src="img/plus.svg" alt=""></div>


            <draggable v-model="myList" class="block-content" draggable=".todo-item" group="a">
                <TodoItem v-for="todo in myList" :key="todo.id" :todo="todo" :list="1"/>
            </draggable>
        </div>

        <div class="todolist__block">
            <div class="block-head">
                <span></span>
                <h2 class="block__title">
                In progress
                </h2>
                <div class="block__counter">
                {{ progressList.length }}
                </div>
            </div>

            <div v-show="progressList.length == 0" class="plus-block"><img src="img/plus.svg" alt=""></div>

            <draggable v-model="progressList" class="block-content" draggable=".todo-item" group="a">
                <TodoItem v-for="todo in progressList" :key="todo.id" :todo="todo" :list="2"/>
            </draggable>
        </div>
        <div class="todolist__block">
            <div class="block-head">
                <span></span>
                <h2 class="block__title">
                Completed
                </h2>
                <div class="block__counter">
                {{ completeList.length }}
                </div>
            </div>

            <div class="cover-block">
                <div v-show="completeList.length == 0" class="plus-block"><img src="img/plus.svg" alt=""></div>
            </div>
                
            <draggable v-model="completeList" class="block-content" draggable=".todo-item" group="a">
                <TodoItem v-for="todo in completeList" :key="todo.id" :todo="todo" :list="3"/>
            </draggable>
        </div>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem';
import draggable from 'vuedraggable';

//this.$store.getters.todoList

export default {
    components: { TodoItem, draggable },
    data() {
        return {
            todoList: this.$store.getters.todoList,
        }
    },

    computed: {
        myList: {
            get() {
                return this.$store.getters.todoList
            },
            set(value) {
                this.$store.dispatch('updateList',{value, list: 'tasks'});
                console.log('tasks');
            }
        },
        progressList: {
            get() {
                return this.$store.getters.progressList
            },
            set(value) {
                this.$store.dispatch('updateList',{value, list: 'progress'});
                console.log('progress');
            }
        },
        completeList: {
            get() {
                return this.$store.getters.completeList
            },
            set(value) {
                this.$store.dispatch('updateList',{value, list: 'complete'});
                console.log('complete');
            }
        }
    }
}
</script>