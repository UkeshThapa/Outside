

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW(),
    deleteddAt TIMESTAMP DEFAULT NOW()
);


CREATE TABLE sessions(
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(200) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    status ENUM('complete','running') DEFAULT 'running',
    creator_id INT REFERENCES users(id) ON DELETE CASCADE,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);


CREATE TABLE participants(
    id SERIAL PRIMARY KEY,
    role ENUM('moderator ','member'),
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    session_id VARCHAR(200) REFERENCES sessions(id) ON DELETE CASCADE,
    UNIQUE KEY (user_id, session_id)
);


CREATE TABLE stories(
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(200) REFERENCES sessions(session_id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    description Text,
    status ENUM('active ','inactive') DEFAULT 'inactive',
    storyStatus ENUM('show','hidden') DEFAULT 'hidden',
    average int
);



CREATE TABLE statusCheck (
    storyStatus ENUM('show','hidden') DEFAULT 'hidden',
    session_id VARCHAR(200) REFERENCES sessions(id) ON DELETE CASCADE,
    UNIQUE (session_id)
);

CREATE TABLE storypoints(
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    story_id INT REFERENCES stories(id) ON DELETE CASCADE,
    points INT,
    PRIMARY KEY(user_id,story_id)
);

