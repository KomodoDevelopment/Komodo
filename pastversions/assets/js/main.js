function logKey(e) {
  if (e.code == "ShiftRight") {
    if (document.getElementById("body").style.visibility == "hidden") {
      body("visible");
    } else {
      body("hidden");
    };
  };
};