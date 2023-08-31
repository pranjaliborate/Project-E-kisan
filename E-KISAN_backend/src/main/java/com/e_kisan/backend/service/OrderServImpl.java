package com.e_kisan.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Order;
import com.e_kisan.backend.repository.OrderRepo;

@Service
@Transactional
public class OrderServImpl implements OrderServ {

 @Autowired
 OrderRepo order_repo;
	@Override
	public List<Order> getBuyerOrder(int bid) {
	
		return order_repo.getBuyerOrders(bid);
	}
	
	@Override
	public int changeStatus(int oid) {
		
		return order_repo.changeStatus(oid);
	}
	@Override
	public String addOrder(Order order) {
		// TODO Auto-generated method stub
		order_repo.save(order);
		return "added";
	}
	@Override
	public List<Order> getFarmerOrder(int fid) {
		
		return order_repo.getfarmerOrders(fid);
	}

	@Override
	public List<Order> getUnapprovedOrders(int bid) {
		// TODO Auto-generated method stub
		return order_repo.getUnapprovedOrders(bid);
	}

	@Override
	public List<Order> getBuyerOrder() {
		
		return order_repo.findAll();
	}

	@Override
	public void deleteBuyerOrder(int bid) {
		order_repo.deleteBuyerOrder(bid);
	}
	

}
