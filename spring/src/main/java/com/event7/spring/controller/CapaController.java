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

import com.event7.spring.model.Capa;
import com.event7.spring.service.CapaService;

import jakarta.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/capa")
public class CapaController {

    private final CapaService capaService;

    public CapaController(CapaService capaService){
        this.capaService = capaService;
    }
    
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Capa save(@RequestBody Capa capa){
        System.out.println(capa);
        return capaService.save(capa);
    }

    @GetMapping("/{eventoId}")
    public Optional<Capa> findByEventoId(@PathVariable @NotNull Long eventoId){
        return capaService.findByEventoId(eventoId);
    }

    @GetMapping
    public List<Capa> listAll() { 
        return capaService.listAll();
    }

}
