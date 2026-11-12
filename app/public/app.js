async function loadPortfolio() {
  const [profileResponse, projectsResponse] = await Promise.all([
    fetch('/api/profile'), fetch('/api/projects')
  ]);
  const profile = await profileResponse.json();
  const projects = await projectsResponse.json();
  document.querySelector('#profile').innerHTML = `
    <article class="panel"><h3>${profile.headline}</h3><p>${profile.summary}</p><p><strong>${profile.experience}</strong></p><p>${profile.location}</p></article>
    <article class="panel"><h3>Core skills</h3><div class="tags">${profile.skills.map(s => `<span class="tag">${s}</span>`).join('')}</div></article>
    <article class="panel"><h3>Current focus</h3><div class="tags">${profile.focus.map(s => `<span class="tag">${s}</span>`).join('')}</div></article>`;
  document.querySelector('#projects-list').innerHTML = projects.map(project => `
    <article class="project"><p class="status">${project.status}</p><h3>${project.name}</h3><p>${project.description}</p><div class="tags">${project.technologies.map(t => `<span class="tag">${t}</span>`).join('')}</div></article>`).join('');
  document.querySelector('#year').textContent = new Date().getFullYear();
}
loadPortfolio().catch(error => console.error('Unable to load portfolio data', error));
