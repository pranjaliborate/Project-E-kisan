package com.e_kisan.backend.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.e_kisan.backend.entity.Buyer;
import com.e_kisan.backend.entity.Order;
import com.e_kisan.backend.service.BuyerServImpl;
import com.e_kisan.backend.service.BuyercartServ;
import com.e_kisan.backend.service.EmailService;
import com.e_kisan.backend.service.FarmerServ;
import com.e_kisan.backend.service.OrderServ;

@CrossOrigin
@RestController
@RequestMapping("/buyer")
public class BuyerController {
	@Autowired
	EmailService emailserv;
	@Autowired
	OrderServ orderserv;
	@Autowired
	BuyerServImpl buyerserv;
	
	@Autowired
	FarmerServ farmerServ;
	@Autowired
	BuyercartServ buyercartserv;
	
	

	@GetMapping("/{username}")
	public Optional<Buyer> getbuyer(@PathVariable String username) {
		System.out.println("in get controller");
		return buyerserv.getByUsername(username);
	}

	@DeleteMapping("/delete/{username}")
	public ResponseEntity<?> deletebyId(@PathVariable String username) {
		try {
			
			int id=buyerserv.getBuyerId(username);
			Optional<Buyer> buyer = buyerserv.getbyId(id);
			if (buyer.isPresent()) {
				buyercartserv.deleteCartByUname(username);
				orderserv.deleteBuyerOrder(id);
				buyerserv.deleteBuyer(id);
				return new ResponseEntity<>(HttpStatus.OK);

			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	
	}

	@PostMapping("/add")
	public void addBuyer(@Valid @RequestBody Buyer buyer) {
		buyerserv.addBuyer(buyer);
		String email=buyer.getEmail();
		emailserv.sendEmail("ekisanregister@gmail.com", email, "Welcome to E-KISAN", "you are successfully registerd to ekisan with username="+buyer.getUser_name()+" and password="+buyer.getPassword());
		
		System.out.println("Buyer added Successfully");
		
	}

	@PutMapping("/updateById/{id}")
	public String updateAll(@Valid @RequestBody Buyer buyer, @PathVariable int id) {
		try {
			Optional<Buyer> buyer1 = buyerserv.getbyId(id);
			if (buyer1.isPresent()) {
				buyerserv.updateById(buyer.getFirstname(), buyer.getLastname(), buyer.getEmail(), buyer.getAddress(),
						buyer.getContact(), buyer.getPassword(), buyer.getUser_name(), id);
				return "update succesfully";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "Id is not Valid";
	}

	@PutMapping("/updateByUserName/{username}")
	public String updateAll(@Valid @RequestBody Buyer buyer, @PathVariable String username) {
		try {
			Optional<Buyer> oldBuyer = buyerserv.getByUsername(username);
			if (oldBuyer.isPresent()) {
				buyerserv.updateByUserName(buyer.getFirstname(), buyer.getLastname(), buyer.getEmail(),
						buyer.getAddress(), buyer.getContact(), buyer.getPassword(), username);
				return "update succesfully";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "User is not Valid";
	}

	@GetMapping("/orders/{username}")
	public ResponseEntity<?> getAllOrder(@PathVariable String username) {
		try {
			int bid = buyerserv.getBuyerId(username);
			List<Order> list = orderserv.getBuyerOrder(bid);
			if (!list.isEmpty()) {
				return new ResponseEntity<>(list, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(list, HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/u_orders/{username}")
	public ResponseEntity<?> getAllUnapprovedOrders(@PathVariable String username){
		try {
			int bid = buyerserv.getBuyerId(username);
			List<Order> list=orderserv.getUnapprovedOrders(bid);
			if (!list.isEmpty()) {
				return new ResponseEntity<>(list, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(list, HttpStatus.NOT_FOUND);
			}
			
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> Buyerlogin(@RequestBody Buyer buyer){
		try {
			String username=buyer.getUser_name();
			String password=buyer.getPassword();
			Optional<Buyer> buyerlogin=buyerserv.getBuyerLogin(username, password);
			if(!buyerlogin.isEmpty()) {
				return new ResponseEntity<>(username, HttpStatus.OK);
			}else
			{
				return new ResponseEntity<>("username or password invalid", HttpStatus.UNAUTHORIZED);
			}
			
			
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
	}
	@PostMapping("/addorder")
	public ResponseEntity<?> addorder(@RequestBody Order order){
		try {
//			System.out.println(buyerId);
			String buyer_user_name = order.getBuyer().getUser_name();
			int buyerId = buyerserv.getBuyerId(buyer_user_name);
			System.out.println(buyerId);
			order.getBuyer().setBid(buyerId);
			String farmer_username = order.getFarmer().getFirstname();
			int farmerId = farmerServ.getFarmerIdFromName(farmer_username);
			System.out.println(buyerId);
			order.getFarmer().setFid(farmerId);
			System.out.println(order);
			 String addOrder = orderserv.addOrder(order);
			 return new ResponseEntity<>(addOrder, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
		
	}
	@PutMapping("/forgotpassword")
  public ResponseEntity<?> forgotpassword(@RequestBody Buyer buyer){
		try {
			String username=buyer.getUser_name();
			String newpassword=buyer.getPassword();
			
				buyerserv.updatepassword(username,newpassword);
				return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
