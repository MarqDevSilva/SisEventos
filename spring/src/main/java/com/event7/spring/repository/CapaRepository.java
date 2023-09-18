package com.event7.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event7.spring.model.Capa;

@Repository
public interface CapaRepository extends JpaRepository<Capa, String> {
}
