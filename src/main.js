import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  quests: [{
    id: 1,
    name: "run a marathon",
    date: "May 30 2022",
    completed: false,
    tasks: [{
      name: "sign up for the marathon",
      date: "April 27 2022",
      completed: false,
    }, {
      name: "buy a water bottle",
      date: "May 15 2022",
      completed: false,
    }, {
      name: "run in the marathon",
      date: "May 30 2022",
      completed: false,
    }],
    subquests: [{
      name: "complete marathon training",
      date: "April 30 2022",
      completed: false,
      tasks: [{
        name: "finish week 1 schedule",
        date: "April 9 2022",
        completed: false,
      }, {
        name: "finish week 2 schedule",
        date: "April 16 2022",
        completed: false,
      }, {
        name: "finish week 3 schedule",
        date: "April 23 2022",
        completed: false,
      }, {
        name: "finish week 4 schedule",
        date: "April 30 2022",
        completed: false,
      }]
    }]
  }, {
    id: 2,
    name: "graduate college",
    date: "December 30 2022",
    completed: false,
    tasks: [{
      name: "apply for graduation",
      date: "April 19 2022",
      completed: false,
    }, {
      name: "pay tuition for next semester",
      date: "September 1 2022",
      completed: false,
    }],
    subquests: []
  }, {
    id: 3,
    name: "buy a new car",
    date: "June 6 2022",
    completed: false,
    tasks: [{
      name: "save up enough money",
      date: "June 1 2022",
      completed: false,
    }, {
      name: "buy the car",
      date: "June 6 2022",
      completed: false,
    }],
    subquests: [{
      name: "decide what model of car to get",
      date: "May 15 2022",
      completed: false,
      tasks: [{
        name: "ask dad what he thinks",
        date: "April 30 2022",
        completed: false,
      }, {
        name: "research within budget",
        date: "May 5 2022",
        completed: false,
      }]
    }]
  }, {
    id: 4,
    name: "write a book",
    date: "December 30 2022",
    completed: false,
    tasks: [{
      name: "buy a notebook",
      date: "April 20 2022",
      completed: false,
    }],
    subquests: [{
      name: "finish outline",
      date: "June 15 2022",
      completed: false,
      tasks: [{
        name: "finish story skeleton",
        date: "April 30 2022",
        completed: false,
      }, {
        name: "finish character sketches",
        date: "May 15 2022",
        completed: false,
      }, {
        name: "finish world sketches",
        date: "May 30 2022",
        completed: false,
      }, {
        name: "finish scene blocking",
        date: "June 15 2022",
        completed: false,
      }]
    }, {
      name: "finish first draft",
      date: "September 15 2022",
      completed: false,
      tasks: [{
        name: "finish part 1",
        date: "July 15 2022",
        completed: false,
      }, {
        name: "finish part 2",
        date: "August 15 2022",
        completed: false,
      }, {
        name: "finish part 3",
        date: "September 15 2022",
        completed: false,
      }]
    }, {
      name: "finish final draft",
      date: "December 30 2022",
      completed: false,
      tasks: [{
        name: "finish writing the draft",
        date: "December 15 2022",
        completed: false,
      }, {
        name: "submit story for editing",
        date: "December 30 2022",
        completed: false,
      }]
    }]
  }]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')