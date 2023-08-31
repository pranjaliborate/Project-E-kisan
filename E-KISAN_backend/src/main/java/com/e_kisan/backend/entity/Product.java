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
@Table(name="products")
public class Product 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pid")
	private int pid;
	
	
	@ManyToOne
	@JoinColumn(name="fid")
	private Farmer farmer;
	
	@Column(name= "crop")
	private String crop;
	
	@Column(name= "quantity")
	private double quantity;
	
	@Column(name= "expected_Price")
	private double expected_Price;

	
	@Override
	public String toString() {
		return "Product [pid=" + pid + ", farmer=" + farmer + ", crop=" + crop + ", quantity=" + quantity
				+ ", expected_Price=" + expected_Price + "]";
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
	}


	public Farmer getFarmer() {
		return farmer;
	}


	public void setFarmer(Farmer farmer) {
		this.farmer = farmer;
	}


	public String getCrop() {
		return crop;
	}


	public void setCrop(String crop) {
		this.crop = crop;
	}


	public double getQuantity() {
		return quantity;
	}


	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}


	public double getExpected_Price() {
		return expected_Price;
	}


	public void setExpected_Price(double expected_Price) {
		this.expected_Price = expected_Price;
	}


	public Product(int pid, Farmer farmer, String crop, double quantity, double expected_Price) {
		super();
		this.pid = pid;
		this.farmer = farmer;
		this.crop = crop;
		this.quantity = quantity;
		this.expected_Price = expected_Price;
	}


	public Product() {
		
	}

	
}
