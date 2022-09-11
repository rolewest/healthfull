<template>
  <div class="q-ma-sm">
    <div id="buildTitle" ref="buildTitle" class="title-h4 typeOut">
      Build A Training Regime
    </div>

    <div class="questItem">
      <!--  -->
      <div class="table-responsive">
        <div class="paperSheet shadow">
          <div class="q-pa-md">
            <q-table
              grid
              size="xl"
              title="Found Tomes"
              :rows="rows"
              :columns="columns"
              row-key="name"
              hide-header
              :selected-rows-label="getSelectedString"
              selection="multiple"
              v-model:selected="selected"
            />
          </div>
        </div>
        <div class="row justify-center">
          <q-btn @click="showSaveDialog = true" color="info">
            Save Setlist
          </q-btn>
        </div>
        <!-- alert window for save list -->
        <q-dialog v-model="showSaveDialog">
          <q-card>
            <q-card-section>
              <div class="text-h6">
                <q-icon name="mdi-folder-heart" size="2em"></q-icon>
                {{ popupTitle || "Save Your Setlist?" }}
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{
                popupCaption ||
                "Are you sure? This will overwrite any saved setlists, currently."
              }}
            </q-card-section>

            <q-card-actions align="right">
              <div v-if="popupTitle != 'Saved!'">
                <q-btn flat label="Cancel" color="negative" v-close-popup />
                <q-btn
                  flat
                  label="Let's Save it!"
                  @click="saveSetList()"
                  color="primary"
                  v-close-popup
                />
              </div>
              <div v-else>
                <!-- saved -->
                <q-btn
                  flat
                  label="Close"
                  color="negative"
                  v-close-popup
                  @click="
                    popupTitle = 'Save Your Setlist?';
                    popupCaption =
                      'Are you sure? This will overwrite any saved setlists, currently.';
                    showSaveDialog = false;
                  "
                />
                <q-btn
                  flat
                  label="Let's Do it!"
                  @click="
                    this.$router.push({
                      name: 'player',
                    })
                  "
                  color="positive"
                  v-close-popup
                />
              </div>
            </q-card-actions>
          </q-card>
        </q-dialog>
        <!--  -->
      </div>
    </div>
  </div>
  <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div> -->
</template>
<!-- setList will need to have steps added -->
<script>
import { ref } from "vue";
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "difficulty",
    label: "Difficulty",
    field: "difficulty",
    sortable: true,
  },
  {
    name: "mobility",
    label: "Mobility",
    field: "mobility",
    sortable: true,
  },

  { name: "cals", label: "Calories in 1 Min", field: "cals" },
  { name: "tags", label: "Tags", field: "tags" },
  {
    name: "points",
    label: "Points @ Level " + window.localStorage.getItem("userLevel"),
    field: "points",
  },

  // { name: "protein", label: "Protein (g)", field: "protein" },
];

