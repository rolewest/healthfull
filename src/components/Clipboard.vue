<template>
  {{}}
  <span v-if="this.$route.name == 'prescription'" class="hidden">
    <!-- Current Gender -->
    <div class="input-group mb-3 w-75 shadow-sm">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"></span>
      </div>
      <q-btn
        ref="flipMale"
        :class="{
          'btn btn-secondary': true,
          'bg-secondary': this.userGender == 1,
          'bg-info': this.userGender == 0,
        }"
        @click="flipGender(0)"
      >
        <q-icon name="mdi-human-male" size="25px" /> male&nbsp;
      </q-btn>
      <q-btn
        ref="flipFemale"
        :class="{
          'btn btn-secondary': true,
          'bg-secondary': this.userGender == 0,
          'bg-info': this.userGender == 1,
        }"
        @click="flipGender(1)"
      >
        <q-icon name="mdi-human-female" size="25px" /> female&nbsp;
      </q-btn>
    </div></span
  >

  <div class="clip shadow"></div>
  <div class="clipBoard table-responsive">
    <div class="paperSheet shadow">
      <table class="table">
        <thead>
          <tr class="text-center">
            <th scope="col">
              <span
                class="text-is-stamp"
                :class="
                  showIdealWeight(4) > -14 && showIdealWeight(4) < 5
                    ? 'text-info'
                    : 'border-negative'
                "
                >{{ getBMI(1) }}</span
              >
              &nbsp;
            </th>
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
              colspan="100%"
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
            <td
              class="maleChart"
              :class="{
                'text-negative': getMetabolicAge() > userAge,
                'text-positive': getMetabolicAge() < userAge,
              }"
            >
              {{ getMetabolicAge() }}
            </td>
            <td
              class="femaleChart"
              :class="{
                'text-negative': getMetabolicAge() > userAge,
                'text-positive': getMetabolicAge() < userAge,
              }"
            >
              {{ getMetabolicAge() }}
            </td>
            <td class="text-center">
              <span
                class="mdi mdi-comment-quote-outline citation"
                @click="
                  citation(
                    1,
                    'Met-Age',
                    'Metabolic Age',
                    `Met-age is highly associated with and is an indicator of high-risk of developing Metabolic Syndromes such as heart disease, stroke and type 2 diabetes.`,
                    `Met-age showed a higher discriminatory capacity for CVR than chronological age (1).Metabolic age can be a useful tool for assessing the metabolic status of individuals. A study by the European Society of Cardiology used metabolic age as one of the predictors for cardiovascular disorders in people hav-ing a higher metabolic age than their chronological age (2).`,
                    `A higher metabolic age than chronological age indicates a level of basic metabolism with low physical activity.`,

                    'theme-checked'
                  )
                "
              ></span>
            </td>
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
              <span class="mdi mdi-check-outline text-success"></span> BMI -
              Body Mass Index
              <div></div>
            </th>
            <td class="maleChart">{{ getBMI(0) }}</td>
            <td class="femaleChart">{{ getBMI(0) }}</td>
            <td class="text-center">
              <span
                class="mdi mdi-comment-quote-outline citation"
                @click="
                  citation(
                    1,
                    'BMI',
                    'Body Mass Index',
                    `This figure has a lot of mixed opinions, as it doesn't take in to account muscle mass, bone density and others, but ''BMI was a stronger predictor of CVD mortality than total adiposity markers, particularly BF% and FMI, assessed with accurate methods...[PMID: 26948431]'' so too much body fat OR muscle can be dangerous.`,
                    ` suggests that the simple and inexpensive measure of BMI can be as clinically important measure or even more than total adiposity measures assessed by accurate, complex and expensive methods [PMID: 26948431]. Hopefully both detractors and proponents of BMI can agree that the measure is imperfect – not unlike any other measure of health – but if and when better framed as a holistic assessment of health relative to weight, it can provide valuable insights into obesity as an individual and social condition [PMID: 31007613].`,
                    ``,
                    'theme-red'
                  )
                "
              ></span>
            </td>
          </tr>

          <tr v-if="userNeck > 0 && userWaist > 0">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> BF% -
              Measured
            </th>
            <td class="maleChart">
              {{ navyBFP(0).toFixed(2) }}% ({{ bfpToCategory(0, navyBFP(0)) }})
            </td>
            <td class="femaleChart">
              {{ navyBFP(1).toFixed(2) }}% ({{ bfpToCategory(1, navyBFP(1)) }})
            </td>
            <td class="text-center">
              <span
                class="mdi mdi-comment-quote-outline citation"
                @click="
                  citation(
                    1,
                    'BF% - Tested Formula',
                    'Body Fat Percentage',
                    `A more reliable measure of body fat to avoid levels above 25.8% for men and 37.1% for women will have lower risk of disease and lower mortality rates.`,
                    `Navy-seal formula and bioelectrical impedance are both simple and reliable instruments to measure body composition in adults. The navy-seal formula can be used to screen individuals with high-fat body fat ratio whereas bioelectric impedance can be used to measure the body composition for personal monitoring[1]. The real test of these equations for classifying individuals for excess fat or insufficient muscle mass would be the strength of the association with physical readiness and physical fitness performance[2].`,
                    `This method is using your measurements has been used for decades by the US Navy and is proven to be more reliable than the BMI approach.`,

                    'theme-checked'
                  )
                "
              ></span>
            </td>
          </tr>
          <tr :class="{ unHighlight: userNeck > 0 && userWaist > 0 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> BF% -
              Body Fat Percent - BMI Based
            </th>
            <td class="maleChart">
              {{ estBodyFatFromBMI(0) }}% ({{
                bfpToCategory(0, estBodyFatFromBMI(0))
              }})
            </td>
            <td class="femaleChart">
              {{ estBodyFatFromBMI(1) }}% ({{
                bfpToCategory(1, estBodyFatFromBMI(1))
              }})
            </td>
            <td class="text-center">
              <span
                class="mdi mdi-comment-quote-outline citation"
                @click="
                  citation(
                    1,
                    'BF% - BMI Based',
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
          <tr v-if="userNeck > 0 && userWaist > 0 && userHip > 0">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> BFM -
              Measured
            </th>
            <td class="maleChart">
              {{ navyBFP(4) }} {{ userKG ? " KG" : " LB" }}
            </td>
            <td class="femaleChart">
              {{ navyBFP(5) }} {{ userKG ? " KG" : " LB" }}
            </td>
            <td class="text-center"></td>
          </tr>
          <tr :class="{ unHighlight: userNeck > 0 && userWaist > 0 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> BFM -
              Body Fat Mass - BMI Based
            </th>
            <td class="maleChart">
              {{ estBodyFatFromBMI(4) }} {{ userKG ? " KG" : " LB" }}
            </td>
            <td class="femaleChart">
              {{ estBodyFatFromBMI(5) }} {{ userKG ? " KG" : " LB" }}
            </td>
            <td class="text-center">
              <span
                class="mdi mdi-comment-quote-outline citation"
                @click="
                  citation(
                    1,
                    'BFM',
                    'Body Fat Mass',
                    ``,
                    ``,
                    ``,

                    'theme-notice'
                  )
                "
              ></span>
            </td>
          </tr>
          <tr v-if="userNeck > 0 && userWaist > 0 && userHip > 0">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> LBM -
              Measured
            </th>
            <td class="maleChart">
              {{ navyBFP(2) }} {{ userKG ? " KG" : " LB" }} ({{
                ((navyBFP(2) / userWeight) * 100).toFixed(0)
              }}%)
            </td>
            <td class="femaleChart">
              {{ navyBFP(3) }} {{ userKG ? " KG" : " LB" }} ({{
                ((navyBFP(3) / userWeight) * 100).toFixed(0)
              }}%)
            </td>
            <td class="text-center"></td>
          </tr>

          <tr :class="{ unHighlight: userNeck > 0 && userWaist > 0 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> LBM -
              Lean Body Mass - BMI Based
            </th>
            <td class="maleChart">
              {{ estBodyFatFromBMI(2) }} {{ userKG ? " KG" : " LB" }} ({{
                ((estBodyFatFromBMI(2) / userWeight) * 100).toFixed(0)
              }}%)
            </td>
            <td class="femaleChart">
              {{ estBodyFatFromBMI(3) }} {{ userKG ? " KG" : " LB" }}({{
                ((estBodyFatFromBMI(3) / userWeight) * 100).toFixed(0)
              }}%)
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
              <span class="mdi mdi-check-outline text-success"></span> RMR -
              Resting Metabolic Rate
            </th>
            <td class="maleChart">{{ getRMR(0) }}</td>
            <td class="femaleChart">{{ getRMR(1) }}</td>
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
              Basal Metabolic Rate
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
          <!-- vo2Max -->
          <tr>
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span>
              Vo<sub>2max</sub>
            </th>
            <td class="text-center maleChart">
              <q-icon name="mdi-gas-cylinder" class="" size="2em" />
              ~{{ v02Max(6) }} - {{ vo2MaxRate(0) }}
              <!-- {{ parseInt(v02Max(0)) * userWeight }} -->
            </td>
            <td class="text-center femaleChart">
              <q-icon name="mdi-gas-cylinder" class="" size="2em" />
              ~{{ v02Max(7) }} - {{ vo2MaxRate(1) }}
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              class="text-center font-weight-bold text-primary"
              colspan="100%"
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
              <span class="mdi mdi-check-outline text-success"></span> Light Jog
            </th>
            <td colspan="2" class="text-center">
              ~{{ getMetToCal((type = 0), "jog") }} Cal
            </td>
          </tr>
          <tr>
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> Jump Rope
              / Skipping
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
              colspan="100%"
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
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(100))"
              />
              ~{{ showMaxHeartRate(100) }} BPM
            </td>
            <td class="text-center">
              <!-- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7523886/#__sec6title -->
              <span
                class="mdi mdi-comment-quote-outline citation"
                @click="
                  citation(
                    1,
                    'HRmax',
                    'Max Heart Rate',
                    `This is the estimated maximum beats/minute that your heart could perform. Exercise at certain percentages of HRmax burns more Calories with less time wasted.`,
                    `the traditional equation underestimates HRmax after age 40 years, markedly so in older adults [Tanaka study 2001; PMID: 11153730 ].Validation of the previously suggested HR max formulas
showed that both the widely used equation initially proposed by Fox et al. (1971), the more recent
equation by Tanaka. (2001)[...] underestimated measured HR max in the present population The Fox equation may represent the best option for a general population as it is less likely to under or overestimate based on individual HRmax. [Shookster study; 2020;PMID:33042384].`,
                    `We use the refined formula devised in the Hunt Study, the Tanaka, and the Fox formula, averaged off of your metabolic age for added security as studies have shown that all three have merits and flaws when applied to general populations.`,
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
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(90))"
              />
              ~{{ showMaxHeartRate(90) }} BPM
            </td>
          </tr>
          <tr :class="{ 'border-selection': userSkill >= 8 && userSkill <= 9 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span>
              HRmax - Heart Rate @ 85%
            </th>
            <td colspan="2" class="text-center">
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(85))"
              />
              ~{{ showMaxHeartRate(85) }} BPM
            </td>
          </tr>
          <tr :class="{ 'border-selection': userSkill >= 6 && userSkill <= 7 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span>
              HRmax - Heart Rate @ 80%
            </th>
            <td colspan="2" class="text-center">
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(80))"
              />
              ~{{ showMaxHeartRate(80) }} BPM
            </td>
          </tr>
          <tr :class="{ 'border-selection': userSkill >= 4 && userSkill <= 5 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span>
              HRmax - Heart Rate @ 75%
            </th>
            <td colspan="2" class="text-center">
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(75))"
              />
              ~{{ showMaxHeartRate(75) }} BPM
            </td>
          </tr>
          <tr :class="{ 'border-selection': userSkill >= 2 && userSkill <= 3 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span>
              HRmax - Heart Rate @ 70%
            </th>
            <td colspan="2" class="text-center">
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(70))"
              />
              ~{{ showMaxHeartRate(70) }} BPM
            </td>
          </tr>
          <tr :class="{ 'border-selection': userSkill == 1 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span>
              HRmax - Heart Rate @ 65%
            </th>
            <td colspan="2" class="text-center">
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(65))"
              />
              ~{{ showMaxHeartRate(65) }} BPM
            </td>
          </tr>
          <tr :class="{ 'border-selection': userSkill == 0 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span>
              HRmax - Heart Rate @ 60%
            </th>
            <td colspan="2" class="text-center">
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(60))"
              />
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
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(55))"
              />
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
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(50))"
              />
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
              <q-icon
                name="mdi-heart-pulse"
                class="pulseVibrate"
                @click="bmpToVibrate(showMaxHeartRate(45))"
              />
              ~{{ showMaxHeartRate(45) }} BPM
            </td>
          </tr>

          <!-- <tr>
              <th scope="row">
                <span class="mdi mdi-check-outline text-success"></span>
                PAI
              </th>
              <td colspan="1" class="text-center">
                <q-icon name="mdi-gas-cylinder" class="" size="2em" />
                ~{{ v02Max(6) }}
              </td>
              <td colspan="1" class="text-center">
                <q-icon name="mdi-gas-cylinder" class="" size="2em" />
                ~{{ v02Max(7) }}
              </td>
            </tr> -->
          <!-- strength -->
          <tr>
            <th
              scope="row"
              class="text-center font-weight-bold text-primary"
              colspan="100%"
            >
              <span class="mdi mdi-dumbbell text-h5"></span> Lift Strength
            </th>
          </tr>

          <tr class="text-center">
            <th scope="col">Estimated Lift</th>
            <th scope="col" class="maleChart">Male</th>
            <th scope="col" class="femaleChart">Female</th>

            <th scope="col" colspan="2">Info</th>
          </tr>

          <tr>
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> 1RM (1
              Rep Max.)
            </th>
            <td class="maleChart">~{{ show1RM(4) }}</td>
            <td class="femaleChart">~{{ show1RM(5) }}</td>
            <td class="text-center" colspan="2">
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
          <tr :class="{ 'border-selection': userSkill >= 5 && userSkill <= 9 }">
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> 1RM 90%
              @04reps
            </th>
            <td class="maleChart">~{{ show1RM(190) }}</td>
            <td class="femaleChart">~{{ show1RM(290) }}</td>
          </tr>
          <tr :class="{ 'border-selection': userSkill >= 1 && userSkill <= 4 }">
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
              @40reps
            </th>
            <td class="maleChart">~{{ show1RM(140) }}</td>
            <td class="femaleChart">~{{ show1RM(240) }}</td>
          </tr>
          <!-- EQUIVs: PPushups etc. -->
          <tr>
            <th
              scope="row"
              class="text-center font-weight-bold text-primary"
              colspan="100%"
            >
              <span class="mdi mdi-scale text-h5"></span> Body Weight
              Equivalents
            </th>
          </tr>
          <tr>
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> Push-up -
              Standard
            </th>
            <td class="maleChart">
              ~{{ (showIdealWeight(-1) * 0.7504).toFixed(1)
              }}{{ userKG ? " KG" : " LB" }}
            </td>
            <td class="femaleChart">
              ~{{ (showIdealWeight(-1) * 0.7504).toFixed(1)
              }}{{ userKG ? " KG" : " LB" }}
            </td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <th scope="row">
              <span class="mdi mdi-check-outline text-success"></span> Push-up -
              On Knees
            </th>
            <td class="maleChart">
              ~{{ (show1RM(0) * 0.618).toFixed(1) }}{{ userKG ? " KG" : " LB" }}
            </td>
            <td class="femaleChart">
              ~{{ (show1RM(1) * 0.618).toFixed(1) }}{{ userKG ? " KG" : " LB" }}
            </td>
            <td class="text-center"></td>
          </tr>
          <!-- micro lives -->

          <tr>
            <th
              scope="row"
              class="text-center font-weight-bold text-primary"
              colspan="100%"
            >
              <span class="text-h5"><q-icon name="troubleshoot"></q-icon></span>
              Health Risks
            </th>
          </tr>
          <!-- chance of heart disease -->
          <tr v-if="getHabitRisk('heart') || userConcerns.includes('heart')">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Risk of Heart Disease
            </th>
            <td colspan="2">
              {{
                getHabitRisk("heart") ? getHabitRisk("heart") : "extremely low"
              }}
            </td>

            <td class="text-center"></td>
          </tr>
          <!-- chance of cancer -->
          <tr v-if="getHabitRisk('cancer') || userConcerns.includes('cancer')">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Risk of Cancer
            </th>
            <td colspan="2">
              {{
                getHabitRisk("cancer")
                  ? getHabitRisk("cancer")
                  : "extremely low"
              }}
            </td>

            <td class="text-center"></td>
          </tr>

          <!-- chance of diabetes -->
          <tr
            v-if="getHabitRisk('diabetes') || userConcerns.includes('diabetes')"
          >
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Risk of Diabetes
            </th>
            <td colspan="2">
              {{
                getHabitRisk("diabetes")
                  ? getHabitRisk("diabetes")
                  : "extremely low"
              }}
            </td>

            <td class="text-center"></td>
          </tr>
          <!-- chance of dementia/alzheimer's -->
          <tr
            v-if="
              getHabitRisk('alzheimers') || userConcerns.includes('alzheimers')
            "
          >
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Increased Risk of Alzheimers / Dementia
            </th>
            <td colspan="2">
              {{
                getHabitRisk("alzheimers")
                  ? getHabitRisk("alzheimers")
                  : "extremely low"
              }}
            </td>

            <td class="text-center"></td>
          </tr>
          <!-- micro lives -->

          <tr>
            <th
              scope="row"
              class="text-center font-weight-bold text-primary"
              colspan="100%"
            >
              <span class="mdi mdi-timer-sand-complete text-h5"></span> Life
              Lost in 1 Year
            </th>
          </tr>
          <tr v-if="showIdealWeight('guess') >= 9">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Overweight
            </th>
            <td colspan="2" class="text-negative">
              {{
                `-${microLivesLostInYear(
                  "weight",
                  showIdealWeight("guess"),
                  undefined
                )}`
              }}
            </td>

            <td class="text-center"></td>
          </tr>

          <tr v-if="userLifestyleAlcohol != 0">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Alcohol
            </th>
            <td colspan="2" class="text-negative">
              {{
                `-${microLivesLostInYear(
                  "alcohol",
                  userLifestyleAlcohol,
                  userLifestyleAlcoholFreq
                )}`
              }}
            </td>
          </tr>

          <tr v-if="userLifestyleSoda != 0">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Soda Pop / Juice
            </th>
            <td colspan="2" class="text-negative">
              {{
                `-${microLivesLostInYear(
                  "soda",
                  userLifestyleSoda,
                  userLifestyleSodaFreq
                )}`
              }}
            </td>
            <td class="text-center"></td>
          </tr>
          <tr v-if="userLifestyleSmokes != 0">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Smoking
            </th>
            <td colspan="2" class="text-negative">
              {{
                `-${microLivesLostInYear(
                  "smoking",
                  userLifestyleSmokes,
                  userLifestyleSmokesFreq
                )}`
              }}
            </td>

            <td class="text-center"></td>
          </tr>

          <tr v-if="userLifestyleMeat != 0">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Meat
            </th>
            <td colspan="2" class="text-negative">
              {{
                `-${microLivesLostInYear(
                  "meat",
                  userLifestyleMeat,
                  userLifestyleMeatFreq
                )}`
              }}
            </td>

            <td class="text-center"></td>
          </tr>
          <tr v-if="userLifestyleSeafood != 0">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Seafood / Mercury
            </th>
            <td colspan="2" class="text-negative">
              <!-- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6950077/#sec5-ijerph-16-05152title -->
              <!-- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4776937/#sec1-1title -->
              {{
                `

                  -${microLivesLostInYear(
                    "seafood",
                    userLifestyleSeafood,
                    userLifestyleSeafoodFreq
                  )}`
              }}
            </td>

            <td class="text-center"></td>
          </tr>
          <tr v-if="userLifestyleDairy != 0">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Dairy / Eggs
            </th>
            <td colspan="2" class="text-negative">
              {{
                `-${microLivesLostInYear(
                  "dairy",
                  userLifestyleDairy,
                  userLifestyleDairyFreq
                )}`
              }}
            </td>

            <td class="text-center"></td>
          </tr>

          <tr v-if="userLifestyleSedentary >= 7">
            <th scope="row">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              Sedentary
            </th>
            <td colspan="2" class="text-negative">
              {{
                `-${microLivesLostInYear(
                  "sedentary",
                  userLifestyleSedentary,
                  userLifestyleSedentaryFreq
                )}`
              }}
            </td>

            <td class="text-center"></td>
          </tr>

          <tr v-if="getUserMicroLivesIn('guess')">
            <th scope="row" class="">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              <b class=""> Total Life Lost:</b>
            </th>
            <td colspan="2" class="bg-negative">
              {{
                `-${getUserMicroLivesIn("guess").split(" ")[0]} ${
                  getUserMicroLivesIn("guess").split(" ")[1]
                }`
              }}
            </td>

            <td class="text-center"></td>
          </tr>
          <tr v-if="!getUserMicroLivesIn('guess')">
            <th scope="row" class="">
              <span
                class="mdi mdi-alert-circle-outline text-h5 text-negative"
              ></span>
              <b class=""> Total Life Lost:</b>
            </th>
            <td colspan="2" class="bg-positive">0 minutes</td>

            <td class="text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- end of clipboard -->
