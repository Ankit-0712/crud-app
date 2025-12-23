package com.ankit.crud.controller;

import com.ankit.crud.model.TechStack;
import com.ankit.crud.service.TechStackService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/techstack")
@CrossOrigin(origins = "http//localhost:4200")
public class TechStackController {
    private final TechStackService techStackService;

    public TechStackController(TechStackService techStackService){
        this.techStackService = techStackService;

    }

    @GetMapping
    public List<TechStack> getAllTechStack(){
        return techStackService.getAllTechStack();
    }




}
