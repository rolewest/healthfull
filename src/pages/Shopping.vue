<template>
  <!--
Categories:
A+ Whole Plant Foods
A Plant Foods Slightly Processed
A- Plant Based even more processed
B Plant Based junk food
C Oils
D Dairy & Eggs
F Meat Pop Candy Sugar Shit.


Should eat more A, Less B, and Avoid C and below

then add up all to find overall grade
A+100;A92;A-85
B+80;B72;B-65
C+60;C52;C+45
D+40;D32;D-25
F+20;F12;F5;
 -->

  <div>
    <p class="q-pa-sm text-center">
      Your custom shopping list based on your health goals and your
      prescription.
    </p>
  </div>
  <q-dialog v-model="confirmDelete">
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="mdi-delete-empty" color="negative" text-color="white" />
        <span class="q-ml-sm">Delete all saved shopping info?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="info" v-close-popup />
        <q-btn
          flat
          label="DELETE ALL"
          @click="clearList()"
          color="negative"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <div class="follow-me border-block" :class="gradeColor">
    <span v-html="getAverageGrade()"></span>
  </div>

  <div class="q-pa-md" style="">
    <q-list bordered padding>
      <q-item-label header class="text-h4 text-center text-info"
        >My Shopping<q-item-label caption
          >Try to eat more A foods, less B foods, and avoid C and below
          foods</q-item-label
        >
      </q-item-label>
      <div class="text-center">
        <q-btn
          label="Empty My Cart"
          color="negative"
          @click="confirmDelete = true"
          size="xs"
        /><br /><label>
          <input
            type="text"
            @keyup="searchForFood()"
            v-model="searchText"
            placeholder="Find Item"
            aria-label="Find Item"
          />
        </label>
      </div>

      <!-- Loop -->
      <div v-for="row in resultFoods" :key="row.title">
        <q-separator spaced v-show="row.data[0]?.list.length" />
        <q-item-label
          header
          :class="`title-${row.color}`"
          class="text-h4 hold-foodscore"
          v-show="row.data[0]?.list.length"
          >{{ row.title }}<q-item-label caption>{{ row.caption }}</q-item-label>
          <q-item-section class="food-type" right top>
            {{ getScoreFor(row.grade) }}</q-item-section
          >
        </q-item-label>

        <q-item
          tag="label"
          v-ripple="{ color: `${row.color}` }"
          v-for="subrow in row.data"
          :key="subrow.section"
          class="border-bottom"
        >
          <q-item-section>
            <q-item-label>{{ subrow.section }}</q-item-label
            ><em>{{ subrow.nb }}</em>
            <q-item-label caption>
              <span v-html="subrow.list"></span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-btn
              color="positive hiddenx"
              @click="addToFood(row.grade, row.value)"
              >+</q-btn
            >
            <q-btn
              color="negative"
              @click="addToFood(row.grade, -row.value)"
              v-ripple:negative
              >-</q-btn
            >
          </q-item-section>
          <br />
        </q-item>
      </div>
    </q-list>

    <!-- Loop -end -->
  </div>
</template>

