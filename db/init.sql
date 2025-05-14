-- Create sample user
INSERT INTO users (name, email, password, created_at, updated_at)
VALUES ('Admin User', 'admin@example.com', 'plaintext-or-hashed', NOW(), NOW());

-- Create sample jobs
INSERT INTO jobs (title, description, company, location, posted_by, created_at, updated_at)
VALUES
('Frontend Developer', 'React experience required', 'Tech Co', 'Bangkok', 1, NOW(), NOW()),
('Backend Developer', 'Golang & PostgreSQL experience', 'Startup Inc.', 'Chiang Mai', 1, NOW(), NOW());

-- Create sample application
INSERT INTO applications (user_id, job_id, status, created_at, updated_at)
VALUES (1, 1, 'applied', NOW(), NOW());