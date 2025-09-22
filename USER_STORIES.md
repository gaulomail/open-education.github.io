# OLP User Stories (v2.0)

This document provides a backlog of user stories based on the v2.0 architecture, broken down by the recommended implementation phases.

---

### Phase 0: Project Setup & Foundation

*   **As a developer, I want** a detailed `README.md` with setup instructions for the full stack (frontend, backend, database) **so that** I can get my local development environment running quickly.
*   **As a developer, I want** a Docker Compose file **so that** I can spin up the required services (like the PostgreSQL database) with a single command.
*   **As a developer, I want** a basic CI/CD pipeline configured **so that** code is automatically tested and linted on every push.
*   **As a developer, I want** the basic project structure for the Node.js backend created **so that** I have a clean foundation to start building the API.

---

### Phase 1: Foundation & Standard Products

*   **As a new user, I want** to register for an account on the OLP **so that** my user account is created in both the OLP and Moodle.
*   **As a registered user, I want** to log in and log out of the OLP.
*   **As an admin, I want** a sync service that synchronizes users between the OLP and Moodle databases.
*   **As an admin, I want** the sync service to pull all courses designated as "Standard Products" (e.g., Courses, Masterclasses, Programmes) from Moodle into the OLP's `products` table.
*   **As a user, I want** to browse a catalog of all available Standard Products.
*   **As a user, I want** to click "Enroll Now" on a Standard Product to begin the purchase process.
*   **As a user, I want** to be redirected to a payment gateway to complete my purchase for a Standard Product.
*   **As a developer, I want** a webhook endpoint that listens for successful payment notifications from the payment gateway.
*   **As a user who has paid, I want** the system to automatically enroll me in the correct Moodle course.
*   **As a user, I want** to see my enrolled courses on a personal dashboard.

---

### Phase 2: Qualifications

*   **As an admin, I want** the sync service to pull all courses designated as "Qualifications" from Moodle into the OLP's `qualifications` table.
*   **As a user, I want** to browse a catalog specifically for Qualifications, showing more details like NQF Level and credits.
*   **As a user, I want** to click "Enroll Now" on a Qualification and be presented with a detailed form to collect my full name, contact information, and other required details.
*   **As a developer, I want** the backend to save the detailed enrollment information before redirecting the user to the payment gateway.
*   **As a user who has paid for a Qualification, I want** the system to automatically enroll me in the corresponding Moodle program or cohort.
*   **As a user, I want** my dashboard to clearly distinguish between the Standard Products and Qualifications I am enrolled in.

---

### Phase 3: Corporate Training (Lead Generation)

*   **As a developer, I want** a backend system to manage the list of Corporate Training categories.
*   **As a corporate representative, I want** to browse a page dedicated to Corporate Training offerings, grouped by category.
*   **As a corporate representative, I want** to click "Request a Quote" on a training category and fill out a form with my company and training needs.
*   **As a developer, I want** the backend to save the submitted quote request to the `quote_requests` table.
*   **As a sales team member, I want** to receive an email notification with the details of the quote request as soon as it is submitted.
*   **As a corporate representative, I want** to see a "Thank You" page confirming that my quote request has been received.

---

### Phase 4: Admin & Bulk Enrollment

*   **As an admin, I want** to log in to a secure admin dashboard within the OLP.
*   **As an admin, I want** to view a list of all submitted corporate training quote requests.
*   **As an admin, I want** an interface to create multiple new user accounts in the OLP and Moodle at once for a corporate client.
*   **As an admin, I want** to be able to select a group of users and bulk-enroll them into a specific Moodle course or cohort, fulfilling a corporate training package.
*   **As an admin, I want** to be able to view synchronization logs to troubleshoot any issues between the OLP and Moodle.