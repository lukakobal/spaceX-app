const launchInfo = document.getElementById("launchInfo");
const missionName = document.getElementById("missionName");
const launchDate = document.getElementById("launchDate");
const getLaunchBtn = document.getElementById("getLaunchBtn");

getLaunchBtn.addEventListener("click", async () => {
  getLaunchBtn.disabled = true;
  getLaunchBtn.textContent = "Nalagam...";

  try {
    const response = await fetch(
      "https://api.spacexdata.com/v5/launches/latest"
    );
    if (!response.ok) throw new Error("Napaka pri nalaganju");
    const data = await response.json();

    missionName.textContent = data.name;
    launchDate.textContent = `Datum: ${new Date(
      data.date_utc
    ).toLocaleString()}`;

    launchInfo.classList.remove("hidden");
  } catch (err) {
    alert("Prišlo je do napake: " + err.message);
  } finally {
    getLaunchBtn.disabled = false;
    getLaunchBtn.textContent = "Pridobi podatke";
  }
});
