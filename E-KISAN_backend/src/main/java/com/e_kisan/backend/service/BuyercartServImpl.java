package com.e_kisan.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.BuyerCart;
import com.e_kisan.backend.repository.BuyercartRepo;


@Service
@Transactional
public class BuyercartServImpl implements BuyercartServ{
@Autowired
BuyercartRepo buyercartrepo;

@Override
public List<BuyerCart> getByServUserName(String username) {
	
	return buyercartrepo.getByUserName(username);
}

@Override
public String deleteCartByUname(String username) {
buyercartrepo.deleteByUserName(username);
return "product deleted";
}

@Override
public String addCartProduct(BuyerCart cart) {
	 buyercartrepo.save(cart);
	 return "product added ";
	
}

@Override
public List<BuyerCart> getAll() {
	return buyercartrepo.findAll();
}

@Override
public void deletebyCartId(int cartid) {
buyercartrepo.deleteById(cartid);
}
	
}
