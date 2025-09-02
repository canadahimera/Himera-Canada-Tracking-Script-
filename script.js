<script>
function trackPackage() {
  var input = document.getElementById("trackingNumber");
  var code = input.value.trim();

  // Check if code is valid (letters, numbers, hyphens, min length 4)
  if (code === "" || !/^[A-Za-z0-9-]{4,}$/.test(code)) {
    alert("Please enter a valid tracking number.");
    return false;
  }

  // Redirect to tracking page
  var trackUrl = "https://global.cainiao.com/detail.htm?mailNoList=" + code;
  window.open(trackUrl, "_blank");
  return false;
}
</script>
