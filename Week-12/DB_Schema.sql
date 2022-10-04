create database pesto;

use pesto;

create table CITIES (
    city char(20) primary key,
    state char(20) not null);

create table warehouses(
    wid int primary key,
    wname char(30) not null,
    location char(20) not null,
    Extra_context json,
    city char(20) not null);

create table stores(
    sid int primary key,
    store_name char(20),
    location_city char(20) not null,
    wid int not null);

create table customer(
    cno int primary key,
    cname char(50) not null,
    addr varchar(50),
    cu_city char(20) not null);

create table orders (
    ono int primary key,
    odate date not null,
    cno int not null);

create table items (
    itemno int not null,
    description text,
    weight decimal(5,2),
    cost decimal(5,2) not null,
    sid int not null);

create table order_details(
    ono int not null,
    itemno int not null,
    constraint UC_order UNIQUE (ono,itemno);
	
