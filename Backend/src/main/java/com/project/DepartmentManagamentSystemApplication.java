package com.project;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@CrossOrigin(origins = "*" ,allowedHeaders = "*" )
@SpringBootApplication
public class DepartmentManagamentSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(DepartmentManagamentSystemApplication.class, args);
	}

	@Bean
	public ModelMapper getModelMapper(){
		return new  ModelMapper();
	}

}
