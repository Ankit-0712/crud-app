package com.ankit.crud.service;

import com.ankit.crud.Repository.TechStackRepository;
import com.ankit.crud.Repository.UserRepository;
import com.ankit.crud.model.TechStack;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechStackService {

    private final TechStackRepository techStackRepository;
    private final UserRepository userRepository;

    public TechStackService(TechStackRepository techStackRepository, UserRepository userRepository){
        this.techStackRepository = techStackRepository;
        this.userRepository = userRepository;
    }

    public List<TechStack> getAllTechStack(){
        return techStackRepository.findAll();
    }

    public  TechStack getTechStackById(Integer techKey){
        return techStackRepository.findById(techKey)
                .orElseThrow(() -> new RuntimeException("Tech Stack not found"));
    }

    public TechStack addTechStack(TechStack techStack){
        return techStackRepository.save(techStack);
    }

    public void deleteTechStack(Integer techKey) {
        if (!techStackRepository.existsById(techKey)) {
            throw new RuntimeException("Tech Stack not found with id: " + techKey);
        }
        techStackRepository.deleteById(techKey);
    }

}






