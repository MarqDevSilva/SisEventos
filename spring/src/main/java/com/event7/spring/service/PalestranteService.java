package com.event7.spring.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.event7.spring.model.Palestrantes;
import com.event7.spring.repository.PalestranteRepository;

import jakarta.validation.constraints.NotNull;

@Service
public class PalestranteService {
    
    private final PalestranteRepository palestranteRepository;

    public PalestranteService(PalestranteRepository palestranteRepository){
        this.palestranteRepository = palestranteRepository;
    }

    public Palestrantes save(Palestrantes palestrantes){
        return palestranteRepository.save(palestrantes);
    }

    public Optional<Palestrantes> findByEventoId(@PathVariable @NotNull Long eventoId){
        return palestranteRepository.findByEventoId(eventoId);
    }
}
