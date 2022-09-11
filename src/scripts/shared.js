function saveUserData() {
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
  //points
  window.localStorage.setItem("user.points.xp", this.userBasePoints.xp);
  window.localStorage.setItem("user.points.hp", this.userBasePoints.hp);
  window.localStorage.setItem("user.points.cp", this.userBasePoints.cp);
}
export { saveUserData }