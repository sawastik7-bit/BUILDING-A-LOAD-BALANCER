# Load Balancer From Scratch

A lightweight HTTP load balancer built from scratch using Node.js and Express to understand the core principles behind request distribution and high availability.

## Features

- Round Robin request distribution
- Periodic backend health checks
- Automatic removal of unhealthy servers
- Automatic recovery when servers come back online
- Request logging
- Reverse proxy for backend services

## Tech Stack

- Node.js
- Express.js
- Axios

## Learning Objectives

This project explores how modern load balancers work internally by implementing their core functionalities without relying on external load balancing libraries. It demonstrates concepts like request routing, failover handling, backend health monitoring, and service recovery.
