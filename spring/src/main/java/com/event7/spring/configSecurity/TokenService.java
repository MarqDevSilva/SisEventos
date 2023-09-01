package com.event7.spring.configSecurity;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.event7.spring.model.Users;

@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;

    public String generateToken(Users users){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create()
                .withIssuer("e-inscricao")
                .withSubject(users.getEmail())
                .withExpiresAt(genExpirationDate())
                .sign(algorithm);
                
            return token;
        }catch(JWTCreationException exception){
            throw new  RuntimeException("Error while generating token", exception);
        }
    }

    public String validateToken(String token){   
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                .withIssuer("e-inscricao")
                .build()
                .verify(token)
                .getSubject();
        } catch (JWTCreationException exception) {
            return "";
        }
        
    }

    private Instant genExpirationDate(){
        return LocalDateTime.now().plusHours(12).toInstant(ZoneOffset.of("-03:00"));
    }
}