<script>
import { LocalStorage } from "quasar";
import { ref } from "vue";
export default {
  data() {
    return {
      foodScore: LocalStorage.getItem("user.shopping.score") || 0,
      foodsAp: LocalStorage.getItem("user.shopping.foods.grade.ap") || 0,
      foodsA: LocalStorage.getItem("user.shopping.foods.grade.a") || 0,
      foodsB: LocalStorage.getItem("user.shopping.foods.grade.b") || 0,
      foodsC: LocalStorage.getItem("user.shopping.foods.grade.c") || 0,
      foodsD: LocalStorage.getItem("user.shopping.foods.grade.d") || 0,
      foodsF: LocalStorage.getItem("user.shopping.foods.grade.f") || 0,
      foodsFm: LocalStorage.getItem("user.shopping.foods.grade.fm") || 0,
      gradeColor: "",
      confirmDelete: ref(false),
      allFoods: [],
      searchText: "",
      resultFoods: [],
    };
  },
  methods: {
    searchForFood() {
      let list = this.allFoods;
      let text = this.searchText;
      console.log(`doing search for: '${text}'`);
      // find matches
      let search = list.map((element) => {
        return {
          ...element,
          data: element.data.filter((subElement) =>
            subElement.list.toLowerCase().includes(text.toLowerCase())
          ),
        };
      });
      // highlight matches
      if (text) {
        let asText = JSON.stringify(search);
        search.forEach((row) => {
          console.log("DaTa:", row.data[0]?.list);

          let highlightMatch = row.data[0]?.list
            .toLowerCase()
            .replaceAll(
              text.toLowerCase(),
              `<b class='highlight-search'>${text}</b>`
            );
          asText = asText.replaceAll(row.data[0]?.list, highlightMatch);
          console.log("FIXED:", asText);
        });
        search = JSON.parse(asText);
      }

      // if (text && search.length > 0) {
      //   let fixr = JSON.stringify(search).replaceAll(text, `<b>${text}</b>`);
      //   search = JSON.parse(fixr);
      // }

      // if (text && search.length > 0) {
      //   let fxc = JSON.stringify(search.data[0]?.list).replaceAll(
      //     text,
      //     `<b>${text}</b>`
      //   );
      //   search = fxc;
      // }

      this.resultFoods = search;
      console.log("DATA:", search);
      console.log("SearchOUT:", search, search.length);
    },

    loadFoodLists(data, error = null) {
      if (error) {
        alert(error.message);
      }
      this.allFoods = data.allFoods;
      this.resultFoods = this.allFoods; // for searching
    },
    getAllFoodItems() {
      fetch("https://rmatter.com/health-full/data/index.php?loc=shopping")
        .then((res) => res.json())
        .then((data) => this.loadFoodLists(data))
        .catch((err) => console.log("ERROR", err));
    },
    getScoreFor(grade) {
      return eval(`this.foods${grade}`);
    },
    clearList() {
      this.foodScore = 0;
      this.foodsAp = 0;
      this.foodsA = 0;
      this.foodsB = 0;
      this.foodsC = 0;
      this.foodsD = 0;
      this.foodsF = 0;
      this.foodsFm = 0;
      this.gradeColor = "";
      this.saveGrades();
    },
    saveGrades() {
      LocalStorage.set("user.shopping.score", this.foodScore);
      LocalStorage.set("user.shopping.foods.grade.ap", this.foodsAp);
      LocalStorage.set("user.shopping.foods.grade.a", this.foodsA);
      LocalStorage.set("user.shopping.foods.grade.b", this.foodsB);
      LocalStorage.set("user.shopping.foods.grade.c", this.foodsC);
      LocalStorage.set("user.shopping.foods.grade.d", this.foodsD);
      LocalStorage.set("user.shopping.foods.grade.f", this.foodsF);
      LocalStorage.set("user.shopping.foods.grade.fm", this.foodsFm);
    },
    getAverageGrade() {
      let grade =
        this.foodScore /
        (this.foodsAp +
          this.foodsA +
          (this.foodsB + this.foodsC * 2) +
          this.foodsD * 2.5 +
          (this.foodsF + this.foodsFm * 3));
      let letter = "";

      // A+100;A92;A-85
      // B+80;B72;B-65
      // C+60;C52;C+45
      // D+40;D32;D-25
      // F+20;F12;F5;
      if (grade >= 93) letter = "A+";
      if (grade <= 92) letter = "A";
      if (grade <= 85) letter = "A-";
      if (grade <= 80) letter = "B+";
      if (grade <= 72) letter = "B";
      if (grade <= 65) letter = "B-";
      if (grade <= 60) letter = "C+";
      if (grade <= 52) letter = "C";
      if (grade <= 45) letter = "C-";
      if (grade <= 40) letter = "D+";
      if (grade <= 32) letter = "D";
      if (grade <= 25) letter = "D-";
      if (grade <= 20) letter = "F+";
      if (grade <= 12) letter = "F";
      if (grade <= 5) letter = "F-";

      if (grade > 80) this.gradeColor = "bg-positive";

      if (grade <= 80 && grade >= 61) this.gradeColor = "bg-warning";
      if (grade <= 60) this.gradeColor = "bg-negative";
      this.saveGrades();
      if (grade > 0) return `Grade: ${letter} <br/> ${grade.toFixed(1)}%`;
      return `0%`;
    },
    addToFood(type = "Ap", value = 0) {
      if (this.getScoreFor(type) <= 0 && value < 0) return;
      if (value < 0 && this.foodScore > 0) {
        this.foodScore += value;
      } else if (value > 0) {
        this.foodScore += value;
      }
      if (type == "Ap") {
        if (value > 0) this.foodsAp += 1;
        if (value < 0 && this.foodsAp > 0) this.foodsAp -= 1;
      }
      if (type == "A") {
        if (value > 0) this.foodsA += 1;
        if (value < 0 && this.foodsA > 0) this.foodsA -= 1;
      }
      if (type == "B") {
        if (value > 0) this.foodsB += 1;
        if (value < 0 && this.foodsB > 0) this.foodsB -= 1;
      }
      if (type == "C") {
        if (value > 0) this.foodsC += 1;
        if (value < 0 && this.foodsC > 0) this.foodsC -= 1;
      }
      if (type == "D") {
        if (value > 0) this.foodsD += 1;
        if (value < 0 && this.foodsD > 0) this.foodsD -= 1;
      }
      if (type == "F") {
        if (value > 0) this.foodsF += 1;
        if (value < 0 && this.foodsF > 0) this.foodsF -= 1;
      }
      if (type == "Fm") {
        if (value > 0) this.foodsFm += 1;
        if (value < 0 && this.foodsFm > 0) this.foodsFm -= 1;
      }

      // let curVal = eval("this.foods" + type) * 1;
      // if (value >= 0) {
      //   curVal = parseInt(curVal) + 1;
      // } else {
      //   curVal = parseInt(curVal) * 1 - 1;
      // }

      // console.log("FOODSCORE", type, curVal, value, this.foodScore);
    },
  },
  mounted() {
    this.getAllFoodItems();
  },
};
</script>