const rows = [];
// do more/harder to get more points
export default {
  data() {
    const selected = ref([]);
    return {
      showSaveDialog: false,
      popupCaption:
        "Are you sure? This will overwrite any saved setlists, currently.",
      popupTitle: "Save your setlist?",
      selected,
      columns,
      rows,
      getSelectedString() {
        return selected.value.length === 0
          ? ""
          : `${selected.value.length} set${
              selected.value.length > 1 ? "s" : ""
            } selected of ${rows.length}`;
      },
      workingSetlist: [],
      setList: [
        {
          id: 1,
          video: { id: "azv8eJgoGLk", start: 44, end: 107, mute: 0 },
          title: "Seated Chair March",
          caption: "Low Impact Cardio",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 6, cp: 6, xp: 20, sp: 1 },
          tags: ["Cardio", "Low Impact", "Sitting Only", "All Ages", "Tone"],
          baseReps: 5,
          mobility: 2,
          mets: 2.1,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit on the front half of the chair</li>
            <li>Keep your back as straight as you can</li>
            <li>March by lifting up your knees and moving your arms</li>
            <li>Go at your own pace</li>
            <li>If you feel you can do 1 extra rep, go for it!</li>

            </ol>`,
        },
        {
          id: 2,
          video: { id: "Z1IvxI8YcUM", start: 100, end: 10000 },
          title: "Seated Arm Raise",
          caption: "Low Impact Cardio",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 3, cp: 1, xp: 11, sp: 4 },
          tags: [
            "Cardio",
            "Low Impact",
            "Sitting Only",
            "All Ages",
            "Ab Workout",
          ],
          baseReps: 5,
          mobility: 2,
          mets: 2,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit at the back of the chair</li>
            <li>Keep your back as straight as you can</li>
            <li>Lift one arm directly above your head</li>
            <li>Return your arm to your side</li>
            <li>Repeat with the opposite side
              <ul>
                <li>this counts as 1 rep (repitition)</li>
              </ul>
            </li>
            <li>Go at your own pace</li>
            <li>If you feel you can do 1 extra rep, go for it!</li>

            </ol>`,
        },
        {
          id: 3,
          video: { id: "azv8eJgoGLk", start: 308, end: 374 },
          title: "Seated Leg Extension",
          caption: "Low Impact Cardio",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 7, cp: 1, xp: 15, sp: 5 },
          tags: [
            "Lower Body",
            "Full Body",
            "Ab Workout",
            "Low Impact",
            "Sitting Only",
            "All Ages",
            "Legs",
            "Glutes",
            "Strength",
            "",
          ],
          baseReps: 5,
          mobility: 2,
          mets: 3.7,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit at the front half of your chair</li>
            <li>Grab the side of the chair, near the back with both hands</li>
            <li>Lean back to engage your core</li>
            <li>From the knee lift one leg
              <ul>
                <li>for a real challenge use both legs</li>
              </ul>
            </li>
            <li>Repeat with the opposite side
              <ul>
                <li>this counts as 1 rep (repitition)</li>
              </ul>
            </li>
            <li>Go at your own pace</li>
            <li>If you feel you can do 1 extra rep, go for it!</li>

            </ol>`,
        },
        {
          id: 4,
          video: { id: "azv8eJgoGLk", start: 308, end: 374 },
          title: "Seated Leg Lift",
          caption: "Low Impact Cardio",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 7, cp: 1, xp: 15, sp: 5 },
          tags: [
            "Cardio",
            "Low Impact",
            "Sitting Only",
            "All Ages",
            "Legs",
            "Glutes",
            "Strength",
            "",
          ],
          baseReps: 5,
          mobility: 2,
          mets: 3,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit at the back of the chair</li>
            <li>Keep your back as straight as you can</li>
            <li>Lift one arm directly above your head</li>
            <li>Return your arm to your side</li>
            <li>Repeat with the opposite side
              <ul>
                <li>this counts as 1 rep (repitition)</li>
              </ul>
            </li>
            <li>Go at your own pace</li>
            <li>If you feel you can do 1 extra rep, go for it!</li>

            </ol>`,
        },
      ],
    };
  },
  methods: {
    mobilityConverter(type = 0, data) {
      const values = [
        "In bed only",
        "Sitting & in bed only",
        "Sitting only",
        "Sitting, standing & in bed only",
        "Sitting & Standing only",
        "Standing only",
        "Standing & lying on the floor",
        "On the floor only",
        "Any Place or Position",
        "Resistance / Calisthenics Only",
        "No mobility issues",
      ];
      if (type == 0) return values[data];
    },
    convertMetToCal(activityValue = 0.9, minutes = 1, type = 0) {
      // todo: delete this duplicated code/function (in BaseMeasure as getMetToCal)
      let userWeight =
        this.userWeight || window.localStorage.getItem("userWeight");
      let met = (activityValue * 3.5 * userWeight) / 200; // calories burnt/minute
      if (type === 0) {
        return (met * minutes).toFixed(2);
      }
    },
    saveSetList() {
      let buildSetlist = [];
      for (let index = 0; index < this.selected.length; index++) {
        // let withStepNum = this.selected[index].alldata["step"];
        buildSetlist.push(this.selected[index].alldata);
        buildSetlist[index]["step"] = index + 1;
        console.log("selected:", this.selected[index].alldata);
      }
      // console.log("fixdd:", buildSetlist[index]["step"]);
      window.localStorage.setItem(
        "userCurrentSetlist",
        JSON.stringify(buildSetlist)
      );
      console.log(
        "saved setlist:",
        this.workingSetlist,
        "localastore",
        window.localStorage.getItem("userCurrentSetlist")
      );
      this.popupTitle = "Saved!";
      this.popupCaption = "Your set list was saved!.";
    },
    initTableData() {
      this.rows = [];
      const alldata = this.setList;
      for (let index = 0; index < alldata.length; index++) {
        console.log(alldata[index]);
        this.rows.push({
          name: alldata[index].title,
          alldata: alldata[index],
          mobility: this.mobilityConverter(0, alldata[index].mobility),
          difficulty: alldata[index].mobility,
          cals: this.convertMetToCal(alldata[index].mets, 1),
          points: `HP:${alldata[index].points.hp} | CP:${alldata[index].points.cp} | XP:${alldata[index].points.xp} | SP:${alldata[index].points.sp}`,
          tags: JSON.stringify(alldata[index].tags),
        });
      }
    },
    typeText(mode, elm, delay = 0, rate = 10, stopcursor = "false") {
      if (mode == 0) {
        //document.getElementById(elm).style.opacity='0';

        let alltxt = this.$refs[elm].innerHTML;
        console.log("####:", alltxt);
        let atx = this.$refs[elm].innerHTML;
        this.$refs[elm].innerHTML = "";
        this.$refs[elm].classList.remove("hidden");
        let l = alltxt.length;
        let i = 0;

        setTimeout(function () {
          let pl = setInterval(function () {
            if (i <= l) {
              if (
                this.$refs[elm].innerHTML != "_" &&
                this.$refs[elm].innerHTML != ""
              ) {
                //  document.getElementById(elm).style.opacity='1';
              } else {
                //  document.getElementById(elm).innerHTML='_';
              }

              if (
                alltxt.substr(0, i).substr(i - 1, i) != "<" &&
                alltxt.substr(0, i).substr(i - 1, i) != "/"
              ) {
                //alert(alltxt.substr(0,i));
                this.$refs[elm].innerHTML = alltxt.substr(0, i);
              } else {
                //found < or </
              }

              i++;
            } else {
              clearInterval(pl);
              if (stopcursor == "true") {
                setTimeout(function () {
                  this.$refs[elm].classList.add("notransition");
                  this.$refs[elm].style.border = "";
                  this.$refs[elm].offsetHeight; // Trigger a reflow, flushing the CSS changes
                }, 2500);
              }
            }
          }, rate); //
        }, delay);
      }
    },
  },
  mounted() {
    console.log("vidddd:", window.localStorage.getItem("userCurrentSetlist"));
    this.initTableData();
    // this.typeText(0, "buildTitle", 1000, 100, "true");
  },
};
</script>

<style lang="scss">
.notransition:after {
  animation: none !important;
  content: "\00a0" !important;
  //border: none !important;
}
.typeOut {
  // display: none;
}
.typeOut:after {
  animation: blinker 1s infinite;
  /* color:rgba(255,165,0,.75); */
  color: $positive;
  content: "_";
  font-weight: 400;

  /* border-right:2px solid rgba(255,165,0,.75); */
}
</style>
