package com.e_kisan.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Farmer;
import com.e_kisan.backend.entity.Product;
import com.e_kisan.backend.repository.ProductRepo;

@Service
@Transactional
public class ProductServImpl implements ProductServ {
@Autowired
ProductRepo product_repo;;

@Override
	public void UpdateProduct(double quantity, double expectedPrice, String crop, int fid) {
	product_repo.UpdateProduct(quantity, expectedPrice, crop, fid);
	}

	@Override
	public void deleteproduct(int fid, String crop) {
		product_repo.deleteproduct(fid, crop);
	}

	@Override
	public List<Product> findproduct(String crop) {
		
		return product_repo.findProduct(crop);
	}

	@Override
	public double getQuantity(int fid, String crop) {
		
		return product_repo.getQuantity(fid, crop);
	}

	@Override
	public List<Product> getAllproducts() {
		
		return product_repo.findAll();
	}

	@Override
	public String addcrop(Product product) {
		System.out.println(product.toString());
	product_repo.save(product);
	return "added "+product.getCrop();
	}

	@Override
	public void deleteproductById(Farmer farmer) {
		
		 product_repo.deleteproductByFid(farmer);
		 }

	@Override
	public List<Product> findMyProduct(Farmer farmer) {
		return product_repo.getMyproduct(farmer);
	}

	@Override
	public double availableQuantity(int fid, String crop) {
		
		return product_repo.getQuantity(fid, crop);
	}

	@Override
	public void deleteQuantityCompletly(int fid, String crop) {
		product_repo.deleteQuantityCompletly(fid, crop);
	}

	@Override
	public void deductQuantity(int fid, double quantityRemains, String crop) {
	product_repo.deductQuantity(fid, quantityRemains, crop);
	}


}
