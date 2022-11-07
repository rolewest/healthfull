<template>
  <!-- <q-btn @click="refreshMsg()">sfgdsf</q-btn> -->
  <div class="quote-holder">
    <p class="on-the-floor bg-accent" v-html="footMessage"></p>
    <div class="bg-dark border-torn-holder">
      <div class="border-torn">
        <span v-html="refreshMsg(1)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footMessage: this.randomAtYourFeetMsg,
      quoteMessage: this.randomQuote,
    };
  },
  methods: {
    refreshMsg(isFoot = 0) {
      this.footMessage = this.randomAtYourFeetMsg;
      this.quoteMessage = this.randomQuote;
      if (isFoot == 0) return this.footMessage;
      if (isFoot == 1) return this.quoteMessage;
    },
  },
  computed: {
    randomAtYourFeetMsg() {
      const atfeet = [
        "You notice an esoteric piece of a scientific script on the floor...",
        "At your feet looks like a torn page from some forgotten science journal...",
        "In front of you is a ripped fragment of some neglected treatise...",
        "You notice a small paper with some bygone wisdom imprinted upon it...",
        "Wedged between two floor panels you notice a tiny shred from some antiquated and cryptic tome...",
        "A gust of wind blows an enigmatic scrap of some perplexing scroll that you snatch from the air...",
        "A hunk of parchment slides under a crack in the door, you open the door... nobody there, but there's some scribbles on the paper.",
        "You notice an ancient looking piece of crumpled garbage on the floor, on it there is some medical drivel... you really need to sweep up in here.",
      ];

      let itemNum = Math.floor(Math.random() * atfeet.length);
      return atfeet[itemNum];
    },
    randomQuote() {
      const quotes = [
        "<blockquote>...regular physical activity and a high fitness level are associated with a reduced risk of premature death from any cause and from cardiovascular disease in particular among asymptomatic men and women. Year:2006 AD <cite>PMID: 16534088; PMCID: PMC1402378.</cite></blockquote>",
        "<blockquote>In communicating the benefits of chair-based activities [ye] public health messaging should reinforce the evidence that every minute counts: any activity is better than none, and everyone (all ages and abilities) should aim to move more and move more often. Year:2021 AD<cite>PMID: 33669357; PMCID: PMC7920319.</cite></blockquote>",
        "<blockquote>Health benefits from regular exercise that should be emphasized and reinforced by every mental health professional to their patients include the following: <br/><ol><li><div>Improved sleep</div></li><li><div>Increased interest in sex</div></li><li><div>Better endurance</div></li><li><div>Stress relief</div></li><li><div>Improvement in mood</div></li><li><div>Increased energy and stamina</div></li><li><div>Reduced tiredness that can increase mental alertness</div></li><li><div>Weight reduction</div></li><li><div>Reduced cholesterol and improved cardiovascular fitness</div></li></ol> Year:2006 AD<cite>PMID: 16862239; PMCID: PMC1470658</cite></blockquote>",
        `<blockquote>Contrary to our hypothesis, combined aerobic and resistance training improved cardiovascular fitness to the same extent as aerobic training alone and strength to the same extent as resistance training alone. Therefore, combined aerobic and resistance training resulted in additive effects that translated into the greatest improvement among the interventions in physical function and reduction of frailty. Year:2017 AD <cite> PMID: 28514618; PMCID: PMC5552187.</cite></blockquote>`,
      ];
      // `<blockquote><cite></cite></blockquote>`,
      let itemNum = Math.floor(Math.random() * quotes.length);
      return quotes[itemNum];
    },
  },
};
</script>

<style lang="scss">
.quote-holder {
  padding: 1em;
  margin: 1em;
  border-radius: 5px;
}
blockquote {
  // font-family: Georgia, serif;
  font-size: 1em;
  font-style: italic;
  // width: 500px;
  // margin: 0.25em 0;
  // padding: 0.35em;
  // line-height: 1.45;
  position: relative;
  color: #383838;
}

blockquote:before {
  display: block;
  padding-left: 10px;
  content: "\201C";
  font-size: 4em;
  position: absolute;
  left: -1.5em;
  top: -0.5em;
  color: #7a7a7a;
}

blockquote cite {
  color: #999999;
  font-size: 8px;
  display: block;
  margin-top: 5px;
}

