package com.event7.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

public class Capa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userId")
    private Users user;

    @Column(length = 100)
    private String tituloEvento;

    @Lob
    @Column(name = "BYTE_ARQUIVO")
    private byte[] imgCapa;
}
