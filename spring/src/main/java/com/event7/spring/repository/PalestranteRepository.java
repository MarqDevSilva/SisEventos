package com.event7.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event7.spring.model.Palestrantes;

@Repository
public interface PalestranteRepository extends JpaRepository<Palestrantes, String> {
    List<Palestrantes> findByEventoId (Long eventoId);
}