blockquote cite:before {
  content: "\2014 \2009";
}
.border-torn {
  height: auto;
  overflow: auto;
  padding: 20px;
  background-image: linear-gradient(#efefff 2px, transparent 2px),
    linear-gradient(90deg, #efefff 2px, transparent 2px),
    linear-gradient(#efefff 1px, transparent 1px),
    linear-gradient(90deg, #efefff 1px, #ffffff 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  -webkit-box-shadow: 0px 0px 0px 1px #000000;
  box-shadow: 0px 0px 0px 7px #000000;
  filter: drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5));

  clip-path: polygon(
    1% 2%,
    3.5% 0.1%,
    8.9% 2.7%,
    16.2% 1.2%,
    19.7% 0.8%,
    24.7% 2%,
    31.2% 0%,
    35.9% 2.3%,
    40.6% 0.5%,
    47.1% 1.8%,
    49.9% 1%,
    53.8% 2.5%,
    62.2% 0.4%,
    67.3% 1.2%,
    70.3% 0.3%,
    75.8% 1.4%,
    78.5% 1.7%,
    84% 2.6%,
    91.1% 0.5%,
    93.6% 2.4%,
    97.3% 0.3%,
    98.9% 6%,
    98.1% 11.4%,
    98.6% 15.5%,
    97.3% 17.8%,
    97.7% 27.4%,
    98.3% 28.5%,
    99.7% 34.1%,
    98.8% 41.9%,
    98.3% 45.7%,
    98.4% 50.9%,
    98.7% 57.4%,
    99.6% 60.4%,
    99.4% 66.6%,
    99.2% 69.5%,
    97.4% 77.1%,
    98.1% 82.3%,
    99.9% 83.5%,
    98.2% 91.5%,
    99.3% 95.3%,
    98% 98.6%,
    93.6% 97.4%,
    90.3% 98.3%,
    86.8% 98.3%,
    78.6% 98.5%,
    76.4% 99.2%,
    69.7% 99.8%,
    64.2% 99.3%,
    61.8% 99.2%,
    57.2% 98.1%,
    48.7% 98.3%,
    46.8% 99%,
    39.6% 98.9%,
    33.8% 97.3%,
    28.2% 99.4%,
    27% 98.3%,
    22.1% 98.6%,
    13.1% 97.1%,
    8.7% 99.3%,
    2.7% 97.4%,
    2% 98.2%,
    2.1% 94.3%,
    0.7% 90.5%,
    0.9% 86.3%,
    2.2% 78.2%,
    0.4% 76.7%,
    1.2% 72.1%,
    2% 64%,
    1.4% 59.8%,
    0.4% 57.3%,
    0.3% 49.1%,
    2.9% 44.7%,
    1.9% 41.3%,
    0.8% 35.7%,
    2.9% 31.3%,
    0.8% 24.9%,
    2.7% 20.5%,
    0.8% 17.4%,
    2.5% 8.6%,
    1.1% 5.5%
  );
  transform: scale(0.99);
}
.border-torn-holder {
  clip-path: polygon(
    1% 2%,
    3.5% 0.1%,
    8.9% 2.7%,
    16.2% 1.2%,
    19.7% 0.8%,
    24.7% 2%,
    31.2% 0%,
    35.9% 2.3%,
    40.6% 0.5%,
    47.1% 1.8%,
    49.9% 1%,
    53.8% 2.5%,
    62.2% 0.4%,
    67.3% 1.2%,
    70.3% 0.3%,
    75.8% 1.4%,
    78.5% 1.7%,
    84% 2.6%,
    91.1% 0.5%,
    93.6% 2.4%,
    97.3% 0.3%,
    98.9% 6%,
    98.1% 11.4%,
    98.6% 15.5%,
    97.3% 17.8%,
    97.7% 27.4%,
    98.3% 28.5%,
    99.7% 34.1%,
    98.8% 41.9%,
    98.3% 45.7%,
    98.4% 50.9%,
    98.7% 57.4%,
    99.6% 60.4%,
    99.4% 66.6%,
    99.2% 69.5%,
    97.4% 77.1%,
    98.1% 82.3%,
    99.9% 83.5%,
    98.2% 91.5%,
    99.3% 95.3%,
    98% 98.6%,
    93.6% 97.4%,
    90.3% 98.3%,
    86.8% 98.3%,
    78.6% 98.5%,
    76.4% 99.2%,
    69.7% 99.8%,
    64.2% 99.3%,
    61.8% 99.2%,
    57.2% 98.1%,
    48.7% 98.3%,
    46.8% 99%,
    39.6% 98.9%,
    33.8% 97.3%,
    28.2% 99.4%,
    27% 98.3%,
    22.1% 98.6%,
    13.1% 97.1%,
    8.7% 99.3%,
    2.7% 97.4%,
    2% 98.2%,
    2.1% 94.3%,
    0.7% 90.5%,
    0.9% 86.3%,
    2.2% 78.2%,
    0.4% 76.7%,
    1.2% 72.1%,
    2% 64%,
    1.4% 59.8%,
    0.4% 57.3%,
    0.3% 49.1%,
    2.9% 44.7%,
    1.9% 41.3%,
    0.8% 35.7%,
    2.9% 31.3%,
    0.8% 24.9%,
    2.7% 20.5%,
    0.8% 17.4%,
    2.5% 8.6%,
    1.1% 5.5%
  );
  padding: 1px 1px 5px 1px;
}
.on-the-floor {
  padding: 0.5em;
  color: $text;
  animation: glower 5s ease infinite;
  background: $primary;
  background-size: 500% 100%;
  transition: all 0.5s;
  border-radius: 10px;
  opacity: 0.8;
  text-shadow: 2px 2px 2px #3366ff;
  // text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0d4aff,
  //   0 0 30px #2f18ff, 0 0 40px #18dcff, 0 0 55px #18ffe0, 0 0 75px #18f0ff,
  //   2px 2px 2px rgba(36, 107, 206, 0), 2px 2px 2px #000000, -1px -1px #444;
}
@keyframes animateBgReward {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
.special-alert {
  padding: 0.5em;
  color: $text;
  animation: animateBgReward 5s ease infinite;
  background: $primary;
  background-size: 500% 100%;
  transition: all 0.5s;
  border-radius: 10px;
  opacity: 0.8;
  text-shadow: 2px 2px 2px #3366ff;
  // text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0d4aff,
  //   0 0 30px #2f18ff, 0 0 40px #18dcff, 0 0 55px #18ffe0, 0 0 75px #18f0ff,
  //   2px 2px 2px rgba(36, 107, 206, 0), 2px 2px 2px #000000, -1px -1px #444;
}
.glower {
  animation: colorCycle 2s ease infinite;
  border-bottom: 4px double $info;
}

.cycle-color {
  animation: animateBgReward 3s linear infinite;
}
</style>
