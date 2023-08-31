package com.e_kisan.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.e_kisan.backend.entity.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {
@Transactional
@Query(nativeQuery = true,value="select * from orders where bid=:bid && status='approved'" )
public List<Order> getBuyerOrders(int bid);

@Transactional
@Query(nativeQuery = true,value="select * from orders where fid=:fid")
public List<Order> getfarmerOrders(int fid);

@Transactional
@Modifying
@Query("update Order o set o.status= 'approved' where o.oid=:oid")
public int changeStatus( int oid);

@Transactional
@Query(nativeQuery = true,value="select * from orders where bid=:bid && status='unapproved'" )
public List<Order> getUnapprovedOrders(int bid);
@Modifying
@Transactional
@Query(nativeQuery = true,value="delete from orders where bid=:bid")
public void  deleteBuyerOrder(int bid);

}
