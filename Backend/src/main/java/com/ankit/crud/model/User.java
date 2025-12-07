package com.ankit.crud.model;

import jakarta.persistence.*;
import lombok.*;
import jakarta.validation.constraints.*;


@Entity
@Table(name = "users")
@Data
@Getter
@Setter
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Phone is required")
    private String phone;

    @NotNull(message = "Age is required")
    @Min(value = 1, message = "Age must be least 1")
    private Integer age;

    @NotBlank(message = "Tech Stack is required")
    private String techStack;

    public User(){}

    public User(Long id, String name, String email, String phone, Integer age, String techStack){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.techStack = techStack;
        this.age = age;
    }


}
