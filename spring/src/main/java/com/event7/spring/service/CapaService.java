package com.event7.spring.service;

import org.springframework.stereotype.Service;

import com.event7.spring.model.Capa;
import com.event7.spring.repository.CapaRepository;

@Service
public class CapaService {

    private final CapaRepository capaRepository;

    public CapaService(CapaRepository capaRepository) {
        this.capaRepository = capaRepository;
    }

    public Capa save(Capa capa){
        return capaRepository.save(capa);
    }
}
