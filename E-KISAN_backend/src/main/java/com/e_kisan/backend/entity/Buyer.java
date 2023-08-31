package com.e_kisan.backend.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;

@Entity
@Table(name="buyers")
public class Buyer
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="bid")
	private int bid ;
	
	
	 @NotBlank(message = "Firstname is mandatory")
	@Column(name="firstname",length = 30,nullable = false)
	private String firstname ;
	
	 
	  @NotBlank(message = "Lastname is mandatory")
	@Column(name="lastname",length = 30,nullable = false)
	private String lastname ;
	
	 
	@Size(max=10,min=10,message = "size must be less than or equal to 10")
	@Column(name="contact",nullable = false )
	private String contact ;
	
	@Email(message = "Email is not valid", regexp = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])")
	@NotEmpty(message = "Email cannot be empty")
	@Column(name="email",nullable=false)
	private  String email ;
	
	
	@NotBlank(message = "Enter username")
	@Column(name="user_name",length = 30,nullable  = false,unique = true)
	private String user_name ;
	
	
	@NotBlank(message = "Password is mandatory")
	@Pattern(regexp = "^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$")
	@Column(name="password",length = 30,nullable = false)
	private  String password ;
	
	@NotBlank(message = "Address is mandatory")
	@Column(name="address",nullable = false)
	private String address ;
	
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Buyer(int bid, String firstname, String lastname, String contact, String email, String user_name,
			String password,String address) {
		super();
		this.bid = bid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.contact = contact;
		this.email = email;
		this.user_name = user_name;
		this.password = password;
		this.address = address;
	}

	public Buyer() {
		
	}
	
}
