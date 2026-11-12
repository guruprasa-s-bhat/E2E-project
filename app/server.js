const express = require('express');

const app = express();
const port = Number(process.env.PORT || 3000);
const startedAt = Date.now();

app.use(express.static('public'));

app.get('/api/profile', (_req, res) => {
  res.json({
    name: 'Guruprasad Bhat',
    headline: 'DevOps Engineer',
    summary: 'DevOps-focused engineer building practical skills in cloud infrastructure, automation, containers and Kubernetes.',
    experience: '1.5 years of DevOps industrial experience',
    location: 'India',
    skills: [
      'Linux', 'Networking', 'Git', 'GitHub', 'Docker', 'Jenkins',
      'Kubernetes', 'Helm', 'Terraform', 'Google Cloud Platform',
      'Azure fundamentals', 'Bash'
    ],
    focus: ['CI/CD automation', 'Infrastructure as Code', 'Container orchestration', 'Cloud deployment']
  });
});

app.get('/api/projects', (_req, res) => {
  res.json([
    {
      name: 'End-to-End DevOps Portfolio Platform',
      status: 'In progress',
      description: 'A portfolio application deployed through Jenkins CI/CD, Docker, Helm, Kubernetes, Terraform and Google Cloud.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'GCP']
    },
    {
      name: 'Kubernetes Hands-on Labs',
      status: 'Learning project',
      description: 'Hands-on practice with deployments, services, probes, autoscaling, RBAC, network policies and Kustomize.',
      technologies: ['Kubernetes', 'Minikube', 'kubectl', 'Kustomize']
    },
    {
      name: 'Cloud Infrastructure Labs',
      status: 'Learning project',
      description: 'Practical cloud networking, virtual machines, storage, private connectivity and infrastructure automation.',
      technologies: ['GCP', 'Azure', 'Terraform']
    }
  ]);
});

// Readiness: the process can accept traffic.
app.get('/ready', (_req, res) => {
  res.status(200).json({ status: 'ready' });
});

// Liveness: the process is alive.
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'healthy', uptimeSeconds: Math.floor(process.uptime()) });
});

// Prometheus-compatible starter endpoint. Prometheus can be added later.
app.get('/metrics', (_req, res) => {
  const uptime = process.uptime();
  res.type('text/plain').send(
    '# HELP portfolio_uptime_seconds Process uptime in seconds\n' +
    '# TYPE portfolio_uptime_seconds gauge\n' +
    `portfolio_uptime_seconds ${uptime}\n` +
    '# HELP portfolio_process_start_time_seconds Process start time in Unix seconds\n' +
    '# TYPE portfolio_process_start_time_seconds gauge\n' +
    `portfolio_process_start_time_seconds ${Math.floor(startedAt / 1000)}\n`
  );
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio application listening on port ${port}`);
});

module.exports = app;
