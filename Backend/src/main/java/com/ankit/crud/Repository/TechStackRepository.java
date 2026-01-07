package com.ankit.crud.Repository;

import com.ankit.crud.model.TechStack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechStackRepository extends JpaRepository<TechStack, Integer> {
    boolean existsByTechNameIgnoreCase(String techName);
}
