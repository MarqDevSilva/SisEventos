package com.event7.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.event7.spring.DTO.mapper.UsersMapper;
import com.event7.spring.repository.UsersRepository;

@Service
public class AuthorizationService implements UserDetailsService{

    @Autowired
    UsersRepository repository;

    @Autowired
    UsersMapper usersMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByEmail(username);
    }
}
