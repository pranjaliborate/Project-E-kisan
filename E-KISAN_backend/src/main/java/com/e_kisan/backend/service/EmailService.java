package com.e_kisan.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	@Autowired
private JavaMailSender mailSender;
 public void  sendEmail(String fromEmail,String toEmail,String subject,String body) {
	SimpleMailMessage mailMessage=new SimpleMailMessage();
	mailMessage.setFrom(fromEmail);
	mailMessage.setTo(toEmail);
	mailMessage.setSubject(subject);
	mailMessage.setText(body);
	mailSender.send(mailMessage);
	System.out.println("Email Send Successfully");

}
}
