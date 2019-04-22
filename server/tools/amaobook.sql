create table books(
    id int not null auto_increment primary key,
    isbn varchar(20) not null,
    openid varchar(50) not null,
    title varchar(100) not null,
    image varchar(100),
    alt varchar(100),
    publisher varchar(100),
    summary varchar(1000),
    price varchar(20),
    rate float,
    tags varchar(100),
    author varchar(20)
);