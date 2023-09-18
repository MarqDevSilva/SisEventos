package com.event7.spring.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.event7.spring.model.Capa;
import com.event7.spring.service.CapaService;

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
        return capaService.save(capa);
    }
}
