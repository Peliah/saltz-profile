(function () {
  const timeElement = document.getElementById("user-time");
  const avatarImage = document.getElementById("avatar-image");
  const avatarTrigger = document.getElementById("avatar-trigger");
  const avatarFileInput = document.getElementById("avatar-file-input");
  const avatarUrlInput = document.getElementById("avatar-url-input");
  const avatarUrlSubmit = document.getElementById("avatar-url-submit");

  if (!timeElement || !avatarImage || !avatarTrigger || !avatarFileInput || !avatarUrlInput || !avatarUrlSubmit) {
    return;
  }

  function updateTime() {
    timeElement.textContent = String(Date.now());
  }

  updateTime();
  setInterval(updateTime, 1000);

  avatarTrigger.addEventListener("click", function () {
    avatarFileInput.click();
  });

  avatarFileInput.addEventListener("change", function (event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    avatarImage.src = objectUrl;
    avatarUrlInput.value = objectUrl;
  });

  function applyAvatarUrl() {
    const value = (avatarUrlInput.value || "").trim();
    if (!value) return;
    avatarImage.src = value;
  }

  avatarUrlInput.addEventListener("change", applyAvatarUrl);
  avatarUrlInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      applyAvatarUrl();
    }
  });
  avatarUrlSubmit.addEventListener("click", applyAvatarUrl);
})();
