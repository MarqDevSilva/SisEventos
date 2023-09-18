package com.event7.spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.event7.spring.DTO.EventosDTO;
import com.event7.spring.DTO.GetEventosDTO;
import com.event7.spring.service.EventosService;

import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@RequestMapping("/api/evento")
public class EventosController {

    private final EventosService eventosService;

    public EventosController(EventosService eventosService){
        this.eventosService = eventosService;
    }

    @GetMapping
    public List<GetEventosDTO> findByUserId() {
        //Users usuarioLogado = (Users) authentication.getPrincipal();
        //Long userId = usuarioLogado.getId();
        return eventosService.findByUserId();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public EventosDTO novoEvento(@RequestBody EventosDTO eventos){
        return eventosService.novoEvento(eventos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EventosDTO> update(@PathVariable @NotNull Long id,
            @RequestBody EventosDTO evento){
            EventosDTO updatedEvent = eventosService.update(id, evento);
            if (updatedEvent != null) {
                return ResponseEntity.ok(updatedEvent);
            } else {
                return ResponseEntity.notFound().build();
            }
        }
}
