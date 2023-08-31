package com.e_kisan.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Order 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="oid")
	private int oid;
	
	@ManyToOne
	@JoinColumn(name="fid")
	private Farmer farmer;
	
	
	@Column(name= "crop_category")
	private String crop_category;
	
	@Column(name ="quantity")
	private double quantity;
	
	@Column(name="total_amount")
	private double total_amount;
	
	@Column(name="status")
	private String status;
	

	@ManyToOne
	@JoinColumn(name="bid")
	private Buyer buyer;


	public int getOid() {
		return oid;
	}


	public void setOid(int oid) {
		this.oid = oid;
	}


	public Farmer getFarmer() {
		return farmer;
	}


	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}


	public String getCrop_category() {
		return crop_category;
	}


	public void setCrop_category(String crop_category) {
		this.crop_category = crop_category;
	}


	public double getQuantity() {
		return quantity;
	}


	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}


	public double getTotal_amount() {
		return total_amount;
	}


	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public Buyer getBuyer() {
		return buyer;
	}


	public void setBuyer(Buyer buyer) {
		this.buyer = buyer;
	}


	public Order(int oid, Farmer farmer, String crop_category, double quantity, double total_amount, String status,
			Buyer buyer) {
		super();
		this.oid = oid;
		this.farmer = farmer;
		this.crop_category = crop_category;
		this.quantity = quantity;
		this.total_amount = total_amount;
		this.status = status;
		this.buyer = buyer;
	}


	public Order() {
		
	}
	
	
}