<style lang="scss">
s {
  font-size: 1em;
}
.q-item details {
  font-size: 1em;
}
.food-type {
  // right: -2em;
  top: 1em;
  // position: absolute;
  box-shadow: initial !important;
  color: $dark;
  display: block;
  position: relative;
  text-align: right;
}
.food-type::before {
  content: "Total:";
}
.hold-foodscore {
  position: relative;
  color: $dark;
}

.border-block {
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
}
.border-block-info {
  box-shadow: 0px -4px 0px 0px $info, 0px 5px 0px 0px $info,
    -4px 0px 0px 1px$info, 4px 0px 0px 1px $info;
}
.border-block-accent {
  box-shadow: 0px -4px 0px 0px $accent, 0px 5px 0px 0px $accent,
    -4px 0px 0px 1px$accent, 4px 0px 0px 1px $accent;
}
.border-block-positive {
  box-shadow: 0px -4px 0px 0px $positive, 0px 5px 0px 0px $positive,
    -4px 0px 0px 1px$positive, 4px 0px 0px 1px $positive;
}
.border-block-negative {
  box-shadow: 0px -4px 0px 0px $negative, 0px 5px 0px 0px $negative,
    -4px 0px 0px 1px$negative, 4px 0px 0px 1px $negative;
}
.border-block-warning {
  box-shadow: 0px -4px 0px 0px $warning, 0px 5px 0px 0px $warning,
    -4px 0px 0px 1px$warning, 4px 0px 0px 1px $warning;
}
.border-block-primary {
  box-shadow: 0px -4px 0px 0px $primary, 0px 5px 0px 0px $primary,
    -4px 0px 0px 1px$primary, 4px 0px 0px 1px $primary;
}
.border-bottom {
  border-bottom: 1px solid $accent;
  // box-shadow: 0px 0px 0px 0px, 0px 5px 0px 0px $primary,
  //   -4px 0px 0px 1px$primary, 4px 0px 0px 1px $primary;
  margin: 1em;
}
.follow-me {
  position: sticky;
  position: -webkit-sticky;
  top: 75px; /* required */
  width: 50%;
  margin: 0 auto;
  // background: $accent;
  text-align: center;
  color: white;
  z-index: 100;
}
.hiddenx {
  display: none;
}
.highlight-search {
  background: $info;
  color: white;
  // animation: blinker 2s steps(1, end) infinite;
  // animation: border_anim 1s linear infinite;

  border-bottom: 2px double $warning;
  padding: 1px;
}
</style>
