const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

if (projectId && projectsData[projectId]) {
  const project = projectsData[projectId];
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-image').src = project.image;
  document.getElementById('project-description').textContent = project.description;
} else {
  document.getElementById('project-container').innerHTML = "<p>Project not found.</p>";
}
