select itemno from items where weight = (select MIN(weight) from items);

select * from warehouses where city = 'kop';

select c.cno,c.cname,o.ono,od.itemno from customer as c inner join orders as o on c.cno=o.cno 
	inner join order_details as od on o.ono=od.ono where c.cname="ADITYA";

select * from warehouses where wid = (select wid from stores group by wid order by count(wid) desc limit 1);

select *, count(itemno) "no of times ordered" from items where  itemno in 
	(select itemno from order_details group by itemno having count(itemno) = (select MIN(mycount) from 
	(select count(itemno) mycount from order_details group by itemno) as t)) group by itemno;

select c.cno, c.cname, c.cu_city, SUM(i.cost) "Total Cost" from customer as c inner join orders as o on c.cno=o.cno 
	inner join order_details as od on o.ono=od.ono 
	inner join items as i on od.itemno = i.itemno group by c.cno;