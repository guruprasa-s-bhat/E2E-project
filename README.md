# Guru's DevOps Portfolio Platform

A prebuilt portfolio application used as the workload for an end-to-end DevOps project.

## Application endpoints

- `/` — portfolio UI
- `/api/profile` — profile data
- `/api/projects` — project data
- `/health` — liveness endpoint
- `/ready` — readiness endpoint
- `/metrics` — basic Prometheus text exposition endpoint (monitoring integration comes later)

## Project delivery flow (fixed)

GitHub (`develop` / `main`) → Jenkins Multibranch Pipeline → tests → Docker build → Trivy scan → Google Artifact Registry → GKE deployment using Helm.

Terraform provisions GCP infrastructure. Helm manages Kubernetes releases. Monitoring stack integration is intentionally deferred, but the application already exposes operational endpoints.

## Important accuracy note

The portfolio content is a starting draft. Review any personal or experience statements before publishing publicly. Do not add tools or professional claims that you cannot substantiate.
