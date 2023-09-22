package com.event7.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.event7.spring.model.Sobre;
import com.event7.spring.service.SobreService;

import jakarta.validation.constraints.NotNull;

@RestController
@RequestMapping("api/sobre")
public class SobreController {

    private final SobreService sobreService;

    public SobreController(SobreService sobreService){
        this.sobreService = sobreService;
    }
    
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Sobre save(@RequestBody Sobre sobre){
        return sobreService.save(sobre);
    }

    @GetMapping("/{eventoId}")
    public Optional<Sobre> findByEventoId(@PathVariable @NotNull Long eventoId){
        return sobreService.findByEventoId(eventoId);
    }

    @GetMapping
    public List<Sobre> listAll() { 
        return sobreService.listAll();
    }
}
