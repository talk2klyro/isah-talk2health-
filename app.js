fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("role").textContent = data.role;
    document.getElementById("bio").textContent = data.bio;

    // Photo
    const photoContainer = document.getElementById("photo-container");
    photoContainer.style.backgroundImage = `url('${data.photo}')`;
    photoContainer.style.backgroundSize = "cover";
    photoContainer.style.backgroundPosition = "center";

    // Button
    const button = document.getElementById("button-link");
    button.href = data.button_url;
    button.style.background = data.theme.gradient;

    // Apply theme
    document.body.style.background = data.theme.secondary;
    document.getElementById("name").style.color = data.theme.primary;
    document.getElementById("role").style.color = data.theme.accent;
  })
  .catch((error) => console.error("Error loading data.json:", error));
