package com.ankit.crud.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name= "tech_stack")
@Data
@Getter
@Setter
@Builder
public class TechStack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "tech_key")
    private  Integer tech_key;

    @Column(name = "tech_name")
    private  String tech_name;

    public TechStack(){}

    public TechStack(Integer tech_key, String tech_name){
        this.tech_key = tech_key;
        this.tech_name = tech_name;
    }



}
