package com.ankit.crud.service;

import com.ankit.crud.Repository.UserRepository;
import com.ankit.crud.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    //get all user
    public List<User> getAllUsers(){
        return userRepository.findAll();

    }

    //get user by ID
    public User getUserById(Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new RuntimeException("User not found"));
    }

    //create user
    public User createUser(User user){
        return userRepository.save(user);
    }

    //update user
    public User updateUser(Long id, User newUser){
        User existing = userRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("User Not Found"));
        existing.setName(newUser.getName());
        existing.setEmail(newUser.getEmail());
        existing.setPhone(newUser.getPhone());
        existing.setAge(newUser.getAge());
        existing.setTechStack(newUser.getTechStack());

        if(newUser.getTechKey()!=null){
            existing.setTechKey(newUser.getTechKey());
        }

        return userRepository.save(existing);
    }

    //delete user
    public void deleteUser(Long id){

        userRepository.deleteById(id);
    }






}
