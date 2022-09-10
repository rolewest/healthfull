<template>
  <div class="q-ma-sm">
    <div id="buildTitle" class="title-h4 typeOut hidden">
      Build A Training Regime
    </div>

    <div class="questItem">
      <button @click="typeText(0, 'buildTitle', 1000, 100, 'true')">
        ffggd
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    typeText(mode, elm, delay = 0, rate = 10, stopcursor = "false") {
      if (mode == 0) {
        //document.getElementById(elm).style.opacity='0';
        var alltxt = document.getElementById(elm).innerHTML;

        var atx = document.getElementById(elm).innerHTML;
        document.getElementById(elm).innerHTML = "";
        document.getElementById(elm).classList.remove("hidden");
        var l = alltxt.length;
        var i = 0;

        setTimeout(function () {
          var pl = setInterval(function () {
            if (i <= l) {
              if (
                document.getElementById(elm).innerHTML != "_" &&
                document.getElementById(elm).innerHTML != ""
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
                document.getElementById(elm).innerHTML = alltxt.substr(0, i);
              } else {
                //found < or </
              }

              i++;
            } else {
              clearInterval(pl);
              if (stopcursor == "true") {
                setTimeout(function () {
                  document.getElementById(elm).classList.add("notransition");
                  document.getElementById(elm).style.border = "";
                  document.getElementById(elm).offsetHeight; // Trigger a reflow, flushing the CSS changes
                }, 2500);
              }
            }
          }, rate); //
        }, delay);
      }
    },
  },
  mounted() {
    this.typeText(0, "buildTitle", 1000, 100, "true");
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
