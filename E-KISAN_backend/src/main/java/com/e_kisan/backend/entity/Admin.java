package com.e_kisan.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Entity
@Table(name="admins")
public class Admin 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="aid")
	private int aid;

	@Column(name="firstname" ,nullable = false)
	private String firstname;
	
	@Column(name="lastname",nullable = false)
   private String lastname;
	@Email
	@Column(name="email" ,unique = true)
	private String email;
	
	@NotBlank(message = "Password is mandatory")
	@Pattern(regexp = "^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$")
	@Column(name="password",nullable = false)
	private String password;
	
	@NotBlank(message = "username is mandatory")
	@Column(name="user_name",unique = true,nullable = false)
	private String user_name;
	
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public Admin(String firstname, String lastname, String email, String password, String user_name) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.user_name = user_name;
	}
	public Admin() {
		
	}
	
}
