package com.ankit.crud.service;

import com.ankit.crud.Repository.TechStackRepository;
import com.ankit.crud.model.TechStack;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechStackService {

    private final TechStackRepository techStackRepository;

    public TechStackService(TechStackRepository techStackRepository){
        this.techStackRepository = techStackRepository;
    }

    public List<TechStack> getAllTechStack(){
        return techStackRepository.findAll();
    }

    public  TechStack getTechStackById(Integer techKey){
        return techStackRepository.findById(techKey)
                .orElseThrow(() -> new RuntimeException("Tech Stack not found"));
    }




}
