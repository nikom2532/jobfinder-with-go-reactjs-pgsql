-- USERS
INSERT INTO users (id, name, email, password, created_at, updated_at) VALUES
(1, 'Alice Jobseeker', 'alice@example.com', 'password123', NOW(), NOW()),
(2, 'Bob Employer', 'bob@company.com', 'password123', NOW(), NOW());

-- JOBS
INSERT INTO jobs (id, title, description, company, location, posted_by, created_at, updated_at) VALUES
(1, 'Frontend Developer', 'React.js, HTML, CSS', 'Innovate Tech', 'Bangkok', 2, NOW(), NOW()),
(2, 'Backend Developer', 'Golang, PostgreSQL', 'CodeBase Co.', 'Chiang Mai', 2, NOW(), NOW()),
(3, 'Full Stack Engineer', 'React + Go preferred', 'TechRise', 'Remote', 2, NOW(), NOW());

-- APPLICATIONS
INSERT INTO applications (id, user_id, job_id, status, created_at, updated_at) VALUES
(1, 1, 1, 'applied', NOW(), NOW()),
(2, 1, 2, 'applied', NOW(), NOW());