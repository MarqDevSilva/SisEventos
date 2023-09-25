package com.event7.spring.controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.event7.spring.model.Palestrantes;
import com.event7.spring.service.PalestranteService;

import jakarta.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/palestrante")
public class PalestranteController {
    
    private final PalestranteService palestranteService;

    public PalestranteController(PalestranteService palestranteService){
        this.palestranteService = palestranteService;
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Palestrantes save(@RequestBody Palestrantes palestrantes){
        return palestranteService.save(palestrantes);
    }

    @GetMapping("/{eventoId}")
    public Optional<Palestrantes> findeByEventoId(@PathVariable @NotNull Long eventoId){
        return palestranteService.findByEventoId(eventoId);
    }
}
