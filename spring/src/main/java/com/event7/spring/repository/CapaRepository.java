package com.event7.spring.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event7.spring.model.Capa;

@Repository
public interface CapaRepository extends JpaRepository<Capa, String> {
    Optional<Capa> findByEventoId (Long eventoId);
}

