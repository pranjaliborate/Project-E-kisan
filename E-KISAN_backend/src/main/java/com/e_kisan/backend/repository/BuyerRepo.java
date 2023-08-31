package com.e_kisan.backend.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Buyer;

@Repository
public interface BuyerRepo extends JpaRepository<Buyer, Integer>

{   
	@Transactional
	@Query("from Buyer b where b.user_name=:username and b.password=:password")
	public Optional<Buyer> getBuyerLogin(String username,String password);
	
	
	@Transactional
	@Query("select b.bid from Buyer b where b.user_name=:username")
	public int getBuyerId(String username);
	
	@Transactional
	@Query("from Buyer b where user_name=:username")
	public Optional<Buyer> getbuyer(String username);
	
	@Modifying
	@Transactional
	@Query("update Buyer b set b.firstname=:firstname,b.lastname=:lastname,b.email =:email,b.address=:address, b.contact=:contact, b.password=:password where b.user_name=:username")
	public void updateByUserName(String firstname,String lastname,String email,String address,String contact,String password, String username);
	
	
	@Modifying
	@Transactional
	@Query("update Buyer b set b.firstname=:firstname,b.lastname=:lastname,b.email =:email,b.address=:address, b.contact=:contact, b.password=:password,b.user_name=:username where b.bid=:id")
	public void updateById(String firstname,String lastname,String email,String address,String contact,String password, String username,int id );

  @Modifying
  @Transactional
  @Query("update Buyer b set b.password=:newpassword where b.user_name=:username")
	public void updatepassword(String username, String newpassword);
//<=======================================================================>
  @Modifying
	@Transactional
	@Query( nativeQuery = true,value="update buyers set firstname=:firstname where user_name=:user_name")
	public void updateFirstName(@Param("firstname") String firstname,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update buyers set lastname =:lastname where user_name=:user_name")
	public void updateLastName(@Param("lastname") String lastname,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update buyers set  email =:email  where user_name=:user_name")
	public void updateEmail(@Param("email") String email,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update buyers set  contact =:contact  where user_name=:user_name")
	public void updateContact(@Param("contact") String contact,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update buyers set password=:password  where user_name=:user_name")
	public void updatePassword(@Param("password") String password,@Param("user_name") String user_name );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update buyers set  address =:address  where user_name=:user_name")
	public void updateAddress(@Param("address") String address,@Param("user_name") String user_name );
	
	
}
