package com.event7.spring.DTO;

import java.util.Date;

import com.event7.spring.model.Users;

public record EventosDTO(
    Long id,
    Users users,
    String endereco,
    String nome,
    Date dataInicial,
    Date dataFinal
) {}
