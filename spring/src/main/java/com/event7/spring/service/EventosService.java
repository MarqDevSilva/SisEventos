package com.event7.spring.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import com.event7.spring.DTO.EventosDTO;
import com.event7.spring.DTO.GetEventosDTO;
import com.event7.spring.DTO.mapper.EventosMapper;
import com.event7.spring.model.Eventos;
import com.event7.spring.repository.EventosRepository;

import jakarta.validation.constraints.NotNull;

@Validated
@Service
public class EventosService {
    
    private final EventosRepository eventosRepository;
    private EventosMapper eventosMapper;

    public EventosService(EventosRepository eventosRepository, EventosMapper eventosMapper) {
        this.eventosRepository = eventosRepository;
        this.eventosMapper = eventosMapper;
    }

    public List<GetEventosDTO> findByUserId() {
        //return eventosRepository.findByUserId(userId)
        return eventosRepository.findAll()
            .stream()
            .map(eventosMapper :: toGetDTO)
            .collect(Collectors.toList());
    }

    public Optional<EventosDTO> findByEndereco(@PathVariable @NotNull String endereco){
        return eventosRepository.findByEndereco(endereco)
            .map(eventosMapper :: toDTO);
    }

    public EventosDTO novoEvento(EventosDTO eventosDTO){
        Eventos eventos = eventosMapper.toEntity(eventosDTO);
        eventos = eventosRepository.save(eventos);

        return eventosMapper.toDTO(eventos);
    }
}
