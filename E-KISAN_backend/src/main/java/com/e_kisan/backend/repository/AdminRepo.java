package com.e_kisan.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Admin;
import com.e_kisan.backend.entity.Buyer;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {

	@Transactional
	@Query("from Admin b where b.user_name=:username and b.password=:password")
	public Optional<Admin> getAdminLogin(String username, String password);

	@Modifying
	@Transactional
	@Query("update Admin a set a.email=:email,a.firstname=:firstname,a.lastname=:lastname,a.password=:password where a.user_name=:username")
	public void updateByUsername(String email, String firstname, String lastname, String password, String username);

	@Modifying
	@Transactional
	@Query("delete from Admin a where a.user_name=:username")
	public void deleteByUsername(String username);
}
