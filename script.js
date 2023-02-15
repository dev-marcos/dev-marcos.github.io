

const educationList = document.querySelector('.education ul');
const experienceList = document.querySelector('.experience ul');
const skillsList = document.querySelector('.skills ul');
const updatedDate = document.querySelector('.updated-date');
const viewOnline = document.querySelector('.view-online');

fetch('resume-data.json')
  .then(response => response.json())
  .then(data => {
    // Populate education section
    data.formacao.forEach(instituicao => {
      const educationItem = document.createElement('li');
      educationItem.innerHTML = `<h3>${instituicao.instituicao}</h3>
                                  <p>${instituicao.curso} (${instituicao.periodo})</p>`;
      educationList.appendChild(educationItem);
    });

    // Populate experience section
    data.experiencia.forEach(job => {
      const experienceItem = document.createElement('li');
      experienceItem.innerHTML = `<h3>${job.cargo}</h3>
                                   <p>${job.empresa} (${job.periodo})</p>
                                   <p>${job.descricao}</p>`;
      experienceList.appendChild(experienceItem);
    });

    // Populate skills section
    data.habilidades.forEach(skill => {
      const skillsItem = document.createElement('li');
      skillsItem.innerHTML = `<h3>${skill.habilidade}</h3>
                              <p>${skill.nivel}</p>`;
      skillsList.appendChild(skillsItem);
    });

    // Set the last updated date and view online link
    const date = new Date();
    updatedDate.textContent = date.toDateString();
    viewOnline.href = window.location.href;
  });



// Add event listener to download button
const downloadButton = document.getElementById('download-btn');
const displayViewOnline = document.getElementById('view-online');
downloadButton.addEventListener('click', () => {
  /*const pdf = new jsPDF();
  pdf.html(document.body, {
    callback: function () {
      pdf.save('resume.pdf');
    }
  }); */
  downloadButton.style.visibility  = "hidden";
  displayViewOnline.style.visibility  = "visible";
  window.print();
  downloadButton.style.visibility  = "visible";
  displayViewOnline.style.visibility  = "hidden";
});
