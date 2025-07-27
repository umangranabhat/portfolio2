
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    const isMatch = category === 'all' || project.dataset.category === category;
    project.style.display = isMatch ? 'block' : 'none';
  });
}
