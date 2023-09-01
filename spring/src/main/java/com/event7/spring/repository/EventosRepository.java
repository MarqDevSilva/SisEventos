package com.event7.spring.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event7.spring.model.Eventos;


@Repository
public interface EventosRepository extends JpaRepository<Eventos, String> {
    Optional<Eventos> findByEndereco(String endereco);
    List<Eventos> findByUserId(Long userId);
}
