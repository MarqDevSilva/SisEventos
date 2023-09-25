package com.event7.spring.service;

import java.util.ArrayList;
import java.util.List;
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

    public List<Palestrantes> save(List<Palestrantes> palestrantes){
        List<Palestrantes> savedPalestrantes = new ArrayList<>();
        for (Palestrantes palestrante : palestrantes) {
            Palestrantes savedPalestrante = palestranteRepository.save(palestrante);
            savedPalestrantes.add(savedPalestrante);
        }
        return savedPalestrantes;
    }

    public List<Palestrantes> findByEventoId(@PathVariable @NotNull Long eventoId){
        return palestranteRepository.findByEventoId(eventoId);
    }
}
