package com.backend.backend.controller;


import com.backend.backend.entity.UserEntity;
import com.backend.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping(value = "/signup")
    public UserEntity signup(@RequestBody UserEntity userEntity){return userService.addUser(userEntity);}
}
