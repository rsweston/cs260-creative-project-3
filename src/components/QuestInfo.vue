<template>
  <div class="wrapper">
    <div class="quest" v-for="quest in quests" :key="quest.id">

      <div class="header-info">
        <h1>{{quest.name}}</h1>
        <div v-if="questIsComplete(quest.id)">
          <p>Congratulations! Quest is complete!</p>
        </div>
        <div v-else>
          <p>Complete by {{quest.date}}</p>
        </div>
      </div>

      <div class="todo-info">
        <div class="h2-header">
          <div class="container">
            <h2>To Do</h2>
            <p v-show="tasksAreComplete(quest.id)">Congratulations! Tasks are complete!</p>
          </div>
          <button class="add-button" @click="addItem">Add Task</button>
        </div>
        <ul>
          <li class="items" v-for="(item, index) in quest.tasks" :key="item.name">
            <label>
              {{item.name}}
              <input type="checkbox" v-model="item.completed" />
              <span class="checkmark"></span>
            </label>
            <button class="delete-button" @click="deleteItem(quest.id, index)">X</button>
          </li>
          <form v-show="showTodoForm" @submit.prevent="createItem(quest.id)">
            <input type="text" placeholder="Task Name" v-model="name">
            <input type="text" placeholder="January 1 2022" v-model="date">
            <button class="form-button" type="submit">Add</button>
          </form>
        </ul>
      </div>

      <div class="subquests">

        <div class="subquest" v-for="(subquest, index) in quest.subquests" :key="subquest.name">
          <div class="h2-header">
            <div class="container">
              <h2>{{subquest.name}}</h2>

              <div v-if="subQuestIsComplete(quest.id, index)">
                <p>Congratulations! SubQuest is complete!</p>
              </div>
              <div v-else>
                <p>Complete by {{subquest.date}}</p>
              </div>
            </div>
            <button class="add-button" @click="addSubItem(subquest.name)">Add Task</button>
          </div>
          <ul>
            <li class="items" v-for="(item, i) in subquest.tasks" :key="item.name">
              <label>
                {{item.name}}
                <input type="checkbox" v-model="item.completed" />
                <span class="checkmark"></span>
              </label>
              <button class="delete-button" @click="deleteSubQuestItem(quest.id, index, i)">X</button>
            </li>
            <form v-show="showForm(subquest.name)" @submit.prevent="createSubItem(quest.id, index)">
              <input type="text" placeholder="Task Name" v-model="name">
              <input type="text" placeholder="January 1 2022" v-model="date">
              <button class="form-button" type="submit">Add</button>
            </form>
          </ul>
        </div>

        <button class="add-subquest-button" @click="addSubQuest">Add SubQuest</button>
        <form v-show="showSubQuestForm" @submit.prevent="createSubQuest(quest.id)">
          <input type="text" placeholder="SubQuest Name" v-model="name">
          <input type="text" placeholder="January 1 2022" v-model="date">
          <button class="form-button" type="submit">Add</button>
        </form>

      </div>
    </div>
    <button class="back-button" @click="close">Back to Quests</button>
  </div>
</template>

