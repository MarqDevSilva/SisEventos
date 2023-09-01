package com.event7.spring.DTO.mapper;

import org.springframework.stereotype.Component;

import com.event7.spring.DTO.UsersDTO;
import com.event7.spring.model.Users;

@Component
public class UsersMapper {
    
    public UsersDTO toDTO(Users users){
        if (users == null){
            return null;
        }
        return new UsersDTO(
            users.getId(),
            users.getNome(),
            users.getEmail(),
            users.getPassword(),
            users.getDataNascimento(),
            users.getCpf(),
            users.getCelular(),
            users.getSexo(),
            users.getCep(),
            users.getPais(),
            users.getEstado(),
            users.getCidade(),
            users.getBairro(),
            users.getEndereco(),
            users.getComplemento());
    }

    public Users toEntity(UsersDTO usersDTO){
        if(usersDTO == null){
            return null;
        }
        Users users = new Users();
        if(usersDTO.id() != null){
            users.setId(usersDTO.id());
        }
        users.setNome(usersDTO.nome());
        users.setEmail(usersDTO.email());
        users.setPassword(usersDTO.password());
        users.setDataNascimento(usersDTO.dataNascimento());
        users.setCpf(usersDTO.cpf());
        users.setCelular(usersDTO.celular());
        users.setSexo(usersDTO.sexo());
        users.setCep(usersDTO.cep());
        users.setPais(usersDTO.pais());
        users.setEstado(usersDTO.estado());
        users.setCidade(usersDTO.cidade());
        users.setBairro(usersDTO.bairro());
        users.setEndereco(usersDTO.endereco());
        users.setComplemento(usersDTO.complemento());

        return users;
        }
}
