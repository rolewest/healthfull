<template>
  <div class="blockCursor">
    <div class="questItem shadow-sm p-3" id="statsInput">
      <div class="is-card-type">
        <span class="title-text">Baseline Measurements</span>
      </div>
      <div class="row no-wrap justify-between is-retro-icon">
        <div class="mdi mdi-tape-measure text-h2 pr-5 text-left"></div>
        <p class="text-center text-h5">
          Let's find out some of your basic info!
        </p>
        <div class="mdi mdi-scale-bathroom text-h2 pr-5 text-right"></div>
      </div>

      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-human-male-height text-h3"></span
          ></span>
        </div>

        <input
          type="text"
          id="userHeight"
          ref="userHeight"
          class="form-control graphPaper-2"
          v-model="userHeight"
          placeholder="Height"
          aria-label="height"
          aria-describedby="basic-addon1"
          @focus="$event.target.select()"
        />

        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary bg-info"
            ref="userCMObj"
            @click="toggleCM(true)"
          >
            CM
          </button>
          <button
            type="button"
            class="btn btn-secondary bg-secondary"
            ref="userFTObj"
            @click="toggleCM(false)"
          >
            FT
          </button>
        </div>
      </div>
      <label for="userHeight">Height</label>
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-weight text-h3"></span
          ></span>
        </div>
        <input
          type="number"
          id="userWeight"
          class="form-control graphPaper-2"
          v-model="userWeight"
          placeholder="Weight"
          aria-label="Weight"
          aria-describedby="basic-addon1"
          @focus="$event.target.select()"
        />
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary bg-info"
            ref="userKGObj"
            @click="toggleKG(true)"
          >
            KG
          </button>
          <button
            type="button"
            class="btn btn-secondary bg-secondary"
            ref="userLBObj"
            @click="toggleKG(false)"
          >
            LBS
          </button>
        </div>
      </div>
      <label for="userWeight">Weight</label>
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-cake-variant text-h3"></span
          ></span>
        </div>
        <input
          type="number"
          class="form-control graphPaper-2"
          v-model="userAge"
          placeholder="Age"
          aria-label="Age"
          aria-describedby="basic-addon1"
          @focus="$event.target.select()"
        />
      </div>
      <label for="userAge">Age</label>
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-shape-plus text-h3"></span
          ></span>
        </div>
        <select
          id="userSkill"
          class="form-control graphPaper-2"
          v-model="userSkill"
          placeholder="Skill Level"
          aria-label="Skill"
          aria-describedby="basic-addon1"
        >
          <!-- <option value="0">No exercise, or occasional</option>
          <option value="1.1">1 day every week</option>
          <option value="1.1">~1-2 days</option>
          <option value="1.2">2 days</option>
          <option value="1.3">3 days</option>
          <option value="1.4">4 days</option>
          <option value="1.5">5 days</option>
          <option value="1.6">6 days</option>
          <option value="1.7">7 days</option>
          <option value="2">I'm a trainer</option>
          <option value="3">I'm a professional athlete</option>
        </select> -->

          <option value="-10">Unable to stand</option>
          <option value="-6">Mobility issus</option>
          <option value="-5">Obesely overweight</option>
          <option value="-3">Very overweight</option>
          <option value="-2">Overweight</option>
          <option value="1.5">A bit overweight</option>
          <option value="1.3">Skinny-Fat</option>
          <option value="1">Very thin</option>
          <option value="0">A bit underweight</option>
          <option value="2">Average Build</option>
          <option value="3">Athletic</option>
          <option value="4">Body Builder</option>
          <option value="5">Fitness trainer</option>

          slim average athletic obese
          <!-- slim average athletic obese -->
        </select>
        <!-- could be check box collective such as:
                      -at work/school I: am on my feet all day, sit all day, don't work, work up a sweat for 10 minutes every day,
                      I don't work

                      at home I: sit around most days, play outdoor sports (for how many min X 0.01), I am out and about driving everyday,
                      I'm out mostly walk/jog/biking/

                      I cook, Takeout/delivery,
                      frozen/packaged-prepared (percent) vs fresh/frozen-whole

                      My hobbies include, for more than 30 minutes at a time: moderate exercise [ ] days/week
                      sitting watching tv/phone [ ] days per week
                      -->
      </div>
      <!-- <button class="mdi mdi-male" @click="flipGender(0)"><span class="mdi mdi-human-male h2"></span></button>
        <button class="mdi mdi-male" @click="flipGender(1)"><span class="mdi mdi-human-female h2"></span></button> -->
      <label for="userSkill">Body Shape</label>
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <details>
            <summary><span>Have a tape measure handy?</span></summary>
            <fieldset>
              <div>
                We can get more details if you have a tape measure (cloth is
                best)
              </div>
              <span class="mdi mdi-tape-measure text-h3"></span>
              <span class="mdi mdi-arrow-left-right-bold text-h3"></span>
              <span class="mdi mdi-human text-h3"></span>
              <div class="">
                <input
                  type="number"
                  id="userNeck"
                  class="form-control graphPaper-2"
                  v-model="userNeck"
                  placeholder="Neck Size"
                  aria-label="Neck circumference"
                  aria-describedby="basic-addon1"
                  @focus="$event.target.select()"
                />
                <br /><label for="userNeck">Neck Circumference</label><br />
                <input
                  type="number"
                  id="userWaist"
                  class="form-control graphPaper-2"
                  v-model="userWaist"
                  placeholder="Neck Size"
                  aria-label="Waist circumference"
                  aria-describedby="basic-addon1"
                  @focus="$event.target.select()"
                />
                <br /><label for="userWaist">Waist Circumference</label><br />
                <input
                  type="number"
                  id="userHip"
                  class="form-control graphPaper-2"
                  v-model="userHip"
                  placeholder="Hip Size"
                  aria-label="Hip circumference"
                  aria-describedby="basic-addon1"
                  @focus="$event.target.select()"
                />
                <br /><label for="userHip">Hip Circumference</label>
              </div>
            </fieldset>
          </details>
        </div>
      </div>
    </div>

    <!-- Work & Play -->
    <div class="questItem shadow-sm p-3" id="statsInput">
      <div class="is-card-type">
        <span class="title-text">Work, Play & Rest</span>
      </div>
      <div class="row no-wrap justify-between is-retro-icon">
        <div class="mdi mdi-chair-school text-h2 pr-5 text-left"></div>

        <div class="mdi mdi-karate text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-desk text-h2 pr-5 text-left"></div>
        <div class="mdi mdi-bike-fast text-h2 pr-5 text-right"></div>
        <!-- <p class="text-center text-h5"></p> -->

        <div class="mdi mdi-football-helmet text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-baseball-bat text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-train-car text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-gamepad-square text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-chair-rolling text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-face-agent text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-dog-service text-h2 pr-5 text-right"></div>
      </div>
      <label>
        <select
          id="userSkill"
          class="form-control graphPaper-2"
          v-model="userSkill"
          placeholder="Skill Level"
          aria-label="Skill"
          aria-describedby="basic-addon1"
        >
          <option value="-10">Bed Ridden</option>
          <option value="-7">Unable to stand</option>
        </select>
      </label>
      <fieldset class="with-title is-centered">
        <legend class="title">How I Eat</legend>
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="-1"
            v-model="userHealthPoints"
          />
          <span class="check-label">Always Takeout/Delivery</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="0.5"
            v-model="userHealthPoints"
          />
          <span class="check-label">Home Cooked/I Cook</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="0.7"
            v-model="userHealthPoints"
          />
          <span class="check-label">I'm Vegan</span>
        </label>
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="0.3"
            v-model="userHealthPoints"
          />
          <span class="check-label">I'm Vegetarian</span>
        </label>
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="-1"
            v-model="userHealthPoints"
          />
          <span class="check-label">I Eat Red Meat</span>
        </label>
      </fieldset>
      <br />

      <label>
        <input
          type="checkbox"
          class="nes-checkbox"
          value="overall"
          v-model="userPlanPrefs"
        />
        <span class="check-label">Overall Health & Wellness</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          class="nes-checkbox"
          value="loose"
          v-model="userPlanPrefs"
        />
        <span class="check-label">Loose Weight</span> </label
      ><br />
    </div>
    <!-- Diet & Lifestyle -->
    <div class="questItem shadow-sm p-3" id="statsInput">
      <div class="is-card-type">
        <span class="title-text">Diet & Lifestyle</span>
      </div>
      <div class="row no-wrap justify-between is-retro-icon">
        <div class="mdi mdi-knife text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-food text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-glass-wine text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-shaker-outline text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-food-drumstick text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-gas-burner text-h2 pr-5 text-right"></div>
        <div
          class="mdi mdi-food-takeout-box-outline text-h2 pr-5 text-right"
        ></div>

        <div class="mdi mdi-dumbbell text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-spoon-sugar text-h2 pr-5 text-right"></div>
        <div class="mdi mdi-sausage text-h2 pr-5 text-right"></div>
      </div>

      <fieldset class="with-title is-centered">
        <legend class="title">How I Eat</legend>
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="togo"
            v-model="userPlanPrefs"
          />
          <span class="check-label">Always Takeout/Delivery</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="cook"
            v-model="userPlanPrefs"
          />
          <span class="check-label">Home Cooked/I Cook</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="vegan"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I'm Vegan</span>
        </label>
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="veggie"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I'm Vegetarian</span>
        </label>
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="redmeat"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I'm Eat Red Meat</span>
        </label>
      </fieldset>
      <br />
      <fieldset class="">
        <legend class="">How ddI Eat Most Weeks</legend>
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="togo"
            v-model="userPlanPrefs"
          />
          <span class="check-label">Takeout/Delivery</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="cook"
            v-model="userPlanPrefs"
          />
          <span class="check-label">Home Cooked/I Cook</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="vegan"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I Eat Whole Foods</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="vegan"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I Eat Processed Foods</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="vegan"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I'm Vegan</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="vegan"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I Eat Lots of Veggies</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="vegan"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I'm Vegan</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="veggie"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I'm Vegetarian</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="redmeat"
            v-model="userPlanPrefs"
          />
          <span class="check-label">I Eat Red Meat</span>
        </label>
      </fieldset>
      <br />

      <label>
        <select
          id="userSkill"
          class="form-control graphPaper-2"
          v-model="userSkill"
          placeholder="Skill Level"
          aria-label="Skill"
          aria-describedby="basic-addon1"
        >
          <option value="-10">Bed Ridden</option>
          <option value="0">none</option>
        </select>
      </label>

      <label>
        <input
          type="checkbox"
          class="nes-checkbox"
          value="overall"
          v-model="userPlanPrefs"
        />
        <span class="check-label">Overall Health & Wellness</span> </label
      ><br />
      <label>
        <input
          type="checkbox"
          class="nes-checkbox"
          value="loose"
          v-model="userPlanPrefs"
        />
        <span class="check-label">Loose Weight</span> </label
      ><br />
    </div>
    <!--  -->
    <div class="clip shadow"></div>
    <div class="clipBoard table-responsive">
      <div class="paperSheet shadow">
        <table class="table">
          <thead>
            <tr class="text-center">
              <th scope="col">#</th>
              <th scope="col" class="maleChart">Male</th>
              <th scope="col" class="femaleChart">Female</th>
              <th scope="col">Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                class="text-center font-weight-bold text-primary"
                colspan="4"
              >
                <span class="mdi mdi-account-search text-h5"></span>
                Estimated Body Composition
              </th>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                Metabolic Age
              </th>
              <td class="maleChart">{{ getMetabolicAge() }}</td>
              <td class="femaleChart">{{ getMetabolicAge() }}</td>
            </tr>
            <tr>
              <th scope="row" class="">
                <span class="mdi mdi-check-outline text-success"></span> Current
                Weight
              </th>
              <td class="maleChart">{{ showIdealWeight(6) }}</td>
              <td class="femaleChart">{{ showIdealWeight(6) }}</td>
            </tr>
            <tr>
              <th scope="row" class="">
                <span class="mdi mdi-check-outline text-success"></span> Ideal
                Weight
              </th>
              <td class="maleChart">{{ showIdealWeight(0) }}</td>
              <td class="femaleChart">{{ showIdealWeight(1) }}</td>
            </tr>
            <tr>
              <th scope="row">
                <span v-if="showIdealWeight(4) > -15 && showIdealWeight(4) < 5">
                  <span class="mdi mdi-check-outline text-success"></span>
                </span>
                <span v-else>
                  <span class="mdi mdi-alert text-warning"></span>
                </span>
                Weight Difference
              </th>
              <td class="maleChart">
                <!-- ideal +/- 5kg -->
                <span v-if="showIdealWeight(4) > -5 && showIdealWeight(4) < 5">
                  <span class="text-positive">
                    {{ showIdealWeight(2) }}
                  </span>
                </span>
                <!-- a bit overweight -->
                <span
                  v-else-if="showIdealWeight(4) > 5 && showIdealWeight(4) < 10"
                >
                  <span class="text-warning">
                    {{ showIdealWeight(2) }}
                  </span>
                </span>
                <!-- overweight -->
                <span v-else-if="showIdealWeight(4) > 5">
                  <span class="text-negative">
                    {{ showIdealWeight(2) }}
                  </span>
                </span>
                <!-- underweight -->
                <span v-else-if="showIdealWeight(4) < -5">
                  <span class="text-negative">
                    {{ showIdealWeight(2) }}
                  </span>
                </span>
                <span v-else>
                  {{ showIdealWeight(2) }}
                </span>
              </td>
              <td class="femaleChart">
                <!-- ideal +/- 5kg -->
                <span v-if="showIdealWeight(5) > -5 && showIdealWeight(5) < 5">
                  <span class="text-positive">
                    {{ showIdealWeight(3) }}
                  </span>
                </span>
                <!-- a bit overweight -->
                <span
                  v-else-if="showIdealWeight(5) > 5 && showIdealWeight(5) < 10"
                >
                  <span class="text-warning">
                    {{ showIdealWeight(3) }}
                  </span>
                </span>
                <!-- overweight -->
                <span v-else-if="showIdealWeight(5) > 5">
                  <span class="text-negative">
                    {{ showIdealWeight(3) }}
                  </span>
                </span>
                <!-- underweight -->
                <span v-else-if="showIdealWeight(5) < -5">
                  <span class="text-negative">
                    {{ showIdealWeight(3) }}
                  </span>
                </span>
                <span v-else>
                  {{ showIdealWeight(3) }}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> BF% -
                Body Fat Percent
              </th>
              <td class="maleChart">{{ estBodyFatFromBMI(0) }}%</td>
              <td class="femaleChart">{{ estBodyFatFromBMI(1) }}%</td>
              <td class="text-center">
                <span
                  class="mdi mdi-comment-quote-outline citation"
                  @click="
                    citation(
                      1,
                      'BF%',
                      'Body Fat Percentage',
                      `Your body fat percentage can tell a lot about about your health. Levels above 25.8% for men and 37.1% for women were shown to have higher risk of cardiovascular and other diseases such as diabetes and cancer.`,
                      `Being overweight and obesity are commonly acknowledged key risk factors for non-communicable diseases (NCDs).1,2 Obesity is deemed an independent cardiovascular risk factor (CRF).2 Other CRFs: age, gender, hypertension, dyslipidemia, diabetes mellitus, smoking, unhealthy diet, physical inactivity, and family history[1].`,
                      `We use the CUN-BAE formula developed in 2012 that has been tested on over 6,500 subjects from 18-80 years of age. Measure your neck, waist & hips for more accurate results.`,

                      'theme-notice'
                    )
                  "
                ></span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> LBM -
                Lean Body Mass
              </th>
              <td class="maleChart">
                {{ estBodyFatFromBMI(2) }} {{ userKG ? " KG" : " LB" }}
              </td>
              <td class="femaleChart">
                {{ estBodyFatFromBMI(3) }} {{ userKG ? " KG" : " LB" }}
              </td>
              <td class="text-center">
                <span
                  class="mdi mdi-comment-quote-outline citation"
                  @click="
                    citation(
                      1,
                      'LBM',
                      'Lean Body Mass',
                      ``,
                      ``,
                      ``,

                      'theme-notice'
                    )
                  "
                ></span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span v-if="showIdealWeight(4) > -14 && showIdealWeight(4) < 5">
                  <span class="mdi mdi-check-outline text-success"></span>
                </span>
                <span v-else>
                  <span class="mdi mdi-alert text-warning"></span>
                </span>
                BMI Class Rating:
              </th>

              <td colspan="2" class="">
                <span
                  class="text-is-stamp"
                  :class="
                    showIdealWeight(4) > -14 && showIdealWeight(4) < 5
                      ? 'text-info'
                      : 'border-negative'
                  "
                  >{{ getBMI(1) }}</span
                >
              </td>
              <td></td>
            </tr>

            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> BMI
              </th>
              <td>{{ getBMI(0) }}</td>
              <td>{{ getBMI(0) }}</td>
              <td class="text-center">
                <span
                  class="mdi mdi-comment-quote-outline citation"
                  @click="
                    citation(
                      1,
                      'BMI',
                      'Body Mass Index',
                      `This figure isn't very reliable at all, as it doesn't take in to account muscle mass, bone density and others, but if other data is lacking it is unavailable it can be a place to start.`,
                      `Hopefully both detractors and proponents of BMI can agree that the measure is imperfect – not unlike any other measure of health – but if and when better framed as a holistic assessment of health relative to weight, it can provide valuable insights into obesity as an individual and social condition [1].`,
                      ``,
                      'theme-red'
                    )
                  "
                ></span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> RMR
              </th>
              <td>{{ getRMR(0) }}</td>
              <td>{{ getRMR(1) }}</td>
              <td class="text-center">
                <span
                  class="mdi mdi-comment-quote-outline citation"
                  @click="
                    citation(
                      1,
                      'RMR',
                      'Resting Metabolic Rate',
                      `This is the amount of Calories your body uses at complete rest. We use the Oxford method to get your base RMR.`,
                      `Three equations stood out because the absolute difference between predicted and reference RMR was equal or lower than 200 kcal/d for >60% of individuals (Mifflin, Oxford and Müller equations). From them, only Oxford equation performed better in males and females separately. Conclusion: Oxford equation is a valid alternative to predict RMR in healthy adult humans. Gas exchange correction appears a good practice for reliable assessment of RMR [1].`,
                      ``,
                      'theme-checked'
                    )
                  "
                ></span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> BMR -
                Current
              </th>
              <td class="maleChart">{{ getBMR(0) }}</td>
              <td class="femaleChart">{{ getBMR(1) }}</td>
              <td class="text-center">
                <span
                  class="mdi mdi-comment-quote-outline citation"
                  @click="
                    citation(
                      1,
                      'BMR',
                      'Basal Metabolic Rate',
                      `Similar to RMR, BMR is the number of Calories your body needs for basic life sustaining functions. It is also the basis or additive for many other formulas.`,
                      `Harris-Benedict predicted the average BMR with acceptable precision for clinical use and was better fitting than most of the currently available predictive equations for basal metabolic rate (BMR). However, the recalculated version (by Roza et al.) was more accurate and should therefore be used instead of the original equation. [1].`,
                      `BMR can tell you a lot but at it's most basic it shows you how to cut Calories, or add them, to loose fat or gain muscle.`,
                      'theme-checked'
                    )
                  "
                ></span>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> BMR -
                Maintain
              </th>
              <td class="maleChart">{{ getBMR(2) }}</td>
              <td class="femaleChart">{{ getBMR(3) }}</td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> BMR -
                Weight Loss
              </th>
              <td class="maleChart">{{ getBMR(-1) }}</td>
              <td class="femaleChart">{{ getBMR(-2) }}</td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> BMR -
                Weight Gain
              </th>
              <td class="maleChart">{{ getBMR(4) }}</td>
              <td class="femaleChart">{{ getBMR(5) }}</td>
            </tr>

            <tr>
              <th
                scope="row"
                class="text-center font-weight-bold text-primary"
                colspan="4"
              >
                <span class="mdi mdi-fire text-h5"></span> Calories Burned in 1
                Minute
              </th>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                Sleeping
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "sleep") }} Cal
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                Sitting
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "sit") }} Cal
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                Standing
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "stand") }} Cal
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> Slow
                Walk/Stroll
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "walk") }} Cal
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                Washing Dishes
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "dishes") }} Cal
              </td>
            </tr>

            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                Cooking
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "cook") }} Cal
              </td>
            </tr>

            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> Light
                Cleaning
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "clean") }} Cal
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> Light
                Yard Work
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "yardwork") }} Cal
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> Brisk
                Walk
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "walk_medium") }} Cal
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> Light
                Jog
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "jog") }} Cal
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> Jump
                Rope / Skipping
              </th>
              <td colspan="2" class="text-center">
                ~{{ getMetToCal((type = 0), "jumprope") }} Cal
              </td>
            </tr>
            <!-- cardio -->
            <tr>
              <th
                scope="row"
                class="text-center font-weight-bold text-primary"
                colspan="4"
              >
                <span class="mdi mdi-heart-pulse text-h5"></span> Cardio
              </th>
            </tr>

            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 100%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(100) }} BPM
              </td>
              <td class="text-center">
                <span
                  class="mdi mdi-comment-quote-outline citation"
                  @click="
                    citation(
                      1,
                      'HRmax',
                      'Max Heart Rate',
                      `Doing certain exercises at certain percentages of HRmax burns more Calories with less time wasted.`,
                      `the traditional equation underestimates HRmaxpast age 40 years, markedly so in older adults. On the basis of the cross-confirmatory findings of our meta-analysis and complementary prospective study, we present a new equation for future use that should provide more precise results. These findings have important clinical implications related to exercise testing and prescription.`,
                      `This is the estimated maximum beats/minute that your heart could perform. The standard formula for this is proven to be inaccurate, but is still used often, we use an updated formula from 2001 that is more accurate and we formulate this from your Metabolic Age for added safety.`,
                      'theme-checked'
                    )
                  "
                ></span>
              </td>
            </tr>

            <tr :class="{ 'border-selection': userSkill >= 10 }">
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 90%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(90) }} BPM
              </td>
            </tr>
            <tr
              :class="{ 'border-selection': userSkill >= 8 && userSkill <= 9 }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 85%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(85) }} BPM
              </td>
            </tr>
            <tr
              :class="{ 'border-selection': userSkill >= 6 && userSkill <= 7 }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 80%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(80) }} BPM
              </td>
            </tr>
            <tr
              :class="{ 'border-selection': userSkill >= 4 && userSkill <= 5 }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 75%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(75) }} BPM
              </td>
            </tr>
            <tr
              :class="{ 'border-selection': userSkill >= 2 && userSkill <= 3 }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 70%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(70) }} BPM
              </td>
            </tr>
            <tr :class="{ 'border-selection': userSkill == 1 }">
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 65%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(65) }} BPM
              </td>
            </tr>
            <tr :class="{ 'border-selection': userSkill == 0 }">
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 60%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(60) }} BPM
              </td>
            </tr>
            <tr
              :class="{
                'border-selection': userSkill <= -1 && userSkill >= -3,
              }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 55%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(55) }} BPM
              </td>
            </tr>
            <tr
              :class="{
                'border-selection': userSkill <= -4 && userSkill >= -5,
              }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 50%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(50) }} BPM
              </td>
            </tr>
            <tr
              :class="{
                'border-selection': userSkill <= -6,
              }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                HRmax - Heart Rate @ 45%
              </th>
              <td colspan="2" class="text-center">
                ~{{ showMaxHeartRate(45) }} BPM
              </td>
            </tr>
            <!-- strength -->
            <tr>
              <th
                scope="row"
                class="text-center font-weight-bold text-primary"
                colspan="4"
              >
                <span class="mdi mdi-dumbbell text-h5"></span> Strength
              </th>
            </tr>

            <tr>
              <th scope="col">Estimated Lift</th>
              <th scope="col" class="maleChart">Male</th>
              <th scope="col" class="femaleChart">Female</th>
            </tr>

            <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> 1RM (1
                Rep Max.)
              </th>
              <td class="maleChart">~{{ show1RM(4) }}</td>
              <td class="femaleChart">~{{ show1RM(5) }}</td>
              <td class="text-center">
                <span
                  class="mdi mdi-comment-quote-outline citation"
                  @click="
                    citation(
                      1,
                      '1RM',
                      '1 Repetitions Maximum',
                      `Many studies seem to show that doing exercises at percentages of 1RM (~50% to ~80%) show fast results.`,

                      `Once the 1RM is known (whether measured or predicted), our equations can be used to estimate the load
needed for sets to failure for a specific repetition number[1].`,
                      `This is the maximum amount of weight you can lift while still keeping form and not injuring yourself. We've based our calculations off studies of out the University of New Mexico, although precisely calculating 1RM is never easy.`,
                      'theme-notice'
                    )
                  "
                ></span>
              </td>
            </tr>
            <tr :class="{ 'border-selection': userSkill >= 10 }">
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> 1RM 95%
                @02reps
              </th>
              <td class="maleChart">~{{ show1RM(195) }}</td>
              <td class="femaleChart">~{{ show1RM(295) }}</td>
            </tr>
            <tr
              :class="{ 'border-selection': userSkill >= 5 && userSkill <= 9 }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> 1RM 90%
                @04reps
              </th>
              <td class="maleChart">~{{ show1RM(190) }}</td>
              <td class="femaleChart">~{{ show1RM(290) }}</td>
            </tr>
            <tr
              :class="{ 'border-selection': userSkill >= 1 && userSkill <= 4 }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> 1RM 80%
                @08reps
              </th>
              <td class="maleChart">~{{ show1RM(180) }}</td>
              <td class="femaleChart">~{{ show1RM(280) }}</td>
            </tr>
            <tr :class="{ 'border-selection': userSkill == 0 }">
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> 1RM 70%
                @12reps
              </th>
              <td class="maleChart">~{{ show1RM(170) }}</td>
              <td class="femaleChart">~{{ show1RM(270) }}</td>
            </tr>
            <tr
              :class="{
                'border-selection': userSkill <= -1 && userSkill >= -3,
              }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> 1RM 60%
                @20reps
              </th>
              <td class="maleChart">~{{ show1RM(160) }}</td>
              <td class="femaleChart">~{{ show1RM(260) }}</td>
            </tr>
            <tr
              :class="{
                'border-selection': userSkill <= -4 && userSkill >= -6,
              }"
            >
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> 1RM 50%
                @30reps
              </th>
              <td class="maleChart">~{{ show1RM(150) }}</td>
              <td class="femaleChart">~{{ show1RM(250) }}</td>
            </tr>
            <tr :class="{ 'border-selection': userSkill <= -7 }">
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span> 1RM 40%
                maxreps
              </th>
              <td class="maleChart">~{{ show1RM(140) }}</td>
              <td class="femaleChart">~{{ show1RM(240) }}</td>
            </tr>
          </tbody>
        </table>
        <div class="alert alert-primary">
          <p>
            These stats show an estimated <i>Reps Max 1 (1RM)</i> of
            {{ show1RM(2) }} for a male, and {{ show1RM(3) }} for a female.
          </p>
          <p>
            Your body composition, from your info, looks like... choose what you
            want to do next:
          </p>
        </div>
      </div>
      <div class="alert alert-positive mt-5 shadow-sm blockCursor">
        <h3 class="text-center is-card-type">Select all that apply</h3>
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="overall"
            v-model="userPlanPrefs"
          />
          <span>Overall Health & Wellness</span> </label
        ><br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="loose"
            v-model="userPlanPrefs"
          />
          <span>Loose Weight</span> </label
        ><br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="gain"
            v-model="userPlanPrefs"
          />
          <span>Gain Muscle</span> </label
        ><br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="flex"
            v-model="userPlanPrefs"
          />
          <span>Improve Flexibility</span> </label
        ><br />
        <label>
          <input
            type="checkbox"
            class="nes-checkbox"
            value="injury"
            v-model="userPlanPrefs"
          />
          <span>Injury Recovery</span> </label
        ><br />
        <div class="">
          <p>Would you like it to be low impact?</p>
          <label>
            <input type="radio" class="nes-radio" name="answer" checked />
            <span>Yes</span>
          </label>

          <label>
            <input type="radio" class="nes-radio" name="answer" />
            <span>No</span>
          </label>
        </div>
        <label
          ><span>Maximum Mobility Level</span>
          <div class="nes-select">
            <select required id="default_select" v-model="baseMobility">
              <option value="-4">In bed only</option>
              <option value="-3">Sitting & in bed only</option>
              <option value="-2">Sitting only</option>
              <option value="-1">Sitting, standing & in bed only</option>
              <option value="0">Sitting & Standing only</option>
              <option value="1">Standing only</option>
              <option value="2">Standing & lying on the floor</option>
              <option value="3">On the floor only</option>
              <option value="4">No mobility issues</option>
            </select>
          </div> </label
        ><br />
      </div>
      <div class="alert alert-positive mt-5">
        <button
          class="btn btn-primary display-3 rpgClickCursor w-100 mb-2"
          id=""
        >
          <div class="mdi mdi-gauge-full h1"></div>
          All in one (recommended)
        </button>
        <p class="h5 text-center">
          Simple exercises to tone and strengthen the whole body
        </p>
        <ul class="horizontal-list">
          <li>Get toned/muscles</li>
          <li>Get thin (loose fat)</li>
          <li>Get strength</li>
          <li class="text-primary">Low impact</li>
          <li class="text-primary">No equipment</li>
          <li class="text-primary">All ages & levels</li>
        </ul>
      </div>

      <div class="alert alert-positive" role="alert">
        <button
          class="btn btn-positive display-3 rpgClickCursor w-100 mb-2"
          id=""
        >
          <div class="mdi mdi-scale-bathroom h1"></div>
          Get Thin
        </button>
        <p class="h5 text-center">Scientific exercises to burn fat</p>
        <ul class="horizontal-list">
          <li>Loose body fat</li>
          <li>Loose visceral and subcutaneous fat</li>
          <li class="text-primary">Low impact</li>
          <li class="text-primary">No equipment</li>
          <li class="text-primary">All ages & levels</li>
        </ul>
      </div>

      <div class="alert alert-positive" role="alert">
        <button
          class="btn btn-positive display-3 rpgClickCursor w-100 mb-2"
          id=""
        >
          <div class="mdi mdi-arm-flex h1"></div>
          Get Muscular
        </button>
        <p class="h5 text-center">Scientific exercises to build muscle</p>
        <ul class="horizontal-list">
          <li>Get big muscles</li>
          <li>Gain muscle weight</li>
          <li>Build skeletal muscle</li>
          <li class="text-negative">Medium impact</li>
          <li class="text-negative">Basic equipment or home items</li>
          <li class="text-primary">All ages & levels</li>
        </ul>
      </div>

      <div class="alert alert-positive" role="alert">
        <button
          class="btn btn-positive display-3 rpgClickCursor w-100 mb-2"
          id=""
        >
          <div class="mdi mdi-dumbbell h1 float-left"></div>
          Get Strong
        </button>
        <p class="h5 text-center">Scientific exercises to add strength</p>
        <ul class="horizontal-list">
          <li>Get toned/muscles</li>
          <li>Gain muscle weight</li>
          <li>Build skeletal muscle</li>
          <li>Get strength</li>
          <li class="text-negative">Medium impact</li>
          <li class="text-primary">No equipment needed</li>
          <li class="text-primary">All ages & levels</li>
        </ul>
      </div>
      {{ userHealthPoints }} ({{
        userHealthPoints.reduce(
          (partialSum, a) => parseFloat(partialSum) + parseFloat(a),
          0
        )
      }})
      {{ userPlanPrefs }}
      {{ userAge }}
      {{ convertHeightToCM() }}
      {{ userWeight }}
      {{ userSkill }}
      {{ userKG }}
      {{ userCM }}
      [{{ userAge * userWeight }}]
    </div>
    <div v-if="showCitationModal">
      <Modal @close="toggleCitationModal" :theme="citationTheme" cite="cite">
        <template></template>
        <template v-slot:cite>
          <h4 class="title-h4">{{ citationName }}</h4>
          <div class="title-h4">
            {{ citationCaption }}
          </div>
          <div class="paperSheetFlat">
            <div class="text-center">
              <a :href="baseURL + '/citations/' + citationID" target="_blank"
                >see full citations & sources here</a
              ><br />
              <div class="text-h5">Basic Overview</div>
              <span class="text-negative">
                {{
                  citationTheme === "theme-red"
                    ? "WARNING: this method's use is questionable"
                    : ""
                }}</span
              >
              <span class="text-negative">
                {{
                  citationTheme === "theme-notice"
                    ? "WARNING: your data could be inaccurate"
                    : ""
                }}</span
              >
              <br />
            </div>

            <p>
              {{ citationShort }}
            </p>
            <p>
              {{ citationWhy }}
            </p>
          </div>
          <div class="paperSheetFlat" v-show="citationSummary">
            <!-- [<router-link to="/about">abooot</router-link>] {{ citationName }} |
            {{ citationID }} | {{ citationCaption }} | {{ citationShort }} -->
            <div class="text-center text-h5">Sources / Excerpts</div>
            <kbd class="cite-text">
              {{ citationSummaryFormat }} <br />
              <a :href="baseURL + '/citations/' + citationID" target="_blank"
                >full citations are here</a
              >
            </kbd>
          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from "src/components/Modal.vue";

