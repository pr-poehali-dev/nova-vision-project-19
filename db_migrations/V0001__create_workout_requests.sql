CREATE TABLE workout_requests (
    id SERIAL PRIMARY KEY,
    user_type VARCHAR(20) NOT NULL,
    age VARCHAR(5) NOT NULL,
    level VARCHAR(20) NOT NULL,
    goals TEXT[] NOT NULL,
    workout_result TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);