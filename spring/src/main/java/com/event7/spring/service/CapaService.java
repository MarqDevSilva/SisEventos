package com.event7.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.event7.spring.model.Capa;
import com.event7.spring.repository.CapaRepository;

import jakarta.validation.constraints.NotNull;

@Service
public class CapaService {

    private final CapaRepository capaRepository;

    public CapaService(CapaRepository capaRepository) {
        this.capaRepository = capaRepository;
    }

    public Capa save(Capa capa){
        return capaRepository.save(capa);
    }

    public Optional<Capa> findByEventoId(@PathVariable @NotNull Long eventoId){
        return capaRepository.findByEventoId(eventoId);
    }
}
