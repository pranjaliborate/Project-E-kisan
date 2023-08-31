package com.e_kisan.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.e_kisan.backend.entity.Farmer;
import com.e_kisan.backend.entity.Product;
import com.e_kisan.backend.service.FarmerServ;
import com.e_kisan.backend.service.ProductServ;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
	@Autowired
	ProductServ productserv;
	@Autowired
	FarmerServ farmerserv;

	@GetMapping("/getall")
	public ResponseEntity<?> getallproducts() {
		try {
			List<Product> products = productserv.getAllproducts();
			if (!products.isEmpty()) {
				return new ResponseEntity<>(products, HttpStatus.OK);
			} else {

				return new ResponseEntity<>(products, HttpStatus.NO_CONTENT);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/{crop}")
	public ResponseEntity<?> getByCrop(@PathVariable String crop) {
		try {
			List<Product> findproduct = productserv.findproduct(crop);
			if (!findproduct.isEmpty()) {
				return new ResponseEntity<>(findproduct, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(findproduct, HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/add")
	public ResponseEntity<?> addProduct(@RequestBody Product product) {
		try {
			
			int id=farmerserv.getFarmerId(product.getFarmer().getUser_name());
			product.setFarmer(new Farmer(id));
			String addcrop = productserv.addcrop(product);
			System.out.println("in product controller ad method");
			return new ResponseEntity<>(addcrop, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/update/{username}")
	public ResponseEntity<?> updateCrop(@RequestBody Product product, @PathVariable String username) {
		try {
			int fid = farmerserv.getFarmerId(username);

			productserv.UpdateProduct(product.getQuantity(), product.getExpected_Price(), product.getCrop(), fid);
			return new ResponseEntity<>("update successful", HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<>("update unsuccessful", HttpStatus.BAD_REQUEST);
		}
	}
}
