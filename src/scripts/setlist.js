const setList = [
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
      <li>Keep your legs at 75-85 degrees (like the number seven: <span style="font-family:arial;font-weight:bold" class="text-h4">7</span> ), with your feet just behind your knees</li>
      <li>Put weight on your toes (push into and slightly forward the floor) as you quickly raise your knees and heels off the floor</li>
      <li>Keep your toes planted on the floor</li>
      <li>Once you reach the top relax to let gravity instantly bring your heel back towards the floor
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
];

const doctorSets = [
  {
    id: 0,
    name: `Soleus Pushup`,
    short: `Short`,
    long: `Long`,
    science: `Science`,
    set: "[9]",
  },
  {
    id: 1,
    name: `In Bed Only`,
    short: `Short`,
    long: `Long`,
    science: `Science`,
    set: "[7,8]",
  },
  {
    id: 2,
    name: `In Chair Only`,
    short: `Short`,
    long: `Long`,
    science: `Science`,
    set: "[1, 2, 3, 4, 5, 6]",
  },
];
export { setList, doctorSets };
