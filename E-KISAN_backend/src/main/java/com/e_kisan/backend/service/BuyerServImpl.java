package com.e_kisan.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Buyer;
import com.e_kisan.backend.repository.BuyerRepo;

@Service
@Transactional
public class BuyerServImpl implements BuyerServ{
	@Autowired
	BuyerRepo buyer_repo;
	
	@Override
	public Optional<Buyer> getbyId(int id) {
		return buyer_repo.findById(id);	
	}

	@Override
	public void deleteBuyer(int id) {
     buyer_repo.deleteById(id);	
	}

	@Override
	public void addBuyer(Buyer buyer) {
	
	try {
			buyer_repo.save(buyer);
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	}

	
		
	

	@Override
	public void updateById(String firstname, String lastname, String email, String address, String contact,
			String password, String username, int id) {
		buyer_repo.updateById(firstname, lastname, email, address, contact, password, username, id);
		
	}

	@Override
	public void updateByUserName(String firstname, String lastname, String email, String address, String contact,
			String password, String username) {
		buyer_repo.updateByUserName(firstname, lastname, email, address, contact, password, username);
		
	}

	@Override
	public Optional<Buyer> getByUsername(String username) {
		
		return buyer_repo.getbuyer(username);
	}

	@Override
	public List<Buyer> getAllBuyers() {
		// TODO Auto-generated method stub
		return buyer_repo.findAll();
	}

	@Override
	public int getBuyerId(String username) {
		
		return buyer_repo.getBuyerId(username);
	}

	@Override
	public Optional<Buyer> getBuyerLogin(String username, String password) {
		
		return buyer_repo.getBuyerLogin(username, password);
	}
@Override
	public void updatepassword(String username, String newpassword) {
	buyer_repo.updatepassword(username,newpassword);
		
	}

	
	

}
