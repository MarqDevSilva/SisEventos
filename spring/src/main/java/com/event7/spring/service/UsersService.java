package com.event7.spring.service;

import org.springframework.stereotype.Service;

import com.event7.spring.DTO.UsersDTO;
import com.event7.spring.DTO.mapper.UsersMapper;
import com.event7.spring.model.Users;
import com.event7.spring.repository.UsersRepository;

@Service
public class UsersService {

    private final UsersRepository usersRepository;
    private UsersMapper usersMapper;

    public UsersService(UsersRepository usersRepository, UsersMapper usersMapper){
        this.usersRepository = usersRepository;
        this.usersMapper = usersMapper;
    }
    
    public UsersDTO findByEmail(String email){
        return usersMapper.toDTO(usersRepository.findByEmail(email));
    }

    public UsersDTO update(UsersDTO usersDTO){
        Users users = usersMapper.toEntity(usersDTO);
        users = usersRepository.save(users);

        return usersMapper.toDTO(users);
    } 
}
