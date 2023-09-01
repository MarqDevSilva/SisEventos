package com.event7.spring;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.event7.spring.model.Eventos;
import com.event7.spring.model.Users;
import com.event7.spring.repository.EventosRepository;
import com.event7.spring.repository.UsersRepository;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(EventosRepository eventosRepository, UsersRepository usersRepository){
		return args ->{

		};
	
	}
}
