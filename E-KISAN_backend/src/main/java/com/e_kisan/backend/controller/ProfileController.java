package com.e_kisan.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.e_kisan.backend.entity.Buyer;
import com.e_kisan.backend.entity.Farmer;
import com.e_kisan.backend.repository.BuyerRepo;
import com.e_kisan.backend.repository.FarmerRepo;

@CrossOrigin
@RestController
@RequestMapping("change-profile")
public class ProfileController 
{
	@Autowired
	FarmerRepo farmerRepo ;
	
	@Autowired
	BuyerRepo buyerRepo;
	
	@PostMapping("farmer/{username}")
	public String updateFarmerProfile(@PathVariable String username,@RequestBody Farmer farmer)
	{
		System.out.println(username);
		
		System.out.println(farmer.getAddress());
		if(farmer.getFirstname()!= "")
		{
			farmerRepo.updateFirstName(farmer.getFirstname(),username);
		}
		if(farmer.getLastname()!= "")
		{
			farmerRepo.updateLastName(farmer.getLastname(), username);
		}
		if(farmer.getContact()!="")
		{
			farmerRepo.updateContact(farmer.getContact(), username);
		}
		if(farmer.getEmail()!= "")
		{
			farmerRepo.updateEmail(farmer.getEmail(), username);
		}
		if(farmer.getAddress()!= "")
		{
			farmerRepo.updateAddress(farmer.getAddress(), username);
		}
		
		return "updated";
	}
	
	@PostMapping("buyer/{username}")
	public String updateBuyerProfile(@PathVariable String username,@RequestBody Buyer buyer)
	{
		System.out.println(username);
		
		System.out.println(buyer.getAddress());
		if(buyer.getFirstname()!= "")
		{
			buyerRepo.updateFirstName(buyer.getFirstname(),username);
		}
		if(buyer.getLastname()!= "")
		{
			buyerRepo.updateLastName(buyer.getLastname(), username);
		}
		if(buyer.getContact()!="")
		{
			buyerRepo.updateContact(buyer.getContact(), username);
		}
		if(buyer.getEmail()!= "")
		{
			buyerRepo.updateEmail(buyer.getEmail(), username);
		}
		if(buyer.getAddress()!= "")
		{
			buyerRepo.updateAddress(buyer.getAddress(), username);
		}
		
		return "updated";
	}
}
