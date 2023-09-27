package com.keerthivasan.investmentplatform;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.*;

@OpenAPIDefinition(
		info =@Info(
				title = "Money Makers",
				version = "1.1.1",
				description = "Investment Platform",
				contact = @Contact(
						name = "Keerthivasan BP",
						email = "keerthi@gmail.com"
						)
				)
		)

@SpringBootApplication
public class InvestmentplatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvestmentplatformApplication.class, args);
	}

}
