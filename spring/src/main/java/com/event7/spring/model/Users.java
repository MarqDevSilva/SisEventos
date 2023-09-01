package com.event7.spring.model;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Users implements UserDetails{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String nome;

    @Column(length = 200, nullable = false)
    private String email;

    @Column(length = 200, nullable = false)
    private String password;

    @Column(length = 100, nullable = true)
    private Date dataNascimento;

    @Column(length = 11, nullable = true)
    private String cpf;

    @Column(length = 30, nullable = true)
    private String celular;

    @Column(length = 20, nullable = true)
    private String sexo;

    @Column(length = 20,nullable = true)
    private String cep;

    @Column(length = 20, nullable = true)
    private String pais;

    @Column(length = 5, nullable = true)
    private String estado;

    @Column(length = 100, nullable = true)
    private String cidade;

    @Column(length = 100, nullable = true)
    private String bairro;

    @Column(length = 100, nullable = true)
    private String endereco;

    @Column(length = 100, nullable = true)
    private String complemento;

    public Users(String nome, String email, String password){
        this.nome = nome;
        this.email = email;
        this.password = password;
    };

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
