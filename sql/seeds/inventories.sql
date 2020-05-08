create table inventory (
    id int not null auto_increment,
    price decimal(10,10) null,
    description varchar(128) not null,
    hospital_id varchar(128) not null,
    primary key (id),
    foreign key (hospital_id) references hospitals(data_id)
);