$(".btn a").on("click", e => {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $("section.cards").offset().top + 30
    },
    500,
    "linear"
  );
});
