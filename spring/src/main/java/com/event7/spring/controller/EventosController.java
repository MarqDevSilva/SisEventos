package com.event7.spring.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.event7.spring.DTO.EventosDTO;
import com.event7.spring.DTO.GetEventosDTO;
import com.event7.spring.model.Users;
import com.event7.spring.service.EventosService;

import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@RequestMapping("/api/eventos")
public class EventosController {

    private final EventosService eventosService;

    public EventosController(EventosService eventosService){
        this.eventosService = eventosService;
    }

    @GetMapping
    public List<GetEventosDTO> findByUserId(Authentication authentication) {
        Users usuarioLogado = (Users) authentication.getPrincipal();
        Long userId = usuarioLogado.getId();
        return eventosService.findByUserId(userId);
    }

    @GetMapping("/{endereco}")
    public ResponseEntity<EventosDTO> findByEndereco(@PathVariable @NotNull String endereco){
        return eventosService.findByEndereco(endereco)
            .map(recordFound -> ResponseEntity.ok().body(recordFound))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public EventosDTO novoEvento(@RequestBody EventosDTO eventos){
        return eventosService.novoEvento(eventos);
    }
}
