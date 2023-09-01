package com.event7.spring.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Eventos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userId")
    private Users user;

    @Column(length = 200, nullable = false)
    private String endereco;

    @Column(length = 200, nullable = false)
    private String nome;

    @Column(length = 100, nullable = false)
    private Date dataInicial;

    @Column(length = 100, nullable = false)
    private Date dataFinal;

    @Lob
    @Column(name = "BYTE_ARQUIVO")
    private byte[] imgCapa;
    
}
