package com.event7.spring.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event7.spring.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {
    Users findByEmail(String login);
}

