package com.event7.spring.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event7.spring.model.Sobre;

@Repository
public interface SobreRespository extends JpaRepository<Sobre, String>{
     Optional<Sobre> findByEventoId (Long eventoId);
}