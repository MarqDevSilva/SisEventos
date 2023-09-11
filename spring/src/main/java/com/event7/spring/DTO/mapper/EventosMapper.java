package com.event7.spring.DTO.mapper;

import org.springframework.stereotype.Component;

import com.event7.spring.DTO.EventosDTO;
import com.event7.spring.DTO.GetEventosDTO;
import com.event7.spring.model.Eventos;

@Component
public class EventosMapper {
    
    public EventosDTO toDTO(Eventos eventos){
        if (eventos == null){
            return null;
        }
        return new EventosDTO(
            eventos.getId(), 
            eventos.getUser(),
            eventos.getEndereco(),
            eventos.getNome(), 
            eventos.getDataInicial(), 
            eventos.getDataFinal(),
            eventos.getImgCapa());
    }

    public Eventos toEntity(EventosDTO eventosDTO){
        if (eventosDTO == null){
            return null;
        }

        Eventos eventos = new Eventos();
        if(eventosDTO.id() != null){
            eventos.setId(eventosDTO.id());
        }
        eventos.setUser(eventosDTO.users());
        eventos.setEndereco(eventosDTO.endereco());
        eventos.setNome(eventosDTO.nome());
        eventos.setDataInicial(eventosDTO.dataInicial());
        eventos.setDataFinal(eventosDTO.dataFinal());
        eventos.setImgCapa(eventosDTO.imgCapa());

        return eventos;
    }

    public GetEventosDTO toGetDTO(Eventos eventos){
        if (eventos == null){
            return null;
        }
        return new GetEventosDTO(
            eventos.getId(), 
            eventos.getEndereco(),
            eventos.getNome(),
            eventos.getDataInicial(), 
            eventos.getDataFinal());
    }
}
