<template>
<div class="home-wrapper-1">
  <div class="home-wrapper-2" v-if="empty">
    <QuestList :quests="quests" @clicked="getQuest"/>
  </div>
  <div class="home-wrapper-2" v-else>
    <QuestInfo :quests="quest[0]" @closed="onCloseQuest"/>
  </div>
</div>
</template>

<script>
import QuestList from "../components/QuestList.vue"
import QuestInfo from "../components/QuestInfo.vue"
export default {
  name: 'QuestsView',
  components: {
    QuestList,
    QuestInfo
  },
  data() {
    return {
      quest: [],
    }
  },
  computed: {
    quests() {
      return this.$root.$data.quests;
    },
    empty() {
      if (this.quest.length === 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    getQuest(id) {
      this.quest.push(this.$root.$data.quests.filter(obj => {
        return obj.id === id
      }));
    },
    onCloseQuest() {
      this.quest = [];
    }
  }
}
</script>

<style scoped>
.home-wrapper-1 {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

.home-wrapper-2 {
  width: 100%;
}

@media only screen and (min-width: 961px) {
  .home-wrapper-1 {
    width: 600px;
    margin-top: 25px;
  }
}
</style>
