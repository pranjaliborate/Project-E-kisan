package com.e_kisan.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.e_kisan.DTO.ResponseDTO;
import com.e_kisan.backend.entity.BuyerCart;
import com.e_kisan.backend.entity.Order;
import com.e_kisan.backend.service.BuyercartServ;
import com.e_kisan.backend.service.OrderServ;

@RestController
@RequestMapping("/buyercart")
@CrossOrigin
public class BuyercartController {
	@Autowired
	BuyercartServ buyercartserv;
	@Autowired
	OrderServ orderserv;

	@GetMapping("/{username}")
	public ResponseDTO<?> getBuyerCart(@PathVariable String username) {
		try {
			List<BuyerCart> buyercart = buyercartserv.getByServUserName(username);
			if (!buyercart.isEmpty()) {
				return new ResponseDTO<>(HttpStatus.OK, "Product is present", buyercart);
			} else {
				return new ResponseDTO<>(HttpStatus.OK, "Product is not present", buyercart);
			}
		} catch (Exception e) {
			return new ResponseDTO<>(HttpStatus.BAD_REQUEST, "error in request", e.getMessage());
		}

	}

	@PostMapping("/addcart")
	public ResponseEntity<?> addCartProduct(@RequestBody BuyerCart cart) {
		try {
			buyercartserv.addCartProduct(cart);
			return new ResponseEntity<>("Product is added:" + cart.getBuyer_username(), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}

	}

	@DeleteMapping("/{username}")
	public ResponseEntity<?> deleteCartProduct(@PathVariable String username) {
		try {
            
			List<BuyerCart> buyercart = buyercartserv.getByServUserName(username);
			if (!buyercart.isEmpty()) {
				buyercartserv.deleteCartByUname(username);
				return new ResponseEntity<>("Product is deleted with username:" + username, HttpStatus.ACCEPTED);
			} else {
				return new ResponseEntity<>("Product is not present", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	@PostMapping("/remove")
	public ResponseEntity<?> deleteCartProduct(@RequestBody BuyerCart cart) {
		try {
            int cartid=cart.getCartid();
            System.out.println(cartid);
            buyercartserv.deletebyCartId(cartid);
			return new ResponseEntity<>("Product is deleted", HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	}
