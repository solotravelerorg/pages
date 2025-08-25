// Open External Links in New Window
document.querySelectorAll('a').forEach(function(link) {
  const linkHostname = new URL(link.href).hostname;
  const currentHostname = window.location.hostname;

  if (linkHostname !== currentHostname && !linkHostname.endsWith('.himpfen.com') && linkHostname !== 'himpfen.com' && !link.href.startsWith('/') && !link.href.startsWith('#')) {
    link.setAttribute('target', '_blank');
  }
});

// Search

$(document).ready(function () {
  $("#search").keyup(function () {
    var searchterm = $("#search").val().toLowerCase();

    $(".name-content").each(function () {
      var brand = $(this).attr("data-name").toLowerCase();
      var regex = new RegExp(searchterm.replace(/\s+/g, "|"));

      if (brand.match(regex)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
