CREATE TABLE users
(
    id text PRIMARY KEY,
    name text NOT NULL,
    following integer NOT NULL,
    fans integer NOT NULL,
    heart integer NOT NULL,
    video integer NOT NULL
);

CREATE TABLE userVideos
(
    id text PRIMARY KEY,
    user_id text NOT NULL,
    webVideoUrl text NOT NULL,
    playCount integer NOT NULL,
    diggCount integer NOT NULL,
    commentCount integer NOT NULL,
    date timestamp NOT NULL,
    shareCount integer NOT NULL
);