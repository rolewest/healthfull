function saveUserData() {
  window.localStorage.set("userHeight", this.userHeight); //save it
  window.localStorage.set("userWeight", this.userWeight); //save it
  window.localStorage.set("userAge", this.userAge); //save it
  window.localStorage.set("userSkill", this.userSkill); //save it
  window.localStorage.set("userHeightImp", this.userHeightImp); // save imperial (feet) measure
  window.localStorage.set("userWeightImp", this.userWeightImp); // save imperial (pounds) measure
  window.localStorage.set("userKG", this.userKG);
  window.localStorage.set("userCM", this.userCM);
  window.localStorage.set("userNeck", this.userNeck);
  window.localStorage.set("userWaist", this.userWaist);
  window.localStorage.set("userHip", this.userHip);
  //points
  window.localStorage.set("user.points.xp", this.userBasePoints.xp);
  window.localStorage.set("user.points.hp", this.userBasePoints.hp);
  window.localStorage.set("user.points.cp", this.userBasePoints.cp);
}
export { saveUserData }