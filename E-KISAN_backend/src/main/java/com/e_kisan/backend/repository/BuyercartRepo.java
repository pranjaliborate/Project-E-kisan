package com.e_kisan.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.BuyerCart;

@Repository

public interface BuyercartRepo extends JpaRepository<BuyerCart,Integer> {
	@Transactional
@Query("from BuyerCart c where c.buyer_username=:username")
public List<BuyerCart> getByUserName(String username);

	@Transactional
	@Modifying
@Query("delete from BuyerCart c where c.buyer_username=:username")
public void deleteByUserName(String username);
}
