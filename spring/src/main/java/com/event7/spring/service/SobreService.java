package com.event7.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.event7.spring.model.Sobre;
import com.event7.spring.repository.SobreRespository;

import jakarta.validation.constraints.NotNull;

@Service
public class SobreService {

     private final SobreRespository sobreRespository;

    public SobreService(SobreRespository sobreRespository) {
        this.sobreRespository = sobreRespository;
    }

    public Sobre save(Sobre sobre){
        return sobreRespository.save(sobre);
    }

    public Optional<Sobre> findByEventoId(@PathVariable @NotNull Long eventoId){
        return sobreRespository.findByEventoId(eventoId);
    }

    public List<Sobre> listAll(){
        return sobreRespository.findAll();
    }
}