export default {
  props: ["baseURL"],
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      showCitationModal: false,

      userAge: localStorage.getItem("userAge") || 29,
      userHeight:
        localStorage.getItem("userHeightImp") != "null"
          ? localStorage.getItem("userHeightImp")
          : localStorage.getItem("userHeight") || 170,
      userWeight: localStorage.getItem("userWeight") || 55,
      userSkill: localStorage.getItem("userSkill") || 0,
      baseMobility: 4,
      userKG: localStorage.getItem("userKG") || true,
      userCM: localStorage.getItem("userKG") || true,
      userHeightImp: localStorage.getItem("userHeightImp") || null,
      userWeightImp: localStorage.getItem("userWeightImp") || null,
      userPlanPrefs: [],
      userHealthPoints: [],
      userNeck: 0,
      userWaist: 0,
      userHip: 0,
    };
  },
  methods: {
    toggleCitationModal() {
      if (this.showCitationModal) {
        setTimeout(() => {
          this.showCitationModal = !this.showCitationModal;
        }, 500);
      } else {
        this.showCitationModal = !this.showCitationModal;
      }

      console.log(
        "toggleCITMod:",
        this.showCitationModal,
        this.showCitationModal
      );
    },
    citation(
      id = 0,
      name = "",
      caption = "",
      short = "",
      summary = "",
      why = "",
      theme = ""
    ) {
      this.showCitationModal = true;
      this.citationName = name;
      this.citationID = id;
      this.citationCaption = caption;
      this.citationShort = short;
      this.citationSummary = summary;
      this.citationWhy = why;
      this.citationTheme = theme;
      console.log("seding emitter", this.$route, this.$router);
      console.log("CITE:", name, id, this.showCitationModal);
      console.log("citation", id, name, caption, short, summary, why, theme);
      console.log("parent:", JSON.parse(JSON.stringify(this.$parent.$data)));
      this.$emit("citation", id, name, caption, short, summary, why, theme);
    },
    saveUserData() {
      localStorage.setItem("userHeight", this.userHeight); //save it
      localStorage.setItem("userWeight", this.userWeight); //save it
      localStorage.setItem("userAge", this.userAge); //save it
      localStorage.setItem("userSkill", this.userSkill); //save it
      localStorage.setItem("userHeightImp", this.userHeightImp); // save imperial (feet) measure
      localStorage.setItem("userWeightImp", this.userWeightImp); // save imperial (pounds) measure
      localStorage.setItem("userKG", this.userKG);
      localStorage.setItem("userCM", this.userCM);
    },
    flipGender(type = 0) {
      if (type === 0) {
        document.querySelectorAll(".femaleChart").classList.add("isHidden");
        document.querySelectorAll(".maleChart").classList.remove("isHidden");
      } else {
        document.querySelectorAll(".maleChart").classList.add("isHidden");
        document.querySelectorAll(".femaleChart").classList.remove("isHidden");
      }
    },
    convertHeightToCM() {
      if (String(this.userHeight).includes("'")) {
        let usrhv = String(this.userHeight).split("'");

        return usrhv[0] * 30.48 + usrhv[1] * 2.54;
      } else {
        this.saveUserData();
        return this.userHeight;
      }
    },
    convertHeightToFT() {
      if (String(this?.userHeight).includes("'")) {
        this.saveUserData();
        return this.userHeight;
      } else {
        this.saveUserData();
        let usrhv = String(String(this.userHeight) * 0.0328084).split(".");

        return usrhv[0] + "'" + (parseFloat("0." + usrhv[1]) * 12).toFixed(0);
      }
    },
    activityToMet(type = "sleep") {
      if (type === "sleep") return 0.9;
      if (type === "sit") return 1.3;
      if (type === "stand") return 1.8;
      if (type === "driving") return 2;
      if (type === "clean") return 3.5;
      if (type === "cook") return 2.5;
      if (type === "dishes") return 2.2;
      if (type === "washwindows") return 4.9;
      if (type === "washfloor") return 3.3;
      if (type === "yardwork") return 5;
      if (type === "shoveling") return 8.5;

      if (type === "walk") return 2;
      if (type === "walk_medium") return 5;
      if (type === "jog") return 6.3;
      if (type === "run") return 11.2;
      if (type === "stairs") return 4.7;

      if (type === "hitt") return 8;
      if (type === "calisthenics") return 5;
      if (type === "hiking") return 6;
      if (type === "dance") return 5;
      if (type === "rowing_slow") return 5.5; //4km
      if (type === "rowing_medium") return 13.5; //12km
      if (type === "row_fast") return 19.1; //20km
      if (type === "climb") return 1.8;
      if (type === "martialarts") return 10.5;
      if (type === "jumprope") return 11;
      if (type === "skateboarding") return 6.5;
      if (type === "yoga") return 2.5;

      if (type === "bike_slow") return 5;
      if (type === "bike") return 8;
      if (type === "bike_fast") return 10;
      if (type === "swim") return 6;
      if (type === "tennis_singles") return 8;

      if (type === "sports") return 10;

      if (type === "weightlift_light") return 3.5;
      if (type === "weightlift_heavy") return 7;
    },
    getMetToCal(type = 0, activityMet = "sleep", minutes = 1) {
      let activityValue = this.activityToMet(activityMet);
      let met = (activityValue * 3.5 * this.userWeight) / 200; // calories burnt/minute
      if (type === 0) {
        return (met * minutes).toFixed(2);
      }
    },

    showMaxHeartRate(percent = 100) {
      // let maxHR = 220 - this.getMetabolicAge();
      let maxHR = 208 - 0.7 * this.getMetabolicAge();
      // console.log(
      //   "maxHR:",
      //   percent,
      //   percent * 0.01,
      //   maxHR * (80 * 0.01),
      //   (percent * 0.01 * maxHR).toFixed(0)
      // );
      return (maxHR * percent * 0.01).toFixed(0);
    },
    show1RM(type = 0) {
      let useLB = this.userKG ? 1 : 1; //
      let guessMale =
        this.userWeight *
        (0.676 * (0.149 * (this.userSkill * 0.46) + 1)) *
        useLB;
      let guessFemale =
        this.userWeight *
        (0.434 * (0.149 * (this.userSkill * 0.64) + 1)) *
        useLB;
      let lossOfStrength =
        this.userAge - 39 < 0 ? 0 : (this.userAge - 39) * 1.5;
      let unitKG = this.userKG ? " KG" : " LB";

      // let unitCM = this.userCM ? ' CM' : ' FT'
      let guessMale2 = guessMale - guessMale * (lossOfStrength * 0.01);
      let guessFemale2 = guessFemale - guessFemale * (lossOfStrength * 0.01);

      // get percentages from guessMale & guessFemale bases
      if (type > 100 && type < 201) {
        return (guessMale * ((type - 100) * 0.01)).toFixed(0) + `${unitKG}`;
      }
      if (type > 200 && type < 301) {
        return (guessFemale * ((type - 200) * 0.01)).toFixed(0) + `${unitKG}`;
      }

      if (type === 0) return guessMale.toFixed(2) + `${unitKG}`;
      if (type === 1) return guessFemale.toFixed(2) + `${unitKG}`;
      if (type === 2) return guessMale2.toFixed(2) + `${unitKG}`;
      if (type === 3) return guessFemale2.toFixed(2) + `${unitKG}`;
      if (type === 4) return guessMale2.toFixed(0) + `${unitKG}`;
      if (type === 5) return guessFemale2.toFixed(0) + `${unitKG}`;
    },
    showIdealWeight(type = 0) {
      let useLB = this.userKG ? 1 : 2.20462;
      let userHeight = this.convertHeightToCM();
      let userWeight = this.userWeight;
      let guessMale1 = 48 + (2.7 * (userHeight - 152)) / 2.64;
      let guessMale2 = 50 + (2.3 * (userHeight - 152)) / 2.64;
      let guessMale3 = 52 + (1.9 * (userHeight - 152)) / 2.64;
      let guessMale4 = 56.2 + (1.41 * (userHeight - 152)) / 2.64;

      let guessFemale1 = 45.5 + (2.2 * (userHeight - 152)) / 2.64;
      let guessFemale2 = 45.5 + (2.3 * (userHeight - 152)) / 2.64;
      let guessFemale3 = 49 + (1.7 * (userHeight - 152)) / 2.64;
      let guessFemale4 = 53.1 + (1.36 * (userHeight - 152)) / 2.64;

      let guessMaleAvg =
        (guessMale1 + guessMale2 + guessMale3 + guessMale4) / 4;
      let guessFemaleAvg =
        (guessFemale1 + guessFemale2 + guessFemale3 + guessFemale4) / 4;

      let unitKG = this.userKG ? " KG" : " LB";
      let maleWeightDiff = this.userWeight - guessMaleAvg * useLB;
      let femaleWeightDiff = this.userWeight - guessFemaleAvg * useLB;

      let difMod = "";
      if (maleWeightDiff > 0) difMod = "+";

      if (type === 0) return (guessMaleAvg * useLB).toFixed(2) + `${unitKG}`;
      if (type === 1) return (guessFemaleAvg * useLB).toFixed(2) + `${unitKG}`;
      if (type === 2) return difMod + maleWeightDiff.toFixed(2) + `${unitKG}`;
      if (type === 3) return difMod + femaleWeightDiff.toFixed(2) + `${unitKG}`;
      if (type === 4) return maleWeightDiff.toFixed(2);
      if (type === 5) return femaleWeightDiff.toFixed(2);

      if (type === 6) return (userWeight * 1).toFixed(2) + `${unitKG}`;
    },
    getBMI(type = 0) {
      let useLB = this.userKG ? 1 : 0.453592;
      let userHeight = this.convertHeightToCM();
      let bmi = ((this.userWeight * useLB) / (userHeight * userHeight)) * 10000;
      let category = [
        "Severe Thinness",
        "Moderate Thinness",
        "Mild Thinness",
        "Good",
        "Ideal",
        "Overweight",
        "Overweight Class 1",
        "Overweight Class 2",
        "Overweight Class 3",
      ];
      if (this.userSkill > 0) {
        bmi = bmi - this.userSkill;
      }

      if (type === 0) return bmi.toFixed(2);
      if (type === 1) {
        if (bmi < 16) return category[0]; // severely thin
        if (bmi >= 16.01 && bmi < 17) return category[1];
        if (bmi >= 17 && bmi < 18) return category[2];
        if (bmi >= 18 && bmi < 18.4) return category[3];
        if (bmi >= 18.4 && bmi < 25) return category[4];
        if (bmi >= 25 && bmi < 30) return category[5];
        if (bmi >= 30 && bmi < 35) return category[6];
        if (bmi >= 35 && bmi < 40) return category[7];
        if (bmi > 40) return category[8];
      }
    },
    getBMR(type = 0) {
      const unit = " Cal";
      let useLB = this.userKG ? 1 : 0.453592;
      let userHeight = this.convertHeightToCM();
      let bmrHarMale =
        13.397 * this.userWeight * useLB +
        4.799 * userHeight -
        5.677 * this.userAge +
        88.362;
      let bmrHarFemale =
        9.247 * this.userWeight * useLB +
        3.098 * userHeight -
        4.33 * this.userAge +
        447.593;
      let bmrMifMale =
        10 * this.userWeight * useLB + 6.25 * userHeight - 5 * this.userAge + 5;
      let bmrMifFemale =
        10 * this.userWeight * useLB +
        6.25 * userHeight -
        5 * this.userAge +
        161;
      let bmrRosaMale =
        88.362 +
        4.799 * this.userHeight +
        13.397 * this.userWeight * useLB -
        5.677 * this.userAge;
      let bmrRosaFemale =
        447.593 +
        3.098 * this.userHeight +
        9.247 * this.userWeight * useLB -
        4.33 * this.userAge;

      let bmrAvgMale = (bmrHarMale + bmrMifMale + bmrRosaMale) / 3;
      let bmrAvgFemale = (bmrHarFemale + bmrMifFemale + bmrRosaFemale) / 3;
      bmrAvgMale = bmrRosaMale;
      bmrAvgFemale = bmrRosaFemale;
      let maxLooseMale = bmrAvgMale + bmrAvgMale * -0.25;
      let maxLooseFemale = bmrAvgFemale + bmrAvgFemale * -0.25;
      let looseMale = bmrAvgMale + bmrAvgMale * -0.15;
      let looseFemale = bmrAvgFemale + bmrAvgFemale * -0.15;
      let gainMale = bmrAvgMale + bmrAvgMale * 0.5;
      let gainFemale = bmrAvgFemale + bmrAvgFemale * 0.5;
      let maintainMale = bmrAvgMale + bmrAvgMale * 0.2;
      let maintainFemale = bmrAvgFemale + bmrAvgFemale * 0.2;

      if (type === 0) return bmrAvgMale.toFixed(0) + unit;
      if (type === 1) return bmrAvgFemale.toFixed(0) + unit;

      if (type === -1) return looseMale.toFixed(0) + unit;
      if (type === -2) return looseFemale.toFixed(0) + unit;

      if (type === -3) return maxLooseMale.toFixed(0) + unit;
      if (type === -4) return maxLooseFemale.toFixed(0) + unit;

      if (type === 2) return maintainMale.toFixed(0) + unit;
      if (type === 3) return maintainFemale.toFixed(0) + unit;

      if (type === 4) return gainMale.toFixed(0) + unit;
      if (type === 5) return gainFemale.toFixed(0) + unit;
    },
    //get rmr ?
    getRMR(type = 0) {
      let useLB = this.userKG ? 1 : 0.453592;
      const fOxfordMale = [
        "61.0:-33.7",
        "23.3:514",
        "18.4:581",
        "16.0:545",
        "14.2:593",
        "13.5:514",
      ];
      const fOxfordFemale = [
        "58.9:-23.1",
        "20.1:507",
        "11.1:761",
        "13.1:558",
        "9.74:694",
        "10.1:569",
      ];
      if (type == 0) {
        //oxford male
        if (this.userAge >= 60) {
          const formula = fOxfordMale[5].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 30) {
          const formula = fOxfordMale[4].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 18) {
          const formula = fOxfordMale[3].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 10) {
          const formula = fOxfordMale[2].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 3) {
          const formula = fOxfordMale[1].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 0) {
          const formula = fOxfordMale[0].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
      }
      if (type == 1) {
        //oxford female
        if (this.userAge >= 60) {
          const formula = fOxfordFemale[5].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 30) {
          const formula = fOxfordFemale[4].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 18) {
          const formula = fOxfordFemale[3].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 10) {
          const formula = fOxfordFemale[2].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 3) {
          const formula = fOxfordFemale[1].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 0) {
          const formula = fOxfordFemale[0].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
      }
    },
    estBodyFatFromBMI(type = 0) {
      //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3263863/#s5title
      // BF% = –44.988 + (0.503 × age) + (10.689 × sex) + (3.172 × BMI) – (0.026 × BMI2) + (0.181 × BMI × sex) – (0.02 × BMI × age) – (0.005 ×BMI2 × sex) + (0.00021 × BMI2 × age)

      let bmi = this.getBMI();
      let age = this.getMetabolicAge();
      let weight = this.userWeight;
      let baseBF = 1.2 * bmi + 0.23 * this.userAge;
      // let male = (baseBF - 16.2).toFixed(1);
      // let female = (baseBF - 5.4).toFixed(1);
      // if (type === 0) return male;
      // if (type === 1) return female;
      let sex = type;
      if (sex > 1) sex -= 2;
      let bfp =
        -44.988 +
        0.503 * age +
        10.689 * sex +
        3.172 * bmi -
        0.026 * bmi * bmi +
        0.181 * bmi * sex -
        0.02 * bmi * age -
        0.005 * (bmi * bmi) * sex +
        0.00021 * (bmi * bmi) * age;
      // console.log("sex:", type, sex, bmi, age, "!!");
      if (type <= 1) return bfp.toFixed(2);

      //show lean mass
      if (type > 1) return (weight - weight * (bfp * 0.01)).toFixed(2);
    },
    getMetabolicAge() {
      let useLB = this.userKG ? 1 : 0.453592;
      let userHeight = this.convertHeightToCM();
      let bmi = ((this.userWeight * useLB) / (userHeight * userHeight)) * 10000;
      let userAge = parseInt(this.userAge);

      if (bmi < 18) {
        return userAge + 1; // underweight
      }
      if (bmi >= 25 && bmi < 29.9) {
        return userAge + 2; //overweight
      }

      if (bmi > 35) {
        return userAge + (parseInt(bmi) - 30); //obese
      }
      if (bmi > 30) {
        return userAge + 3; //obese
      }
      if (bmi > 18 && bmi < 18.5) {
        return userAge; //yourage
      }
      if (bmi > 18.5 && bmi < 25) {
        return userAge - 1; //ideal
      }
      return this.userAge;

      // // let userHeight = this.convertHeightToCM()
      // let male = (10 * this.userWeight) + (6.25 * this.userHeight) - (5 * this.userAge) -161
      // let female = (10 * this.userWeight) + (6.25 * this.userHeight) - (5 * this.userAge) + 5

      // if(type===0) return male.toFixed(0)
      // if(type===1) return female.toFixed(0)
    },
    toggleCM(yes) {
      this.userCM = yes;
      if (yes) {
        this.$refs.userCMObj.classList.remove("bg-secondary");
        this.$refs.userCMObj.classList.add("bg-info");
        this.$refs.userFTObj.classList.remove("bg-info");
        this.$refs.userFTObj.classList.add("bg-secondary");

        this.userHeight = this.convertHeightToCM();
        this.userHeightImp = null;
        this.$refs.userHeight.type = "number";
      } else {
        this.$refs.userFTObj.classList.remove("bg-secondary");
        this.$refs.userFTObj.classList.add("bg-info");
        this.$refs.userCMObj.classList.remove("bg-info");
        this.$refs.userCMObj.classList.add("bg-secondary");
        this.userHeight = this.convertHeightToFT();
        this.userHeightImp = this.convertHeightToFT();
        this.$refs.userHeight.type = "text";
      }
    },
    toggleKG(yes) {
      this.userKG = yes;
      if (yes) {
        this.$refs.userKGObj.classList.remove("bg-secondary");
        this.$refs.userKGObj.classList.add("bg-info");
        this.$refs.userLBObj.classList.remove("bg-info");
        this.$refs.userLBObj.classList.add("bg-secondary");
      } else {
        this.$refs.userLBObj.classList.remove("bg-secondary");
        this.$refs.userLBObj.classList.add("bg-info");
        this.$refs.userKGObj.classList.remove("bg-info");
        this.$refs.userKGObj.classList.add("bg-secondary");
      }
    },
  },
  mounted() {
    console.log("basemeasure mounted");
    if (this.userHeightImp != "null" && this.userHeightImp !== null)
      this.toggleCM(false);
    // this.toggleCM(this.userCM);
    // this.toggleKG(this.userKG);
  },
  computed: {
    citationSummaryFormat() {
      return this.citationSummary.replaceAll("''", '"');
    },
  },
};
</script>

<style lang="scss">
.is-card-type {
  position: relative;
  display: block;

  background: $primary;
  border: 2px solid $secondary;
  color: $positive;
  font-size: 1.4em;
  text-align: center;
  padding: 1em;
  overflow-wrap: break-word;
  // padding-bottom: 2em;
  overflow: hidden;
  // overflow-x: scroll;
}
.title-text {
  position: relative;
  top: -0.5em;
  font-size: 1.2em;
  border-bottom: 6px double $secondary;

  text-align: center;

  text-shadow: 2px 2px 0 $accent, 2px -2px 0 $accent, -2px 2px 0 $accent,
    -2px -2px 0 $accent, 2px 0px 0 $accent, 0px 2px 0 $accent,
    -2px 0px 0 $accent, 0px -2px 0 $accent;
}
.is-retro-icon {
  overflow-wrap: break-word;
  overflow-x: hidden;
  // text-overflow: clip;
}
.is-retro-icon .mdi {
  padding: 2px;
  text-shadow: 2px 2px 0 $primary, 2px -2px 0 $primary, -2px 2px 0 $primary,
    -2px -2px 0 $primary, 2px 0px 0 $primary, 0px 2px 0 $primary,
    -2px 0px 0 $primary, 0px -2px 0 $primary;
}
.btn-group {
  display: inline-block;
}
input,
select {
  width: auto;
  max-width: 100%;
}
.mdi-check-outline {
  color: $positive;
}
.text-circle {
  border: 3px solid $negative;
  border-radius: 2em;
  padding: 1em;
}
label {
  border-bottom: 1px thin #000000;
}

.border-selection {
  position: relative;
  border: 4px solid $info;
  border-bottom: 4px solid $info !important;
  background: $positive;
  border-radius: 50%;
}
.border-selection::after {
  content: "◀";
  // right: -2em;
  right: 0.5em;
  top: auto;
  position: relative;
  font-size: 1.45em;
  animation: blinker 2s steps(1, end) infinite;
  // color: $info;
}

.border-selection .mdi {
  position: relative;
  color: #ffffff;
  animation: colorCycle 2s ease infinite;
}
table {
  border-collapse: collapse;
  border: 2px solid #cccccc;
  padding: 1em;
  position: relative;
  width: 100%;
}
table td {
  padding: 0.5em;
  border-right: 1px dotted $primary;
  position: relative;
}
table th {
  border-right: 1px dotted $primary;
}
.text-is-stamp {
  font-family: "Saira Stencil One", cursive;
  font-size: 1.2em;
  position: absolute;
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(-3deg);
  top: -0.25em;
  left: 0.5em;
  text-transform: uppercase;

  color: #000;
  border: 3px double #000;
  border-radius: 7px;
  padding: 1px;
  opacity: 0.99;
  color: #eee;
  // background: #ffffff;
  text-shadow: 1px 1px 0 $dark, 1px -1px 0 $dark, -1px 1px 0 $dark,
    -1px -1px 0 $dark, 1px 1px 0 $dark, 0px 1px 0 $dark, -1px 0px 0 $dark,
    0px -1px 0 $dark;
  // -webkit-box-shadow: inset 1px 1px 7px -2px #000000;
  // box-shadow: inset 1px 1px 2px -1px #000000;
}
.border-positive {
  border-color: $positive;
}
.border-negative {
  border-color: $negative;
}
.border-primary {
  border-color: $primary;
}
.border-info {
  border-color: $info;
}
@keyframes glower {
  // 0% {
  //   -webkit-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
  //   -moz-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
  //   box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
  // }
  0% {
    -webkit-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $info,
      0px 0px 20px 0px $secondary, inset 5px 5px 15px 5px $warning;
  }
  50% {
    -webkit-box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
    -moz-box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
    box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
  }
  75% {
    -webkit-box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
    -moz-box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
    box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $positive, inset 5px 5px 15px 5px $dark;
  }
  100% {
    -webkit-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $info,
      0px 0px 20px 0px $secondary, inset 5px 5px 15px 5px $warning;
  }
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}

@keyframes colorCycle {
  0% {
    color: $primary;
  }
  25% {
    color: $accent;
  }
  50% {
    color: $warning;
  }
  60% {
    color: $dark;
  }

  75% {
    color: $positive;
  }
  100% {
    color: $info;
  }
}
fieldset {
  border: 4px solid $dark;
  border-top: 4px solid #666 !important;
}
legend {
  // border-top: 4px solid #ff9900;
  font-size: 1.7em;
  padding: 4px;
}
input[type="checkbox"] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  vertical-align: middle;
  outline: none;
  font-size: inherit;
  outline: none !important;
  box-shadow: none;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 0% !important;
  // outline: 3px solid $dark !important;
  position: relative;
  margin: 8px;
  padding: 2px;
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
}
input[type="checkbox"]:checked {
  background: $info;
}
input[type="checkbox"]:checked:after {
  content: "✕";
  position: absolute;
  font-size: 4em;
  left: -0.05em;
  top: -0.5em;
  bottom: auto;
  // top: auto;
  text-align: center;
  color: $positive;
  justify-content: center;
}
.check-label {
  position: relative;
  font-size: 1.5em;
  // top: -0.5em;
}

.citation {
  position: relative;
  color: $primary;
  font-size: 1em;
  border: 1px solid $primary;
  border-radius: 5px;
  padding: 0.2em;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: all 1s ease;
}
.citation:hover,
.citation:active {
  opacity: 1;

  filter: grayscale(0%);
  // font-size: 1.1em;
  // padding: 0.1em;
  background: $accent;
  animation: colorCycle 2s ease infinite, glower 3s ease forwards infinite;
  box-shadow: inset 5px 5px 15px 5px #000000;
}
.row td .citation {
  position: relative;
  background: #ff9900;
}
details {
  // margin: 1em;
}
details > summary {
  // content: "dffdfdfd1112";
}
summary::before {
  content: "▶";
  // right: -2em;
  right: 0.25em;
  // top: -0.25em;
  position: relative;
  font-size: 2em;
  animation: blinker 2s steps(1, end) infinite;
  // color: $info;
}
details[open] > summary::after {
  content: "hide this";
  border: 1px solid $negative;
  padding: 0.25em;
  background: $secondary;
  animation: blinker 2s steps(1, end) infinite;
}
details[open] > summary::before {
  content: "▼";
  animation: none;
}
details[open] > summary span {
  display: none;
}
</style>
