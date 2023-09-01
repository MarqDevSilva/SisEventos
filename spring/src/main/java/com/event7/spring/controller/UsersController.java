package com.event7.spring.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event7.spring.DTO.UsersDTO;
import com.event7.spring.DTO.mapper.UsersMapper;
import com.event7.spring.model.Users;
import com.event7.spring.service.UsersService;

@RestController
@RequestMapping("/api/conta")

public class UsersController{
    
    private final UsersService usersService;
    private UsersMapper usersMapper;

    public UsersController(UsersService usersService, UsersMapper usersMapper){
        this.usersService = usersService;
        this.usersMapper = usersMapper;
    }

    @GetMapping
    public UsersDTO findByEmail(Authentication authentication){
        Users usuarioLogado = (Users) authentication.getPrincipal();
        String email = usuarioLogado.getEmail();

        return usersService.findByEmail(email);
    }
   
    @PutMapping
    public UsersDTO update(Authentication authentication, @RequestBody UsersDTO usersDTO){
        Users usuarioLogado = (Users) authentication.getPrincipal();
        String encryptedPassword = new BCryptPasswordEncoder().encode(usersDTO.password());
        usuarioLogado.setPassword(encryptedPassword);
        usuarioLogado.setNome(usersDTO.nome());
        usuarioLogado.setEmail(usersDTO.email());
        usuarioLogado.setCpf(usersDTO.cpf());
        usuarioLogado.setDataNascimento(usersDTO.dataNascimento());
        usuarioLogado.setCelular(usersDTO.celular());
        usuarioLogado.setSexo(usersDTO.sexo());
        usuarioLogado.setCep(usersDTO.cep());
        usuarioLogado.setPais(usersDTO.pais());
        usuarioLogado.setEstado(usersDTO.estado());
        usuarioLogado.setCidade(usersDTO.cidade());
        usuarioLogado.setBairro(usersDTO.bairro());
        usuarioLogado.setEndereco(usersDTO.endereco());
        usuarioLogado.setComplemento(usersDTO.complemento());

        return usersService.update(usersMapper.toDTO(usuarioLogado));
    }
}
