function PercentageColor(rating) {
  var color;
  if (rating >= 70) {
    color = "var(--good-score-clr)";
  } else if (rating >= 50) {
    color = "var(--okay-score-clr)";
  } else {
    color = "var(--bad-score-clr)";
  }
  return color;
}

export default PercentageColor;
