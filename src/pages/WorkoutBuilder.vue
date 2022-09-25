<template>
  <div class="q-ma-sm">
    <div id="buildTitle" ref="buildTitle" class="title-h4 typeOut">
      Build A Training Regimen
    </div>

    <div class="questItem">
      <!--  -->
      <div class="table-responsive">
        <div class="shadow">
          <div class="q-pa-md">
            {{ rowCount }} sets in your inventory
            <q-table
              grid
              selected-row-size="xl"
              title="Tomes"
              :rows="rows"
              :columns="columns"
              row-key="name"
              hide-header
              :selected-rows-label="getSelectedString"
              selection="multiple"
              v-model:selected="selected"
              :pagination="initialPagination"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">
                    {{ props.row.name }}
                  </q-td>
                  <q-td key="cals" :props="props">
                    <q-badge color="green" v-if="props.row.cals > 2">
                      {{ props.row.cals }}
                    </q-badge>
                    <q-badge color="red" v-else>
                      {{ props.row.cals }}
                    </q-badge>
                  </q-td>
                  <q-td key="mobility" :props="props">
                    <q-badge color="purple">
                      {{ props.row.mobility }}
                    </q-badge>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
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
                <q-btn label="Cancel" color="negative" v-close-popup />
                <q-btn
                  label="Let's Save it!"
                  @click="saveSetList()"
                  color="info"
                  v-close-popup
                />
              </div>
              <div v-else>
                <!-- saved -->
                <q-btn
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
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 0,
        rowsPerPage: 25,
        // rowsNumber: xx if getting data from a server
      },
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
            } selected`;
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
          reps: 8,
          sets: 3,
          rest: 60,
          mobility: 2,
          mets: 2.1,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit on the front half of the chair</li>
            <li>Keep your back as straight as you can</li>
            <li>March by lifting up your knees and moving your arms</li>
            <li>Go at your own pace</li>
            <li>If you feel you can do ${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra reps, go for it!</li>

            </ol>`,
        },
        {
          id: 2,
          video: { id: "Z1IvxI8YcUM", start: 100, end: 10000 },
          title: "Seated Arm Raise",
          caption: "Low Impact Resistance",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 2, cp: 1, xp: 11, sp: 4 },
          tags: [
            "Resistance Training",
            "Low Impact",
            "Sitting Only",
            "All Ages",
            "Ab Workout",
          ],
          reps: 8,
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
            <li>If you feel you can do ${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra reps, go for it!</li>

            </ol>`,
        },
        {
          id: 3,
          video: { id: "azv8eJgoGLk", start: 308, end: 374 },
          title: "Seated Leg Extension",
          caption: "Low Impact Resistance",

          points: { hp: 8, cp: 6, xp: 17, sp: 2 },
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
            "Resistance Training",
          ],
          reps: 7,
          mobility: 2,
          mets: 2,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit at the front half of your chair</li>

            <li>Lean back to engage your core while holding yourself up with your hands</li>
            <li>From the knee lift one leg and then lower it more slowly
              <ul>
                <li>for a real challenge lift both legs at the same time</li>
              </ul>
            </li>
            <li>Repeat with the opposite side
              <ul>
                <li>this counts as 1 rep (repitition)</li>
              </ul>
            </li>
            <li>Go at your own pace</li>
            <li>If you feel you can do ${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra reps, go for it!</li>

            </ol>`,
        },
        {
          id: 4,
          video: { id: "azv8eJgoGLk", start: 633, end: 709 },
          title: "Seated No Rope Jump Rope",
          caption: "Low Impact Cardio",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 9, cp: 8, xp: 18, sp: 4 },
          tags: [
            "Cardio",
            "Low Impact",
            "Sitting Only",
            "All Ages",
            "Legs",
            "Glutes",
            "Strength",
            "Ab Workout",
          ],
          reps: 5,
          mobility: 2,
          mets: 7,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit on the front half of your chair</li>
            <li>Lean back slightly to engage your core</li>
            <li>Either choose to "bounce on the spot," or to do a calf raise</li>
            <li>At the same time rotate your arms in circles
              <ul>
                <li>1 full arm rotation and raise up, or bounce counts as 1 rep</li>
                <li>for a real challenge hold some food cans in each hand</li>
              </ul>
            </li>
            <li>Go at your own pace</li>
            <li>${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra reps, go for it!</li>

            </ol>`,
        },
        {
          id: 5,
          video: { id: "azv8eJgoGLk", start: 893, end: 957 },
          title: "Seated Row & Calf Raise",
          caption: "Low Impact Resistance",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 5, cp: 1, xp: 17, sp: 5 },
          tags: [
            "Resistance Training",
            "Low Impact",
            "Sitting Only",
            "All Ages",
            "Legs",
            "Arms",
            "Back",
            "Shoulders",
            "Strength",
            "Ab Workout",
          ],
          reps: 4,
          mobility: 2,
          mets: 4,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit at the front of the chair</li>
            <li>Keep your back as straight as you can</li>
            <li>Pretend strings are attached from your arms to your knees</li>
            <li>Lift your arms (like rowing) and raise on to the balls of your feet
              <ul>
                <li>try to pinch your shoulder blades at the top for better results</li>
              </ul>
            </li>

            <li>Return your arms to your side while you lower your feet back to the floor
              <ul>
                <li>this counts as 1 rep (repitition)</li>
              </ul>
            </li>
            <li>Go at your own pace</li>
            <li>If you feel you can do ${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra rep, go for it!</li>

            </ol>`,
        },
        {
          id: 6,
          video: { id: "azv8eJgoGLk", start: 956, end: 1020, mute: 0 },
          title: "Seated Chair Jog",
          caption: "Low Impact Cardio",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 7, cp: 6, xp: 20, sp: 1 },
          tags: ["Cardio", "Low Impact", "Sitting Only", "All Ages"],
          reps: 14,
          mobility: 2,
          mets: 3.2,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit on the front half of the chair</li>
            <li>Keep your back as straight as you can</li>
            <li>Use your arms and legs to run on the spot
              <ul>
                <li>One rep is when the same foot lands the second time, or around 1 second</li>
              </ul>
            </li>

            <li>Go at your own pace</li>
            <li>If you feel you can do ${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra reps, go for it!</li>

            </ol>`,
        },
        {
          id: 7,
          video: { id: "PdnZTxKIe9g", start: 9, end: 30, mute: 1 },
          title: "Lying Bridge",
          caption: "Low Impact Resistance",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 4, cp: 4, xp: 20, sp: 2 },
          tags: [
            "Resistance",
            "Ultra Low Impact",
            "Lying Down Only",
            "All Ages",
            "In Bed",
            "On Floor",
          ],
          reps: 25,
          mobility: 0.9,
          mets: 3.2,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Lie in bed (or on the floor) facing the ceiling</li>
            <li>Put your hands below your buttocks</li>
            <li>Bend your knees so legs are at 45 degree angle (about 2 foot lengths from buttocks)</li>
            <li>Lift up your buttocks off the floor until your knees and shoulders create a straight line</li>
            <li>Hold for a quick pause (1-2 seconds) and bring your buttocks back to almost touching the floor
              <ul>
                <li>This counts as one rep.</li>
              </ul>
            </li>

            <li>Go at your own pace</li>
            <li>If you feel you can do ${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra reps, go for it!</li>

            </ol>`,
        },
        {
          id: 8,
          video: { id: "zsly6y-wr7k", start: 560, end: 588, mute: 1 },
          title: "Lying Squeeze",
          caption: "Low Impact Resistance",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 4, cp: 4, xp: 22, sp: 3 },
          tags: [
            "Resistance",
            "Ultra Low Impact",
            "Lying Down Only",
            "All Ages",
            "In Bed",
            "On Floor",
          ],
          reps: 20,
          mobility: 0.5,
          mets: 3.1,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Lie in bed (or on the floor) facing the ceiling</li>
            <li>Put your hands below your buttocks</li>

            <li>Lift legs slightly off the floor, trying to keep legs straight</li>
            <li>Hold for 1 second
              <ul>
                <li>This counts as one rep.</li>
              </ul>
            </li>

            <li>Go at your own pace</li>
            <li>If you feel you can do ${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra reps, go for it!</li>

            </ol>`,
        },
        {
          //https://ars.els-cdn.com/content/image/1-s2.0-S2589004222011415-mmc1.pdf
          id: 9,
          video: { id: "yaK6TThRMdE", start: 36, end: 48, mute: 1 },
          title: "Soleus Push-up",
          caption: "Ultra Low Impact Cardio",
          icon: { name: null, color: "accent", font: "" },

          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 20, cp: 8, xp: 21, sp: 2 },
          tags: ["Cardio", "Low Impact", "Sitting Only", "All Ages"],
          reps: 100,
          mobility: 2,
          mets: 2,
          // sitting
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit comfortably of the chair</li>
            <li>Keep your back as straight as you can</li>
            <li>Keep your legs at 75-85 degrees, with your feet just behind your knees</li>
            <li>Put weight on your toes (push into and slightly forward the floor) as you raise your knees and heels off the floor</li>
            <li>Keep your toes planted on the floor</li>
            <li>Once you reach the top relax to let gravity bring your heel back towards the floor
              <ul>
                <li>This counts a 1 repitition and should take about 1 second to complete</li>
              </ul>
            </li>
            <li>If done correctly you could do this exercise for hours without fatigue</li>


            <li>Go at your own pace</li>
            <li>If you feel you can do ${Math.floor(
              Math.random() * (4 - 1 + 1) + 1
            )} extra reps, go for it!</li>

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
          mobility: this.mobilityConverter(
            0,
            Math.floor(alldata[index].mobility)
          ),
          difficulty: alldata[index].mobility,
          cals: this.convertMetToCal(alldata[index].mets, 1),
          points: `HP:${alldata[index].points.hp} | CP:${alldata[index].points.cp} | XP:${alldata[index].points.xp} | SP:${alldata[index].points.sp}`,
          tags: eval(JSON.stringify(alldata[index].tags)).join(", "),
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
  computed: {
    rowCount() {
      return this.rows.length;
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
.q-dialog__inner .q-card,
.q-btn {
  // background: #45df32;
  border-radius: 0%;
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
}
</style>
