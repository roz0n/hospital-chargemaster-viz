create table hospitals (
    _id int not null,
    id int not null auto_increment,
    data_id varchar(128) not null,
    name varchar(128) not null,
    url varchar(256) not null,
    lat double not null,
    lon double not null,
    primary key (id, data_id),
    unique(data_id)
);