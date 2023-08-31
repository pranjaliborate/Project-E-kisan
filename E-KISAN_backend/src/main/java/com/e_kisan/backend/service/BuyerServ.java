package com.e_kisan.backend.service;

import java.util.List;
import java.util.Optional;

import com.e_kisan.backend.entity.Buyer;

public interface BuyerServ {
	 int getBuyerId(String username);
	
Optional<Buyer> getbyId(int id);
Optional<Buyer> getByUsername(String username);
void deleteBuyer(int id);
void addBuyer(Buyer buyer);
void updateById(String firstname,String lastname,String email,String address,String contact,String password, String username ,int id);
void updateByUserName(String firstname,String lastname,String email,String address,String contact,String password, String username);
List<Buyer> getAllBuyers();
Optional<Buyer> getBuyerLogin(String username,String password);
 void updatepassword(String username, String newpassword);
}
