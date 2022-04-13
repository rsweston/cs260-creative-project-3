<template>
  <div class="wrapper">
    <h1>Quests</h1>
    <div class="quest" v-bind:class="{ completed : questIsComplete(quest.id) }"
                       v-for="quest in quests" :key="quest.id" @click="getQuest(quest.id)">
      <h2>{{quest.name}}</h2>
      <div v-if="questIsComplete(quest.id)">
        <p>Congratulations! Quest is complete!</p>
      </div>
      <div v-else>
        <p>Complete by {{quest.date}}</p>
      </div>
    </div>

    <button class="add-button" @click="addQuest">Add Quest</button>
    <form v-show="showQuestForm" @submit.prevent="createQuest">
      <input type="text" placeholder="Quest Name" v-model="name">
      <input type="text" placeholder="January 1 2022" v-model="date">
      <button class="form-button" type="submit">Add</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'QuestList',
  props: {
    quests: Array
  },
  data() {
    return {
      showQuestForm: false,
      name: '',
      date: '',
    }
  },
  methods: {
    getQuest(id) {
      this.$emit('clicked', id);
    },
    addQuest() {
      this.showQuestForm = !this.showQuestForm;
    },
    createQuest() {
      this.showQuestForm = false;
      var newid = this.$root.$data.quests.length + 1;
      if (this.name !== '' && this.date !== '') {
        this.$root.$data.quests.push({
          id: newid,
          name: this.name,
          date: this.date,
          completed: false,
          tasks: [],
          subquests: []
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

h1 {
  margin: 0;
}

.quest {
  width: 100%;
  background-color: #5FCBD3;
  margin: 20px 0 0 0;
  padding: 15px;
  border-radius: 8px;
  color: #1B150E;
  cursor: pointer;
}

.completed {
  background-color: #96A2B0;
}

.quest:hover {
  background-color: #96A2B0;
  transition-duration: 0.2s;
}

h2 {
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  font-weight: bold;
}

p {
  margin: 0;
  padding: 0;
  font-size: 1em;
}

button {
  border: none;
  background-color: #96A2B0;
  color: #1B150E;
  margin: 20px 0 0 0;
  padding: 8px 10px;
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

@media only screen and (min-width: 961px) {
  .quest {
    padding: 20px;
  }

  form {
    width: 65%;
  }
}
</style>