</template>

<script>
export default {
  props: ["baseURL"],
  components: {},
  data() {
    return {
      showModal: false,
      showCitationModal: false,
      userGender: window.localStorage.getItem("userGender") || null,
      userLevel: window.localStorage.getItem("userLevel") || 1,
      userAge: window.localStorage.getItem("userAge") || null,
      userHeight:
        window.localStorage.getItem("userHeightImp") != "null"
          ? window.localStorage.getItem("userHeightImp")
          : window.localStorage.getItem("userHeight") || 170,
      userWeight: window.localStorage.getItem("userWeight") || 55,
      userSkill: window.localStorage.getItem("userSkill") || 0,
      baseMobility: 4,
      userKG: window.localStorage.getItem("userKG") || true,
      userCM: window.localStorage.getItem("userKG") || true,
      userHeightImp: window.localStorage.getItem("userHeightImp") || null,
      userWeightImp: window.localStorage.getItem("userWeightImp") || null,
      // user setup values (prefs/settings)
      userPlanPrefs: [],
      userHealthPoints: [],
      userCooks: "",
      userWholeFood: "",
      userBaseWork: "",
      userBaseExercise: [],
      userNeck: window.localStorage.getItem("userNeck") || 0,
      userWaist: window.localStorage.getItem("userWaist") || 0,
      userHip: window.localStorage.getItem("userHip") || 0,
      userRHR: window.localStorage.getItem("userRHR") || 0,
      userExerciseFrequency:
        window.localStorage.getItem("userExerciseFrequency") || 0,
      userExerciseEffort:
        window.localStorage.getItem("userExerciseEffort") || 0,
      userExerciseLength:
        window.localStorage.getItem("userExerciseLength") || 0,
      userBasePoints: {
        xp: window.localStorage.getItem("user.points.xp"),
        hp: window.localStorage.getItem("user.points.hp"),
        cp: window.localStorage.getItem("user.points.cp"),
      } || { xp: 0, hp: 0, cp: 0 },
      userConcerns: Array.isArray(window.localStorage.getItem("userConcerns"))
        ? window.localStorage.getItem("userConcerns")
        : JSON.parse(window.localStorage.getItem("userConcerns")) || [],
      userLifestyleAlcohol:
        window.localStorage.getItem("user.lifestyle.alcohol.count") || 0,
      userLifestyleAlcoholFreq:
        window.localStorage.getItem("user.lifestyle.alcohol.freq") || 52.177457,
      userLifestyleSoda:
        window.localStorage.getItem("user.lifestyle.soda.count") || 0,
      userLifestyleSodaFreq:
        window.localStorage.getItem("user.lifestyle.soda.freq") || 52.177457,
      userLifestyleSmokes:
        window.localStorage.getItem("user.lifestyle.smokes.count") || 0,
      userLifestyleSmokesFreq:
        window.localStorage.getItem("user.lifestyle.smokes.freq") || 52.177457,
      userLifestyleMeat:
        window.localStorage.getItem("user.lifestyle.meat.count") || 0,
      userLifestyleMeatFreq:
        window.localStorage.getItem("user.lifestyle.meat.freq") || 52.177457,
      userLifestyleSeafood:
        window.localStorage.getItem("user.lifestyle.seafood.count") || 0,
      userLifestyleSeafoodFreq:
        window.localStorage.getItem("user.lifestyle.seafood.freq") || 52.177457,
      userLifestyleDairy:
        window.localStorage.getItem("user.lifestyle.dairy.count") || 0,
      userLifestyleDairyFreq:
        window.localStorage.getItem("user.lifestyle.dairy.freq") || 52.177457,
      userLifestyleSedentary:
        window.localStorage.getItem("user.lifestyle.sedentary.count") || 0,
      userBodyGoal: window.localStorage.getItem("user.body.goal") || 0,
    };
  },
  methods: {
    riskFromDoctorMouth(risk = "", type = 0) {
      console.log("risk-=", risk);
      if (risk === "all") {
        let allRisk =
          parseFloat(this.getHabitRisk("heart", 1)) +
          parseFloat(this.getHabitRisk("cancer", 1)) +
          parseFloat(this.getHabitRisk("diabetes", 1)) +
          parseFloat(this.getHabitRisk("alzheimers", 1));
        if (type == "number") return allRisk;
        if (allRisk < 1) {
          return `According to my readings you're in excellent health!`;
        }
        if (allRisk < 2) {
          return `You seem to be taking care of yourself fairly well!`;
        }
        if (allRisk < 4) {
          return `We could improve one or two things to make you even healthier!`;
        }
        if (allRisk < 6) {
          return `We could improve things now to add years back to your life.`;
        }

        if (allRisk < 7) {
          return `I am starting to worry about Non Communicable Diseases.`;
        }
        if (allRisk < 9) {
          return `Making some changes now could drastically improve your lifespan and longevity.`;
        }
        if (allRisk < 12) {
          return `I'm quite concerned with a few of your health metrics. Let's make some changes.`;
        }
        if (allRisk < 16) {
          return `With a bit of work we can add YEARS back to your life!`;
        }
        if (allRisk >= 16) {
          return `With the right attitude and effort we can make some huge improvements!`;
        }
      }

      if (risk == "bodytype") {
        if (type == -2) return `loose that unwanted weight`;
        if (type == -1) return `loose that unwanted weight`;
        if (type == 0) return `maintain your current physique`;
        if (type == 1) return `obtain your athletic physique`;
        if (type == 2) return `obtain your muscular physique`;
        if (type == 3) return `maximize your body building results`;
      }
      // alert("predia:" + this.getBMI(0));
      if (risk == "prediabetes") {
        console.log(
          "prediaaa:L",
          this.getBMI(0) >= 20 && this.getBMI(0) < 22.2
        );
        if (this.getBMI(0) >= 20 && this.getBMI(0) < 22.2)
          return "Your body mass is nearing prediabetes.";
        if (this.getBMI(0) >= 22.2 && this.getBMI(0) < 22.6)
          return "Your body mass is at a prediabetic level.";
        if (this.getBMI(0) >= 22.6)
          return "Your body mass is dangerously above a prediabetic level.";
      }
      if (risk == "heart") {
        if (this.getHabitRisk(risk, 1) < 1)
          return `No signs of ${risk} disease.`;
        if (this.getHabitRisk(risk, 1) >= 1)
          return `You're ${risk} disease risk is ${this.getHabitRisk(risk)}.`;
      }
      if (risk == "alzheimers") {
        if (this.getHabitRisk(risk, 1) < 1)
          return `No signs of ${risk} disease.`;
        if (this.getHabitRisk(risk, 1) >= 1)
          return `${
            risk.charAt(0).toUpperCase() + risk.slice(1)
          } disease risk is ${this.getHabitRisk(risk)}.`;
      }
      if (risk == "diabetes") {
        if (this.getHabitRisk(risk, 1) < 1) return `No signs of ${risk}.`;
        if (this.getHabitRisk(risk, 1) >= 1)
          return `You're at ${this.getHabitRisk(risk)} risk for ${risk}.`;
      }
      if (risk == "cancer") {
        if (this.getHabitRisk(risk, 1) < 1)
          return `No obvious signs of ${risk}.`;
        if (this.getHabitRisk(risk, 1) >= 1)
          return `And for ${risk} your risk is ${this.getHabitRisk(risk)}.`;
      }
    },
    getHabitRisk(risk = "alzheimers", type = 0) {
      let writtenLevel = null;
      let numeralLevel = 0;
      let level = (
        this.microLivesLostInYear(
          "meat",
          this.userLifestyleMeat,
          this.userLifestyleMeatFreq,
          2
        ) *
          0.001 +
        this.microLivesLostInYear(
          "dairy",
          this.userLifestyleDairy,
          this.userLifestyleDairyFreq,
          2
        ) *
          0.0005 +
        this.microLivesLostInYear(
          "alcohol",
          this.userLifestyleAlcohol,
          this.userLifestyleAlcoholFreq,
          2
        ) *
          0.005 +
        this.microLivesLostInYear(
          "soda",
          this.userLifestyleSoda,
          this.userLifestyleSodaFreq,
          2
        ) *
          0.005 +
        this.microLivesLostInYear(
          "smoking",
          this.userLifestyleSmokes,
          this.userLifestyleSmokesFreq,
          2
        ) *
          0.0001
      ).toFixed(2);
      // console.log(
      //   "sed:",
      //   this.microLivesLostInYear(
      //     "sedentary",
      //     this.userLifestyleSedentary,
      //     this.userLifestyleSedentaryFreq,
      //     2
      //   ) * 0.001
      // );
      let useMultiplier = 0.001;
      if (risk == "alzheimers") {
        useMultiplier = 0.0005;
        level =
          parseFloat(level) +
          parseFloat(
            this.microLivesLostInYear(
              "seafood",
              this.userLifestyleSeafood,
              this.userLifestyleSeafoodFreq,
              2
            ) * 0.01
          );
      }
      if (
        this.microLivesLostInYear(
          "sedentary",
          this.userLifestyleSedentary,
          this.userLifestyleSedentaryFreq,
          2
        ) *
          useMultiplier >=
        10
      ) {
        level =
          parseFloat(level) +
          parseFloat(
            this.microLivesLostInYear(
              "sedentary",
              this.userLifestyleSedentary,
              this.userLifestyleSedentaryFreq,
              2
            ) * useMultiplier
          );
      }

      if (risk == "diabetes") {
        // console.log("whsd:", this.showIdealWeight("guess"));
        if (this.showIdealWeight("guess") > 10)
          level = parseFloat(level) + parseFloat(this.showIdealWeight("guess"));
      }

      if (risk == "heart" || risk == "cancer") {
        if (risk == "cancer") useMultiplier = 0.0001;
        if (risk == "heart") useMultiplier = 0.00001;
        console.log(
          "SNOKECHECKL:",
          parseFloat(level),
          parseFloat(
            this.microLivesLostInYear(
              "smoking",
              this.userLifestyleSmokes,
              this.userLifestyleSmokesFreq,
              1
            ) * useMultiplier
          )
        );
        level =
          parseFloat(level) +
          parseFloat(
            this.microLivesLostInYear(
              "smoking",
              this.userLifestyleSmokes,
              this.userLifestyleSmokesFreq,
              1
            ) * useMultiplier
          );
        console.log("SNOKECHECKL1:", parseFloat(level));
        if (risk == "cancer") useMultiplier = 0.00001;
        if (risk == "heart") useMultiplier = 0.0001;
        if (this.showIdealWeight("guess") > 7)
          level = parseFloat(level) + parseFloat(this.showIdealWeight("guess"));
        console.log("SNOKECHECKL2:", parseFloat(level));
      }

      // return values
      if (level >= 35) {
        writtenLevel = "dangerously high";
        numeralLevel = 7;
      }
      if (level < 35) {
        writtenLevel = "extremely high";
        numeralLevel = 6;
      }
      if (level < 30) {
        writtenLevel = "very high";
        numeralLevel = 5;
      }
      if (level < 25) {
        writtenLevel = "high";
        numeralLevel = 4;
      }
      if (level < 20) {
        writtenLevel = "medium";
        numeralLevel = 3;
      }

      if (level < 10) {
        writtenLevel = "low";
        numeralLevel = 2;
      }
      if (level <= 9) {
        writtenLevel = "unlikely";
        numeralLevel = 1;
      }
      if (level <= 7) {
        writtenLevel = "";
        numeralLevel = 0;
      }
      // return risks
      if (risk == "alzheimers") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }

      if (risk == "diabetes") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }
      if (risk == "heart") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }
      if (risk == "cancer") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }
      if (risk == "soda") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }
    },
    getUserMicroLivesIn(type = "min") {
      //https://understandinguncertainty.org/microlives
      // age * 17531.6255; //half hours in a year
      let total = 0;
      total += parseFloat(
        this.microLivesLostInYear(
          "alcohol",
          this.userLifestyleAlcohol,
          this.userLifestyleAlcoholFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "soda",
          this.userLifestyleSoda,
          this.userLifestyleSodaFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "smoking",
          this.userLifestyleSmokes,
          this.userLifestyleSmokesFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "meat",
          this.userLifestyleMeat,
          this.userLifestyleMeatFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "seafood",
          this.userLifestyleSeafood,
          this.userLifestyleSeafoodFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "dairy",
          this.userLifestyleDairy,
          this.userLifestyleDairyFreq,
          2
        )
      );
      if (this.userLifestyleSedentary >= 7) {
        total += parseFloat(
          this.microLivesLostInYear(
            "sedentary",
            this.userLifestyleSedentary,
            undefined,
            2
          )
        );
      }
      if (this.showIdealWeight("guess") >= 9) {
        total += parseFloat(
          this.microLivesLostInYear(
            "weight",
            this.showIdealWeight("guess"),
            undefined,
            2
          )
        );
      }
      if (type == "guess" || type == 0) {
        if (total / 60 / 24 / 365.25 >= 1)
          return `${(total / 60 / 24 / 365.25).toFixed(2)} years`;
        if (total / 60 / 24 >= 1) return `${(total / 60 / 24).toFixed(2)} days`;
        if (total / 60 >= 1) return `${(total / 60).toFixed(2)} hours`;
        if (total >= 1) return `${total.toFixed(2)} minutes`;
      }
      if (type == "ml") return `${total.toFixed(2) / 30} microlives`;
      if (type == "min") return `${total.toFixed(2)} minutes`;
      if (type == "hour") return `${(total / 60).toFixed(2)} hours`;
      if (type == "days") return `${(total / 60 / 24).toFixed(2)} hours`;
      if (type == "years")
        return `${(total / 60 / 24 / 365.25).toFixed(2)} hours`;
    },
    microLivesLostInYear(
      kind = "smoking",
      amount = 1,
      freq = 52.177457,
      type = 0
    ) {
      // https://sci-hub.se/10.1136/bmj.e8223
      // how many hours do you sit/lie down at: work, home, elsewhere; if you smoke how many each day?
      // let mlife = 0;
      // all 1 MicroLife/unit or hour
      let mlDividedBy = 2; //
      if (
        kind == "smoking" ||
        kind == "alcohol" ||
        kind == "sitting" ||
        kind == "meat"
      ) {
        mlDividedBy = 2; // 2 units/hours is worth 1 microlife
      }
      if (kind == "soda") {
        mlDividedBy = 2.5;
      }
      if (kind == "seafood") {
        mlDividedBy = 4;
      }

      if (kind == "dairy") {
        mlDividedBy = 6;
      }
      if (kind == "weight") {
        mlDividedBy = 5;
        freq = 365.25;
      }
      if (type == 1)
        return (
          parseFloat(amount / mlDividedBy) *
          parseFloat(freq * 1) *
          30
        ).toFixed(2); // just microlives
      if (type == 2)
        return Math.ceil(
          parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
        ).toFixed(2); // minutes

      if (
        (parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30) /
          60 /
          24 /
          365.25 >=
        1
      )
        return `${(
          Math.ceil(
            parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
          ) /
          60 /
          24 /
          365.25
        ).toFixed(2)} years`; // years
      if (
        (parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30) /
          60 /
          24 >=
        1
      )
        return `${(
          Math.ceil(
            parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
          ) /
          60 /
          24
        ).toFixed(2)} days`; // days
      if (
        (parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30) / 60 >=
        1
      )
        return `${(
          Math.ceil(
            parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
          ) / 60
        ).toFixed(2)} hours`; // hours
      if (parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30 >= 1)
        return `${Math.ceil(
          parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
        ).toFixed(2)} minutes`; // minutes
    },
    bfpToCategory(type = 0, bfp = 0) {
      const cats = [
        "Essential Fat",
        "Athletic",
        "Fitness",
        "Average",
        "Overweight",
        "Overweight+",
      ];
      const maleVals = [5, 13, 17, 24, 32, 100]; //just upper limits needed
      const femaleVals = [13, 20, 24, 31, 40, 100];

      let foundAtIndex = null;
      let curGender = null;

      if (type === 0) curGender = maleVals;
      if (type === 1) curGender = femaleVals;
      console.log("CURG:", curGender, type);
      for (let index = 0; index < curGender.length; index++) {
        if (bfp <= curGender[index] && foundAtIndex === null) {
          foundAtIndex = index;
          break;
        }
      }
      return cats[foundAtIndex];
      //       Essential fat	10-13%	2-5%
      // Athletes	14-20%	6-13%
      // Fitness	21-24%	14-17%
      // Average	25-31%	18-24%
      // Obese	32+%	25+%
    },
    navyBFP(type = 0) {
      //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6650177/
      //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9008774/
      const cmToInch = 0.393701;
      const inchToCm = 2.54;
      let userNeckInch = this.userNeck * cmToInch; //to inch
      let userWaistInch = this.userWaist * cmToInch; //to inch
      let userHipInch = this.userHip ? this.userHip * cmToInch : 0; //to inch
      let userHeightInch = this.userHeight * cmToInch; //to inch
      let weight = this.userWeight;
      let maleBFP =
        86.01 * Math.log10(userWaistInch - userNeckInch) -
        70.041 * Math.log10(userHeightInch) +
        36.76;
      let femaleBFP =
        163.205 * Math.log10(userWaistInch + userHipInch - userNeckInch) -
        97.684 * Math.log10(userHeightInch) -
        78.387;

      if (type === 0) {
        return maleBFP;
      }
      if (type === 1) {
        if (userHipInch === 0) return 0;
        return femaleBFP;
      }
      if (type === 2) {
        //LBM
        return (weight - weight * (maleBFP * 0.01)).toFixed(2);
      }
      if (type === 3) {
        //LBM
        if (userHipInch === 0) return 0;
        return (weight - weight * (femaleBFP * 0.01)).toFixed(2);
      }
      if (type === 4) {
        //BFM
        return (weight - (weight - weight * (maleBFP * 0.01))).toFixed(2);
      }
      if (type === 5) {
        //BFM
        if (userHipInch === 0) return 0;
        return (weight - (weight - weight * (femaleBFP * 0.01))).toFixed(2);
      }
    },
    v02Max(type = 0) {
      //
      let bmi = this.getBMI();
      let age = this.getMetabolicAge();
      let weight = this.userWeight;
      let rhr = this.userRHR;
      // console.log("userRHR:", rhr);
      let pai =
        this.userExerciseEffort +
        this.userExerciseFrequency +
        this.userExerciseLength;
      let wc = this.userW;
      //https://codeberg.org/Freeyourgadget/Gadgetbridge/issues/1905
      let maleBMI =
        92.05 - 0.327 * age - 0.933 * bmi - 0.167 * rhr + 0.257 * pai;
      let femaleBMI =
        70.77 - 0.244 * age - 0.749 * bmi - 0.107 * rhr + 0.213 * pai;

      let maleWaist =
        100.27 - 0.296 * age - 0.369 * wc - 0.155 * rhr + 0.266 * pai;
      let femaleWaist =
        74.74 - 0.247 * age - 0.259 * wc - 0.114 * rhr + 0.198 * pai;
      // console.log(
      //   "maxHR:",
      //   this.showMaxHeartRate(),
      //   parseInt(this.showMaxHeartRate()) / parseInt(rhr),
      //   parseInt(rhr)
      // );
      //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7966187/
      let maleVo2Max = -0.0049 * (age * age) + 0.0884 * age + 48.263;
      let femaleVo2Max = -0.0021 * (age * age) - 0.1407 * age + 43.066;
      let vo2 = 15 * (parseInt(this.showMaxHeartRate()) / parseInt(rhr));
      // console.log(
      //   "maxHR:",
      //   this.showMaxHeartRate(),
      //   parseInt(this.showMaxHeartRate()) / parseInt(rhr),
      //   parseInt(rhr),
      //   vo2
      // );
      if (type == 1) return vo2;
      if (type == 2) return `${((maleVo2Max + vo2) / 2).toFixed(2)} ml`;
      if (type == 3) return `${((femaleVo2Max + vo2) / 2).toFixed(2)} ml`;

      // if (type >= 2 && type <= 3) return `${vo2.toFixed(2)} ml`;
      if (type == 4) return (maleVo2Max + vo2) / 2;
      if (type == 5) return (femaleVo2Max + vo2) / 2;
      if (type == 6) return `${((maleVo2Max + vo2) / 2).toFixed(2)} ml`;
      if (type == 7) return `${((femaleVo2Max + vo2) / 2).toFixed(2)} ml`;

      if (type == 8) return maleBMI;
      if (type == 9) return femaleBMI;
      if (type == 10) return `${maleBMI.toFixed(2)} ml`;
      if (type == 11) return `${femaleBMI.toFixed(2)} ml`;
      if (type == 12) return `${maleWaist.toFixed(2)} ml`;
      if (type == 13) return `${femaleWaist.toFixed(2)} ml`;

      //https://www.academia.edu/27916980/VO2_max_makes_bridge_between_aerobic_and_anaerobic_exercise
    },
    vo2MaxRate(type = 0) {
      //https://www.academia.edu/27916980/VO2_max_makes_bridge_between_aerobic_and_anaerobic_exercise
      let age = this.getMetabolicAge();
      if (type == 0) {
        let o2Max = this.v02Max(4);
        if (o2Max > 60 && age <= 25) return "excellent";
        if (o2Max > 56 && age <= 35) return "excellent";
        if (o2Max > 51 && age <= 45) return "excellent";
        if (o2Max > 45 && age <= 55) return "excellent";
        if (o2Max > 41 && age < 65) return "excellent";
        if (o2Max > 41 && age >= 65) return "excellent";

        if (o2Max >= 52 && age <= 25) return "good";
        if (o2Max >= 49 && age <= 35) return "good";
        if (o2Max >= 43 && age <= 45) return "good";
        if (o2Max >= 39 && age <= 55) return "good";
        if (o2Max >= 36 && age < 65) return "good";
        if (o2Max >= 33 && age >= 65) return "good";

        if (o2Max >= 47 && age <= 25) return "above average";
        if (o2Max >= 43 && age <= 35) return "above average";
        if (o2Max >= 39 && age <= 45) return "above average";
        if (o2Max >= 36 && age <= 55) return "above average";
        if (o2Max >= 32 && age < 65) return "above average";
        if (o2Max >= 29 && age >= 65) return "above average";

        if (o2Max >= 42 && age <= 25) return "average";
        if (o2Max >= 40 && age <= 35) return "average";
        if (o2Max >= 35 && age <= 45) return "average";
        if (o2Max >= 32 && age <= 55) return "average";
        if (o2Max >= 30 && age < 65) return "average";
        if (o2Max >= 26 && age >= 65) return "average";

        if (o2Max >= 37 && age <= 25) return "below average";
        if (o2Max >= 35 && age <= 35) return "below average";
        if (o2Max >= 31 && age <= 45) return "below average";
        if (o2Max >= 29 && age <= 55) return "below average";
        if (o2Max >= 26 && age < 65) return "below average";
        if (o2Max >= 22 && age >= 65) return "below average";

        if (o2Max >= 30 && age <= 25) return "poor";
        if (o2Max >= 30 && age <= 35) return "poor";
        if (o2Max >= 26 && age <= 45) return "poor";
        if (o2Max >= 25 && age <= 55) return "poor";
        if (o2Max >= 22 && age < 65) return "poor";
        if (o2Max >= 20 && age >= 65) return "poor";

        if (o2Max < 30 && age <= 25) return "very poor";
        if (o2Max < 30 && age <= 35) return "very poor";
        if (o2Max < 26 && age <= 45) return "very poor";
        if (o2Max < 25 && age <= 55) return "very poor";
        if (o2Max < 22 && age < 65) return "very poor";
        if (o2Max < 20 && age >= 65) return "very poor";
      }

      if (type == 1) {
        let o2Max = this.v02Max(5); //female
        if (o2Max > 56 && age <= 25) return "excellent";
        if (o2Max > 52 && age <= 35) return "excellent";
        if (o2Max > 45 && age <= 45) return "excellent";
        if (o2Max > 40 && age <= 55) return "excellent";
        if (o2Max > 37 && age < 65) return "excellent";
        if (o2Max > 32 && age >= 65) return "excellent";

        if (o2Max >= 47 && age <= 25) return "good";
        if (o2Max >= 45 && age <= 35) return "good";
        if (o2Max >= 38 && age <= 45) return "good";
        if (o2Max >= 34 && age <= 55) return "good";
        if (o2Max >= 32 && age < 65) return "good";
        if (o2Max >= 28 && age >= 65) return "good";

        if (o2Max >= 42 && age <= 25) return "above average";
        if (o2Max >= 39 && age <= 35) return "above average";
        if (o2Max >= 34 && age <= 45) return "above average";
        if (o2Max >= 31 && age <= 55) return "above average";
        if (o2Max >= 28 && age < 65) return "above average";
        if (o2Max >= 25 && age >= 65) return "above average";

        if (o2Max >= 38 && age <= 25) return "average";
        if (o2Max >= 35 && age <= 35) return "average";
        if (o2Max >= 31 && age <= 45) return "average";
        if (o2Max >= 28 && age <= 55) return "average";
        if (o2Max >= 25 && age < 65) return "average";
        if (o2Max >= 22 && age >= 65) return "average";

        if (o2Max >= 33 && age <= 25) return "below average";
        if (o2Max >= 31 && age <= 35) return "below average";
        if (o2Max >= 27 && age <= 45) return "below average";
        if (o2Max >= 25 && age <= 55) return "below average";
        if (o2Max >= 22 && age < 65) return "below average";
        if (o2Max >= 19 && age >= 65) return "below average";

        if (o2Max >= 28 && age <= 25) return "poor";
        if (o2Max >= 26 && age <= 35) return "poor";
        if (o2Max >= 22 && age <= 45) return "poor";
        if (o2Max >= 20 && age <= 55) return "poor";
        if (o2Max >= 18 && age < 65) return "poor";
        if (o2Max >= 17 && age >= 65) return "poor";

        if (o2Max < 28 && age <= 25) return "very poor";
        if (o2Max < 26 && age <= 35) return "very poor";
        if (o2Max < 22 && age <= 45) return "very poor";
        if (o2Max < 20 && age <= 55) return "very poor";
        if (o2Max < 18 && age < 65) return "very poor";
        if (o2Max < 17 && age >= 65) return "very poor";
      }
    },
    bmpToVibrate(bpm, type = 0) {
      let vibPerSecond = 60 / bpm;
      let vibOn = vibPerSecond * 200;
      let vibOff = vibPerSecond * 800;
      let vibData = [];

      if (type === 1) {
        vibData = bpm;
        window.navigator.vibrate(vibData);
      }

      for (let i = 0; i < 22; i += 2) {
        vibData[i] = vibOn;
        vibData[i + 1] = vibOff;
      }

      // console.log("Vibration Data:", vibData);
      window.navigator.vibrate(vibData);
    },
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
      window.localStorage.setItem("userHeight", this.userHeight); //save it
      window.localStorage.setItem("userWeight", this.userWeight); //save it
      window.localStorage.setItem("userAge", this.userAge); //save it
      window.localStorage.setItem("userSkill", this.userSkill); //save it
      window.localStorage.setItem("userHeightImp", this.userHeightImp); // save imperial (feet) measure
      window.localStorage.setItem("userWeightImp", this.userWeightImp); // save imperial (pounds) measure
      window.localStorage.setItem("userKG", this.userKG);
      window.localStorage.setItem("userCM", this.userCM);
      window.localStorage.setItem("userNeck", this.userNeck);
      window.localStorage.setItem("userWaist", this.userWaist);
      window.localStorage.setItem("userHip", this.userHip);
      window.localStorage.setItem("userRHR", this.userRHR);
      window.localStorage.setItem(
        "userExerciseFrequency",
        this.userExerciseFrequency
      );
      window.localStorage.setItem(
        "userExerciseEffort",
        this.userExerciseEffort
      );
      window.localStorage.setItem(
        "userExerciseLength",
        this.userExerciseLength
      );
      window.localStorage.setItem("userLevel", this.userLevel);
      window.localStorage.setItem("userGender", this.userGender);
      //points
      window.localStorage.setItem("user.points.xp", this.userBasePoints.xp);
      window.localStorage.setItem("user.points.hp", this.userBasePoints.hp);
      window.localStorage.setItem("user.points.cp", this.userBasePoints.cp);
      window.localStorage.setItem(
        "userConcerns",
        JSON.stringify(this.userConcerns)
      );

      window.localStorage.setItem(
        "user.lifestyle.alcohol.count",
        this.userLifestyleAlcohol
      );
      window.localStorage.setItem(
        "user.lifestyle.alcohol.freq",
        this.userLifestyleAlcoholFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.soda.count",
        this.userLifestyleSoda
      );
      window.localStorage.setItem(
        "user.lifestyle.soda.freq",
        this.userLifestyleSodaFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.smokes.count",
        this.userLifestyleSmokes
      );
      window.localStorage.setItem(
        "user.lifestyle.smokes.freq",
        this.userLifestyleSmokesFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.meat.count",
        this.userLifestyleMeat
      );
      window.localStorage.setItem(
        "user.lifestyle.meat.freq",
        this.userLifestyleMeatFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.seafood.count",
        this.userLifestyleSeafood
      );
      window.localStorage.setItem(
        "user.lifestyle.seafood.freq",
        this.userLifestyleSeafoodFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.dairy.count",
        this.userLifestyleDairy
      );
      window.localStorage.setItem(
        "user.lifestyle.dairy.freq",
        this.userLifestyleDairyFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.sedentary.count",
        this.userLifestyleSedentary
      );
      window.localStorage.setItem("user.body.goal", this.userBodyGoal);
    },
    flipGender(type = 0) {
      console.log("flipping to:", type);
      if (type == -1) {
        console.log(
          "GettingGender:",
          this.userGender,
          window.localStorage.getItem("userGender"),
          document.querySelectorAll(".maleChart")[3]
        );
        type = this.userGender;
      }
      if (type === 0) {
        let allMale = document.querySelectorAll(".maleChart");
        let allFemale = document.querySelectorAll(".femaleChart");
        for (let index = 0; index < allMale.length; index++) {
          allMale[index].classList.remove("isHidden");
          allFemale[index].classList.add("isHidden");
          allMale[index].colSpan = "2";
          allFemale[index].colSpan = "1";
        }
        console.log("werttttffff:~~");
        // console.log("Flipah:", this.$refs.flipMale.classList);
        // this.$refs.flipMale.classList.add("bg-primary");
        // this.$refs.flipMale.classList.remove("bg-secondary");
        // this.$refs.flipFemale.classList.remove("bg-secondary");
        // this.$refs.flipFemale.classList.remove("bg-primary");
        // document.querySelectorAll(".maleChart").classList.remove("isHidden");
      } else {
        let allMale = document.querySelectorAll(".maleChart");
        let allFemale = document.querySelectorAll(".femaleChart");
        for (let index = 0; index < allMale.length; index++) {
          allMale[index].classList.add("isHidden");
          allFemale[index].classList.remove("isHidden");
          allMale[index].colSpan = "1";
          allFemale[index].colSpan = "2";
        }
        // this.$refs.flipMale.classList.remove("bg-primary");
        // this.$refs.flipMale.classList.add("bg-secondary");
        // this.$refs.flipFemale.classList.add("bg-primary");
        // this.$refs.flipFemale.classList.remove("bg-secondary");
        // document.querySelectorAll(".maleChart").classList.add("isHidden");
        //document.querySelectorAll(".maleChart").classList.toggle("isHidden");
      }
      this.userGender = type;
      this.saveUserData();
      console.log("flipped to:", this.userGender);
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
      //  https://onlinelibrary.wiley.com/doi/pdf/10.1002/clc.4960130809
      // https://community.plu.edu/~chasega/met.html
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
      // let maxHR = 220 - this.getMetabolicAge(); // OG Formula,
      let maxHR = 208 - 0.7 * this.getMetabolicAge(); // Tanaka Formula (2001)
      // hunt https://sci-hub.se/10.1111/j.1600-0838.2012.01445.x
      //https://pubmed.ncbi.nlm.nih.gov/22376273/
      // maxHR = 211 - 0.64 * this.getMetabolicAge(); //Hunt Formula (2012)

      let fox = 220 - this.getMetabolicAge(); // OG Formula,
      let tanaka = 208 - 0.7 * this.getMetabolicAge(); // Tanaka Formula (2001)
      let hunt = 211 - 0.64 * this.getMetabolicAge(); //Hunt Formula (2012)
      maxHR = (fox + tanaka + hunt) / 3;
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
        return (guessMale2 * ((type - 100) * 0.01)).toFixed(0) + `${unitKG}`;
      }
      if (type > 200 && type < 301) {
        return (guessFemale2 * ((type - 200) * 0.01)).toFixed(0) + `${unitKG}`;
      }

      if (type === 0) return guessMale;
      if (type === 1) return guessFemale;
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

      if (type === "guess") {
        if (this.userGender === 0)
          return (this.userWeight - guessMaleAvg).toFixed(2);
        if (this.userGender === 1)
          return (this.userWeight - guessFemaleAvg).toFixed(2);
      }

      if (type === -1) return userWeight * useLB;
    },
    getBMI(type = 0) {
      this.saveUserData();
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
      if (type > 1 && type <= 3) sex -= 2;
      if (type > 3) sex -= 4;
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
      if (type > 1 && type <= 3)
        return (weight - weight * (bfp * 0.01)).toFixed(2);
      //show body fat mass
      if (type > 3)
        return (weight - (weight - weight * (bfp * 0.01))).toFixed(2);
    },
    getMetabolicAge() {
      //https://pubmed.ncbi.nlm.nih.gov/33666897/
      let useLB = this.userKG ? 1 : 0.453592;
      let userHeight = this.convertHeightToCM();
      let bmi = ((this.userWeight * useLB) / (userHeight * userHeight)) * 10000;
      let userAge = parseInt(this.userAge);

      if (bmi < 16) {
        return userAge + (17 - parseInt(bmi));
      }

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

    console.log("this.$store.", this.$store);
    console.log("currentGender:", this.userGender);

    // setTimeout(() => {
    //   console.log("filp!!?");
    //   this.flipGender(this.userGender - 1);
    // }, 3000);
    // console.log("gendered:", this.userGender);
    this.flipGender(-1);
    // if (this.$refs?.flipMale) {
    if (this.$route.name == "prescription") {
      console.log("CRAZZZY");
      if (this.userGender == 0) this.$refs.flipMale.click();
      if (this.userGender == 1) this.$refs.flipFemale.click();
    }

    // } else {
    //   console.log("noBUTTONS");
    // }
  },
  computed: {
    citationSummaryFormat() {
      return this.citationSummary.replaceAll("''", '"');
    },
    citationShortFormat() {
      return this.citationShort.replaceAll("''", '"');
    },
    computeDifficultyFromDoctorMouthFood() {
      //<blockquote>""</blockquote>
      if (this.userLevel <= 1)
        return `
        <div class="q-ma-sm"><div class="bg-primary">•Before every meal enjoy:</div>
          <details class="q-ml-md noblink-details"><summary>500ml (2 cups) of cold water</summary>This adds a 44% increase to your metabolism and curbs your appetite:
            <blockquote>
              "...the water group (β = −0.87, P < 0.001) showed a 44% greater decline in weight over the 12 weeks than the nonwater group... consuming 500 ml water prior to each main meal leads to greater weight loss than a hypocaloric diet alone in middle-aged and older adults. [PMID: 19661958]"
            </blockquote>
            <blockquote>
              " This study demonstrates that consumption of a 568 ml water preload immediately before a meal reduces energy intake in non-obese young males. This might therefore be an effective strategy to suppress energy intake in this population and possibly assist with weight management [PMID: 25893719]. "
              </blockquote>
          </details>
          <details class="q-ml-md noblink-details"><summary>A simple salad or serving of fruit</summary>Before every meal eat a salad with a 1 tbsp apple vinegar, or if short on time, 1 piece of whole fruit (e.g. apple, orange, banana).<br/>Vinegar Boosts AMPK which boosts your metabolism, and a healthy salad, or piece of fruit, reduces your hunger:
            <blockquote>"salads reduced meal energy intake (by 7% for the small portion and 12% for the large)[PMID: 19661687]."</blockquote>
            <blockquote>"Body weight, BMI, visceral fat area, waist circumference, and serum triglyceride levels were significantly lower in both vinegar intake groups than in the placebo group.
              In conclusion, daily intake of vinegar might be useful in the prevention of metabolic syndrome by reducing obesity [PMID: 19661687]."
            </blockquote>
            <blockquote>"vinegar ingestion can promote modest weight loss in obese subjects (Kondo et al. 2009a).
              This is pertinent in light of the fact—as discussed below—that vinegar (acetic acid) has the potential to activate hepatic AMPK [PMID: 24248330]."
            </blockquote>
          </details>
        </div>
        <div class="q-ma-sm"><div class="bg-warning">•Restrictions:</div>
          <details class="q-ml-md noblink-details"><summary>Don't Eat after 7pm</summary>
            Try to avoid snacking at night as it's >50% more likely to become fat tissue:
            <blockquote>
              "Relative to daytime snacking, nighttime snacking significantly decreased fat oxidation (daytime snacking: 52.0 ± 13.6 g/day; nighttime snacking: 45.8 ± 14.0 g/day; P = 0.02) and tended to increase the respiratory quotient (daytime snacking: 0.878 ± 0.022; nighttime snacking: 0.888 ± 0.021; P = 0.09) [PMID: 23174861]."
            </blockquote>
          </details>
        </div>`;

      //don't eat after 7pm
      return "";
    },
    computeDifficultyFromDoctorMouthExercise() {
      if (this.userLevel <= 1) {
        //low mobility, start easy
        if (this.userBodyGoal <= -1) {
          // loose weight
        }
      }

      return "";
    },
  },
};
</script>

<style></style>
