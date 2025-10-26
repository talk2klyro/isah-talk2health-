async function loadTutor() {
  const response = await fetch("data.json");
  const tutor = await response.json();
  const theme = tutor.theme || "indigo";

  document.getElementById("tutor-profile").innerHTML = `
    <section class="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-8 border-t-4 border-${theme}-500">
      <img src="${tutor.photo}" alt="${tutor.name}" class="w-48 h-48 rounded-full object-cover border-4 border-${theme}-100 mx-auto md:mx-0">
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-${theme}-700">${tutor.name}</h1>
        <p class="text-gray-600">${tutor.title}</p>
        <p class="mt-2 text-sm text-gray-500">${tutor.location}</p>

        <div class="mt-4">
          <h2 class="text-xl font-semibold text-${theme}-600">About</h2>
          <p class="text-gray-700 mt-2">${tutor.bio}</p>
        </div>

        <div class="mt-4">
          <h2 class="text-xl font-semibold text-${theme}-600">Education</h2>
          <p class="text-gray-700 mt-1">${tutor.education.degree} — 
          <span class="font-medium">${tutor.education.institution}</span> (${tutor.education.graduationYear})</p>
        </div>

        <div class="mt-4">
          <h2 class="text-xl font-semibold text-${theme}-600">Skills</h2>
          <div class="flex flex-wrap gap-2 mt-2">
            ${tutor.skills.map(skill => `<span class="px-3 py-1 bg-${theme}-50 text-${theme}-700 text-sm rounded-full">${skill}</span>`).join("")}
          </div>
        </div>

        <div class="mt-6">
          <h2 class="text-xl font-semibold text-${theme}-600">Testimonials</h2>
          <div class="mt-2 space-y-2">
            ${tutor.testimonials.map(t => `
              <div class="bg-gray-100 p-3 rounded-xl">
                <p class="italic text-gray-600">"${t.comment}"</p>
                <p class="text-sm text-right font-semibold text-${theme}-700">– ${t.name}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="mt-6 flex flex-wrap gap-4">
          <a href="${tutor.socials.website}" target="_blank" class="bg-${theme}-600 hover:bg-${theme}-700 text-white px-4 py-2 rounded-lg">Visit Site</a>
          <a href="${tutor.socials.linkedin}" target="_blank" class="bg-${theme}-500 hover:bg-${theme}-600 text-white px-4 py-2 rounded-lg">LinkedIn</a>
          <a href="${tutor.socials.whatsapp}" target="_blank" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">WhatsApp</a>
          <a href="${tutor.socials.email}" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">Email</a>
        </div>
      </div>
    </section>
  `;
}

loadTutor();