<script>
export default {
  name: 'QuestInfo',
  props: {
    quests: Array
  },
  data() {
    return {
      showTodoForm: false,
      showSubQuestForm: false,
      showSubTaskForm: '',
      name: '',
      date: '',
    }
  },
  methods: {
    close() {
      this.$emit('closed');
    },
    addItem() {
      this.showTodoForm = !this.showTodoForm;
    },
    createItem(id) {
      this.showTodoForm = false;
      if (this.name !== '' && this.date !== '') {
        this.$root.$data.quests[id-1].tasks.push({
          name: this.name,
          date: this.date,
          completed: false,
        });
      }
      this.name = '';
      this.date = '';
    },
    addSubQuest() {
      this.showSubQuestForm = !this.showSubQuestForm;
    },
    createSubQuest(id) {
      this.showSubQuestForm = false;
      if (this.name !== '' && this.date !== '') {
        this.$root.$data.quests[id-1].subquests.push({
          name: this.name,
          date: this.date,
          completed: false,
          tasks: []
        });
      }
      this.name = '';
      this.date = '';
    },
    addSubItem(key) {
      if (this.showSubTaskForm === '') {
        this.showSubTaskForm = key;
      } else {
        this.showSubTaskForm = '';
      }

    },
    showForm(key) {
      if (this.showSubTaskForm === key) {
        return true;
      }
      return false;
    },
    createSubItem(id, index) {
      this.showSubTaskForm = '';
      if (this.name !== '' && this.date !== '') {
        this.$root.$data.quests[id-1].subquests[index].tasks.push({
          name: this.name,
          date: this.date,
          completed: false
        });
      }
      this.name = '';
      this.date = '';
    },
    tasksAreComplete(id) {
      for (var task of this.$root.$data.quests[id-1].tasks) {
        if (task.completed === false) {
          return false;
        }
      }
      return true;
    },
    subQuestIsComplete(id, index) {
      for (var task of this.$root.$data.quests[id-1].subquests[index].tasks) {
        if (task.completed === false) {
          this.$root.$data.quests[id-1].subquests[index].completed = false;
          return false;
        }
      }
      this.$root.$data.quests[id-1].subquests[index].completed = true;
      return true;
    },
    questIsComplete(id) {
      if (!this.tasksAreComplete(id)) {
        this.$root.$data.quests[id-1].completed = false;
        return false;
      }
      for (var subquest of this.$root.$data.quests[id-1].subquests) {
        if (subquest.completed === false) {
          this.$root.$data.quests[id-1].completed = false;
          return false;
        }
      }
      this.$root.$data.quests[id-1].completed = true;
      return true;
    },
    deleteItem(id, index) {
      if (index > -1) {
        this.$root.$data.quests[id-1].tasks.splice(index, 1);
      }
    },
    deleteSubQuestItem(id, i, index) {
      if (index > -1) {
        this.$root.$data.quests[id-1].subquests[i].tasks.splice(index, 1);
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.quest {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h1 {
  font-size: 2em;
  margin: 0;
}

p {
  font-size: 1em;
  margin: 0 0 5px 2px;
}

.todo-info {
  width: 100%;
  background-color: #5FCBD3;
  margin: 20px 0 0 0;
  padding: 15px;
  border-radius: 8px;
  color: #1B150E;
}

.h2-header {
  display: flex;
  justify-content: space-between;
}

h2 {
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  font-weight: bold;
}

button {
  border: none;
  background-color: #96A2B0;
  color: #1B150E;
  margin: 0 0 0 5px;
  padding: 5px 8px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover, .add-button:focus {
  outline: none !important;
  border: none;
  background-color: #1B150E;
  color: #E6EAEF;
  transition-duration: 0.2s;
}

ul {
  margin: 8px 0 0 0;
  list-style: none;
}

li {
  font-size: 1em;
  display: flex;
  align-items: center;
}

.delete-button {
  display: none;
  margin-left: auto;
  padding: 0 5px;
}

li:hover .delete-button {
  display: block;
}

label {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-family: "Lora", serif;
  font-size: 1em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  border: 1px solid #1B150E;
  position: absolute;
  top: 2.5px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 2px;
}

label:hover input~.checkmark {
  background-color: #ccc;
}

label input:checked~.checkmark {
  background-color: #1B150E;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

label input:checked~.checkmark:after {
  display: block;
}

label .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.subquests {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.subquest {
  width: 100%;
  background-color: #5FCBD3;
  margin: 20px 0 0 0;
  padding: 15px;
  border-radius: 8px;
  color: #1B150E;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
}

input {
  width: 100%;
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid #96A2B0;
  border-radius: 8px;
}

input:focus {
  outline: none !important;
  border: 1px solid #1B150E;
}

.form-button {
  margin: 0;
  padding: 6px 10px;
}

.add-subquest-button {
  margin-top: 20px;
}

.back-button {
  margin-top: 35px;
}

@media only screen and (min-width: 961px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>
