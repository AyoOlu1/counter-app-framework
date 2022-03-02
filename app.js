// select the counter value
let counter = $(".counter");
let count = 0;
$(".add-btn").on("click", function () {
  if (count < 50) {
    count++;
  }
  counter.text(count);
});

$(".subtract-btn").on("click", function () {
  if (count <= 50 && count > 0) {
    count--;
  }
  counter.text(count);
});
