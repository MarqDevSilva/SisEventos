package com.event7.spring.DTO;

import java.util.Date;

public record UsersDTO(
    Long id,
    String nome,
    String email,
    String password,
    Date dataNascimento,
    String cpf,
    String celular,
    String sexo,
    String cep,
    String pais,
    String estado,
    String cidade,
    String bairro,
    String endereco,
    String complemento
){}
