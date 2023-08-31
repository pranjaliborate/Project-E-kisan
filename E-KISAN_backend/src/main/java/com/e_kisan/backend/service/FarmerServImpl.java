package com.e_kisan.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Buyer;
import com.e_kisan.backend.entity.Farmer;
import com.e_kisan.backend.repository.FarmerRepo;


@Service
@Transactional
public class FarmerServImpl implements FarmerServ {
@Autowired
FarmerRepo farmer_repo;
	@Override
	public Optional<Farmer> getbyId(int id) {
	
		return farmer_repo.findById(id);
	}

	@Override
	public Optional<Farmer> getByUsername(String username) {
	
		return farmer_repo.getfarmer(username);
	}

	@Override
	public void deleteFarmer(int id) {
		farmer_repo.deleteById(id);
}

	@Override
	public void addFarmer(Farmer farmer) {
		try{
			farmer_repo.save(farmer);
		}catch (Exception e) {
		e.printStackTrace();
		}
	}

	@Override
	public void updateById(String firstname, String lastname, String email, String address, String contact,
			String password, String username, int id) {
      farmer_repo.updateById(firstname, lastname, email, address, contact, password, username, id);
	}

	@Override
	public void updateByUserName(String firstname, String lastname, String email, String address, String contact,
			String password, String username) {
	
	farmer_repo.updateByUserName(firstname, lastname, email, address, contact, password, username);
	}

	@Override
	public List<Farmer> getAllFarmers() {
		// TODO Auto-generated method stub
		return farmer_repo.findAll();
	}

	@Override
	public int getFarmerId(String username) {
		
		return farmer_repo.getFarmerId(username);
	}

	@Override
	public void deleteByusername(String username) {
		farmer_repo.deleteByusername(username);
	}

	@Override
	public Optional<Farmer> getFarmerLogin(String username, String password) {
		
		return farmer_repo.getFarmerLogin(username, password);
	}

	@Override
	public void updatepassword(String username, String newpassword) {
		farmer_repo.updatepassword(username, newpassword);
	}

	@Override
	public int getFarmerIdFromName(String username) {
		// TODO Auto-generated method stub
		return farmer_repo.getFarmerIdByname(username);
	}

}
