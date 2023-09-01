package com.event7.spring.DTO;

import java.util.Date;

public record GetEventosDTO( 
    Long id,
    String endereco,
    String nome,
    Date dataInicial,
    Date dataFinal
) {}
