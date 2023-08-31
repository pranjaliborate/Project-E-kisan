package com.e_kisan.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.e_kisan.backend.entity.Admin;
import com.e_kisan.backend.entity.Buyer;
import com.e_kisan.backend.entity.Farmer;
import com.e_kisan.backend.entity.Order;
import com.e_kisan.backend.entity.Product;
import com.e_kisan.backend.service.AdminServ;
import com.e_kisan.backend.service.BuyerServ;
import com.e_kisan.backend.service.FarmerServ;
import com.e_kisan.backend.service.OrderServ;
import com.e_kisan.backend.service.ProductServ;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	AdminServ adminserv;

	@Autowired
	BuyerServ buyerserv;
	
	@Autowired
	FarmerServ farmerserv;
	@Autowired
	ProductServ productServ;
	@Autowired
	OrderServ orderserv;
	
//	@PostMapping("/add")
//	public ResponseEntity<?> addAdmin(@RequestBody Admin admin) {
//		try {
//			adminserv.add_Admin(admin);
//			return new ResponseEntity<>("Admin added successfully " + admin.getUser_name(), HttpStatus.CREATED);
//		} catch (Exception e) {
//			return new ResponseEntity<>("Admin is not added  "+admin.getUser_name(), HttpStatus.BAD_REQUEST);
//		}}
	
	@PostMapping("/login")
	public ResponseEntity<?> Adminlogin(@RequestBody Admin admin){
		try {
			String username=admin.getUser_name();
			String password=admin.getPassword();
			Optional<Admin> adminlogin=adminserv.getAdminLogin(username, password);
			if(!adminlogin.isEmpty()) {
				return new ResponseEntity<>(username, HttpStatus.OK);
			}else
			{
				return new ResponseEntity<>("username or password invalid", HttpStatus.UNAUTHORIZED);
			}
			
			
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
	}

	
	
	@GetMapping("/getbuyers")
	public ResponseEntity<?> getall_buyers(){
		try {
			List<Buyer> allBuyers = buyerserv.getAllBuyers();
			if(!allBuyers.isEmpty()) {
				return new ResponseEntity<>(allBuyers,HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(allBuyers,HttpStatus.NOT_FOUND);
				
			}
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	@GetMapping("/getfarmers")
	public ResponseEntity<?> getall_Farmers(){
		try {
			List<Farmer> allfarmers = farmerserv.getAllFarmers();
			if(!allfarmers.isEmpty()) {
				return new ResponseEntity<>(allfarmers,HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(allfarmers,HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	@GetMapping("/products")
	public ResponseEntity<?> getallproducts(){
		try {
			List<Product> products=productServ.getAllproducts();
			if(!products.isEmpty()) {
				return new ResponseEntity<>(products, HttpStatus.OK);
			}else {
				return new ResponseEntity<>(products, HttpStatus.NOT_FOUND);
			}
			
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
	}
	@GetMapping("/orders")
	public ResponseEntity<?> getallOrders(){
		try {
			List<Order> orders=orderserv.getBuyerOrder();
			if(!orders.isEmpty()) {
				return new ResponseEntity<>(orders, HttpStatus.OK);
			}else {
				return new ResponseEntity<>(orders, HttpStatus.NOT_FOUND);
			}
			
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
	}
}
