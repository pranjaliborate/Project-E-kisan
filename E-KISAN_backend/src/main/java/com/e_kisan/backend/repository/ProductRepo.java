package com.e_kisan.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Farmer;
import com.e_kisan.backend.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
	@Transactional
   @Modifying
	@Query("update Product p set p.quantity=:quantity,p.expected_Price=:expectedPrice where p.crop=:crop and p.farmer=:fid")
   public void UpdateProduct(double quantity,double expectedPrice,String crop,int fid);
	
	
	@Query("from Product p where p.crop=:crop")
	public List<Product> findProduct(String crop);
	
	@Transactional                          
	@Query(nativeQuery = true,value="select quantity from products where fid=:fid and crop=:crop")
	public double getQuantity( int fid , String crop);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="delete from products where fid=:fid and crop=:crop")
	public void deleteproduct( int fid  ,String crop);
	
	@Modifying
	@Transactional
	@Query("delete from Product p where p.farmer=:farmer ")
	public void deleteproductByFid(Farmer farmer);
	
	@Transactional
	@Query("from Product p where p.farmer=:farmer ")
	public List<Product> getMyproduct(Farmer farmer);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="delete from products where fid=:fid And crop=:crop")
	public void deleteQuantityCompletly( int fid  ,String crop);
 
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update products set quantity =:quantitRemains where fid=:fid And crop=:crop")
	public void deductQuantity(int fid ,double quantitRemains ,String crop);

}
