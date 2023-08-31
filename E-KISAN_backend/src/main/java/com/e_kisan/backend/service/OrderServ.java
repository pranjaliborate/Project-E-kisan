package com.e_kisan.backend.service;

import java.util.List;

import com.e_kisan.backend.entity.Order;

public interface OrderServ {
	List< Order> getBuyerOrder(int bid);
List< Order> getFarmerOrder(int fid);

public int changeStatus( int oid);
String addOrder(Order order);
List<Order> getUnapprovedOrders(int bid);
List<Order> getBuyerOrder();
void deleteBuyerOrder(int bid);
}
