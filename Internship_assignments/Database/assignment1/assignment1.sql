-- Active: 1677131876061@@127.0.0.1@5432@postgres



CREATE TYPE user_role AS ENUM('author', 'admin', 'moderator');

CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(50) NOT NULL,
    address VARCHAR(100),
    role user_role NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NOW(),
    delete_at TIMESTAMP
);


-- posts and meta posts
CREATE TYPE post_status AS ENUM('draft', 'post');

CREATE TABLE posts(
    id SERIAL NOT NULL PRIMARY KEY,
    content TEXT,
    status post_status NOT NULL,
    user_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE postMetaData(
    id SERIAL NOT NULL PRIMARY KEY,
    post_id INT REFERENCES posts(id),
    views INTEGER DEFAULT 0,
    is_feature BOOLEAN DEFAULT false
);


-- Table for comments and reply
CREATE TABLE comments(
    id SERIAL NOT NULL PRIMARY key,
    comment_text TEXT,
    user_id INT REFERENCES users(id),
    post_id INT REFERENCES posts(id),
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE reply(
    id SERIAL NOT NULL PRIMARY key,
    reply_text TEXT,
    user_id INT REFERENCES users(id),
    comment_id INT REFERENCES comments(id),
    created_at TIMESTAMP DEFAULT NOW()
);



-- post tag TABLE many to many relation
    CREATE Table tag(
        id SERIAL NOT NULL PRIMARY key,
        name VARCHAR(200) NOT NULL UNIQUE,
        description Text
    );

CREATE TABLE post_tags (
    post_id INTEGER REFERENCES posts(id),
    tag_id INTEGER REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
);

-- Catergories the posts
CREATE TABLE categories(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(200) UNIQUE,
    description TEXT
);

CREATE Table post_categories(
    post_id INTEGER REFERENCES posts(id),
    category_id INTEGER REFERENCES categories(id) PRIMARY KEY (post_id, category_id)
);



-- 1. insert the users
INSERT INTO
    users (name, email, password, address, role)
VALUES
    (
        'yukesh',
        'yukeshthapa8@gmail.com',
        'yukesh123',
        'kathmandu',
        'author'
    );

-- 2.
INSERT INTO
    users (name, email, password, address, role)
VALUES
    (
        'ram',
        'ram@gmail.com',
        'ram123',
        'kathmandu',
        'moderator'
    );

-- 3.
INSERT INTO
    users (name, email, password, address, role)
VALUES
    (
        'admin',
        'admin@gmail.com',
        'admin123',
        'kathmandu',
        'admin'
    );



-- 2. creating new post with draft

INSERT INTO
    posts(content, status, user_id)
VALUES
    ('hello its new post', 'draft', 1);


-- 3. publich new post 

INSERT INTO
    posts(content, status, user_id)
VALUES
    ('hello its second post', 'post', 2);


-- 4 add comment

INSERT INTO
    comments(comment_text, user_id, post_id)
VALUES
('it is the comment on first post', 1, 1);  


-- 4. add reply

INSERT INTO
    reply(reply_text, user_id, comment_id)
VALUES
('comment reply on first post', 1, 1);

-- 5. retriving post by  categories
SELECT posts.content,categories.name,categories.description
FROM posts INNER JOIN categories ON posts.id = categories.post_id;
