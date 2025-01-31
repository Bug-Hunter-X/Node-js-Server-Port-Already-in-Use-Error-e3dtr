# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js when attempting to start an HTTP server on a port that is already in use.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution.

## Problem

The `bug.js` file creates a simple HTTP server that listens on port 8080. If another process is already using this port (e.g., another Node.js server or a different application), the server will fail to start and throw an error.

## Solution

The `bugSolution.js` file demonstrates a robust approach that handles the port-in-use error gracefully. It attempts to start the server on the specified port, and if that fails, it tries a few alternative ports before giving up.

This solution improves the reliability and resilience of the server by preventing crashes due to port conflicts.