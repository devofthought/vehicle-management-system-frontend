# VehiTrack Frontend

Welcome to the frontend repository of VehiTrack, the innovative Vehicle Management System designed to streamline your vehicle management experience. This frontend repository works in conjunction with the VehiTrack backend, providing a user-friendly interface for managing vehicles efficiently.

## Table of Contents

- [VehiTrack Frontend](#vehitrack-frontend)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Technology Stack](#technology-stack)
  - [Getting Started](#getting-started)
  - [Folder Structure](#folder-structure)
  - [Usage](#usage)

## Project Overview

VehiTrack is a comprehensive Vehicle Management System that optimizes resources, saves time, and enhances the overall efficiency of handling a fleet of vehicles. The frontend focuses on providing an intuitive and responsive user interface for interacting with the VehiTrack system.

## Features

- **Efficient Vehicle Management:**

  - Detailed vehicle information: make, model, year, registration, and status.
  - Attachment of insurance, registration, and inspection documents.

- **Comprehensive Driver Management:**

  - Driver profiles with personal, contact, and license details.
  - Tracking performance, certifications, and training.

- **Helper Management:**

  - Maintenance of helper details for coordination.

- **Seamless Trip Planning:**

  - Plan trips with details like departure, arrival, and assigned vehicles.
  - Record trip expenses, including fuel, tolls, and miscellaneous costs.

- **Smart Workshop and Maintenance:**

  - Schedule routine maintenance and log unscheduled events.
  - Document accidental maintenance, including costs.

- **Inventory and Stock Control:**

  - Monitor inventory and record items in/out.
  - Provide stock summaries for control.

- **Accident History Management:**

  - Track accidents with dates, locations, and damage details.
  - Attach relevant documents.

- **Paperwork and Document Management:**

  - Manage important documents such as tax, tokens, permits, registrations, and fitness.
  - Set reminders for renewals.

- **Accurate Expense Tracking:**

  - Categorize and track miscellaneous expenses.
  - Define expense heads for detailed reporting.

- **Financial Management Integration:**

  - Seamlessly integrate with financial systems to track income and expenses.
  - Generate comprehensive financial reports.

- **Reporting Option:**
  - Generate various reports, including vehicle and driver performance, maintenance logs, and financial summaries.
  - Provide customizable reporting options.

## Technology Stack

- **Next.js:** React framework for building user interfaces.
- **Ant Design:** UI library for React components.
- **Tailwind CSS:** Utility-first CSS framework.
- **Redux:** State management for React applications.
- **Framer Motion:** Animation library for React components.
- **EmailJS:** Service for sending emails directly from client-side JavaScript.

## Getting Started

To get started with the VehiTrack frontend, follow these steps:

1. Clone the repository: `git clone [frontend_repository_url]`
2. Install dependencies: `yarn install`
3. Configure environment variables. (Contact with developer team)
4. Start the development server: `yarn dev`


## Folder Structure

The frontend codebase follows a modular and organized folder structure:

- `/src`
  - `/app`: main app router pages.
  - `/components`: Reusable React components.
  - `/assets`: External resource of assets like images.
  - `/redux`: Redux store setup and actions.
  - `/api`: API requests and integration with the backend.

## Usage

To interact with the VehiTrack frontend, follow these steps:

1. **Installation:**

   - Clone the frontend repository: `git clone [frontend_repository_url]`
   - Install dependencies: `yarn install`

2. **Configuration:**


3. **Development Server:**

   - Start the development server: `yarn dev`
   - Open your browser and navigate to `http://localhost:3000` to access the VehiTrack application in development mode.

4. **User Authentication:**

   - Use the predefined user accounts for testing:
     - **Super Admin:**
       - User ID: SA00001
       - Password: 123456
     - **Admin:**
       - User ID: A00001
       - Password: 123456
     - **Driver:**
       - User ID: D00001
       - Password: 123456
     - **Helper:**
       - User ID: H00001
       - Password: 123456

5. **Explore Features:**

   - Navigate through the dashboard to access different features:
     - Manage Vehicles, Drivers, and Helpers.
     - Plan Trips and record expenses.
     - View reports and analytics for insights.

6. **Animation with Framer Motion:**

   - Experience smooth and interactive animations integrated with Framer Motion.

7. **Email Integration with EmailJS:**
   - Explore functionalities that involve email communication directly from the client-side using EmailJS.
