# NASA Dashboard Take-Home Challenge

Welcome to the NASA Dashboard Take-Home Challenge! This project is designed to assess your skills in building a full-stack application. The goal is to create a dashboard that displays a list of the closest objects to Earth for any given date. You'll use the NASA API to fetch data and present it in a user-friendly way.

---

## The Challenge

You have **2.5 hours** to complete this challenge. The time limit is strict, so focus on delivering a functional and well-documented solution. If you run out of time, leave comments explaining your intentions and what you would have done with more time.

---

## What We're Looking For

- **Code quality**: Clean, readable, and maintainable code.
- **Documentation**: Clear explanations of your choices and any trade-offs.
- **Functionality**: A working application that meets the requirements.
- **Creativity**: Thoughtful approaches to solving the problem.

---

## Tasks

### Task 1: Build the Foundation

Set up a Github repository that serves as the foundation for the application. Here's what we need:

#### Frontend

- **Framework**: React (with TypeScript).
- **Goal**: Display a list of NASA objects.

#### Backend

- **Framework**: Fastify (or your preferred server framework).
- **Goal**: Consume NASA APIs and process data for the frontend.

#### Bonus Points

- Add linting and formatting tools (e.g., ESLint, Prettier).
- Include any developer experience improvements (e.g., scripts, environment setup).
- Document your setup choices and reasoning.

If you run out of time, document what you would have done.

---

### Task 2: Build the Feature

Implement a date picker and display a list or table of NASA objects closest to Earth for the selected date. Use the NASA API "Asteroids NeoWs: Near Earth Object Web Service": `https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY`.

Note: The NASA endpoint requires an API key. You can use the value `DEMO_KEY` as a very rate-limited key for testing. However, the sign-up process is automated and will immediately email you a private key to use locally. If you encounter issues calling this endpoint, please let us know.

#### Requirements

For each NASA object, display:

- **Name**
- **Size**
- **Closeness to Earth**
- **Relative Velocity**

#### Sorting

Allow the list to be sorted by:

- **Size**
- **Closeness to Earth**
- **Relative Velocity**

#### Backend

- Provide a valid **OpenAPI 3 schema** for your API.

#### Bonus Points

- Add caching to improve performance.
- Document your approach and any trade-offs.

---

## Resources

- [NASA API Documentation](https://api.nasa.gov/)

---

## Submission

When you're done, please share the link to the public repository. Make sure your repository includes:

- A clear README explaining how to run your project.
- Any additional notes or comments about your implementation.

Good luck, and have fun!
