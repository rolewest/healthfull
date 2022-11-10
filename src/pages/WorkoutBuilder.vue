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
              @row-click="rowClick"
              :columns="columns"
              row-key="name"
              hide-header
              :selected-rows-label="getSelectedString"
              selection="multiple"
              v-model:selected="selected"
              :pagination="initialPagination"
              no-data-label="and you find nothing... Check your network connection."
              no-results-label="You don't have one of those..."
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
                    <q-badge color="red">
                      {{ props.row.mobility }}
                    </q-badge>
                  </q-td>
                </q-tr>
              </template>
              <!-- <template v-slot:top-right>
                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template> -->

              <template v-slot:no-data="{ icon, message, filter }">
                <div class="full-width row flex-center text-info q-gutter-sm">
                  <div>
                    <q-spinner-hourglass color="primary" size="2em" />
                    <q-tooltip :offset="[0, 8]">QSpinnerHourglass</q-tooltip>
                  </div>
                  <span>
                    You rummage around your rucksack... {{ message }}
                  </span>
                  <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
                </div>
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
                "Are you sure? This will overwrite any saved custom setlists, currently."
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
                      'Are you sure? This will overwrite any saved custom setlists, currently.';
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
import { LocalStorage } from "quasar";
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
    label: "Points @ Level " + LocalStorage.getItem("user.level.number"),
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
        "Are you sure? This will overwrite any saved custom setlists, currently.",
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
      usersSetLists: LocalStorage.getItem("user.setlists.custom") || "",
      setList: [],
      doctorSets: [],
    };
  },
  methods: {
    rowClick(event, row) {
      console.log("clickonrow#:", row, event);
      row.selected = true;

      if (this.selected.indexOf(row) == -1) {
        this.selected.push(row);
      } else {
        this.selected.splice(this.selected.indexOf(row), 1);
      }
    },
    mobilityConverter(type = 0, data) {
      const values = [
        "In bed or floor only",
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
      let userWeight = this.userWeight || LocalStorage.getItem("userWeight");
      let met = (activityValue * 3.5 * userWeight) / 200; // calories burnt/minute
      if (type === 0) {
        return (met * minutes).toFixed(2);
      }
    },
    saveSetList() {
      let buildSetlist = [];
      for (let index = 0; index < this.selected.length; index++) {
        // let withStepNum = this.selected[index].alldata["step"];
        buildSetlist.push(this.selected[index].alldata.id);
        // buildSetlist[index]["step"] = index + 1;
        console.log("selected:", this.selected[index].alldata.id);
      }
      // console.log("fixdd:", buildSetlist[index]["step"]);
      LocalStorage.set("userCurrentSetlist", buildSetlist);
      // save this list onto all custom lists
      // let oldSets = this.usersSetLists;
      // if (!isArray(oldSets)) {
      // }
      // LocalStorage.set("user.setlists.custom");
      //
      this.workingSetlist = buildSetlist;
      console.log(
        "saved setlist:",
        this.workingSetlist,
        "localastore",
        LocalStorage.getItem("userCurrentSetlist")
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
          difficulty: alldata[index].difficulty,
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
    loadSetLists(data, error = null) {
      if (error) {
        alert(error.message);
      }
      this.setList = data.setLists;
      this.doctorSets = data.doctorSets;
      this.initTableData();
    },
  },
  computed: {
    rowCount() {
      return this.rows.length;
    },
  },
  mounted() {
    console.log("vidddd:", LocalStorage.getItem("userCurrentSetlist"));

    fetch("https://rmatter.com/health-full/data/index.php?loc=setlist")
      .then((res) => res.json())
      .then((data) => this.loadSetLists(data))
      .catch((err) => this.loadSetLists("", err));
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
.q-table__grid-item-card {
  border-radius: 0%;
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
}
</style>
