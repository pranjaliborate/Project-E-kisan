package com.e_kisan.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Farmer;

@Repository
public interface FarmerRepo extends JpaRepository<Farmer, Integer> {
   
	@Transactional
	@Query("from Farmer f where f.user_name=:username and f.password=:password")
	public Optional<Farmer> getFarmerLogin(String username,String password);
	
	@Transactional
	@Query("select f.fid from Farmer f where f.user_name=:username")
	public int getFarmerId(String username);

	@Transactional
	@Query("from Farmer f where user_name=:username")
	public Optional<Farmer> getfarmer(String username);

	@Modifying
	@Transactional
	@Query("update Farmer f set f.firstname=:firstname,f.lastname=:lastname,f.email =:email,f.address=:address, f.contact=:contact, f.password=:password where f.user_name=:username")
	public void updateByUserName(String firstname, String lastname, String email, String address, String contact,
			String password, String username);

	@Modifying
	@Transactional
	@Query("update Farmer f set f.firstname=:firstname,f.lastname=:lastname,f.email =:email,f.address=:address, f.contact=:contact, f.password=:password,f.user_name=:username where f.fid=:id")
	public void updateById(String firstname, String lastname, String email, String address, String contact,
			String password, String username, int id);
@Modifying
	@Transactional
	@Query("delete from Farmer f where f.user_name=:username")
	public void deleteByusername(String username);

@Modifying
@Transactional
@Query("update Farmer f set f.password=:newpassword where f.user_name=:username")
public void updatepassword(String username, String newpassword);

@Transactional
@Query("select f.fid from Farmer f where f.firstname=:username")
public int getFarmerIdByname(String username);

//<==============================================>
@Query( nativeQuery = true,value="select fid from farmers where user_name=:user_name")
public int findByName(@Param("user_name") String user_name);

@Query( nativeQuery = true,value="select fid from farmers where firstname=:name")
public int findByFid(@Param("name") String name);

@Modifying
@Transactional
@Query( nativeQuery = true,value="update farmers set firstname=:firstname where user_name=:user_name")
public void updateFirstName(@Param("firstname") String firstname,@Param("user_name") String user_name );

@Modifying
@Transactional
@Query( nativeQuery = true,value="update farmers set lastname =:lastname where user_name=:user_name")
public void updateLastName(@Param("lastname") String lastname,@Param("user_name") String user_name );

@Modifying
@Transactional
@Query( nativeQuery = true,value="update farmers set  email =:email  where user_name=:user_name")
public void updateEmail(@Param("email") String email,@Param("user_name") String user_name );

@Modifying
@Transactional
@Query( nativeQuery = true,value="update farmers set  contact =:contact  where user_name=:user_name")
public void updateContact(@Param("contact") String contact,@Param("user_name") String user_name );

@Modifying
@Transactional
@Query( nativeQuery = true,value="update farmers set password=:password  where user_name=:user_name")
public void updatePassword(@Param("password") String password,@Param("user_name") String user_name );

@Modifying
@Transactional
@Query( nativeQuery = true,value="update farmers set  address =:address  where user_name=:user_name")
public void updateAddress(@Param("address") String address,@Param("user_name") String user_name );



}
