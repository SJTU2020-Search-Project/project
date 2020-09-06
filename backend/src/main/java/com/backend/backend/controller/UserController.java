package com.backend.backend.controller;


import com.backend.backend.entity.UserEntity;
import com.backend.backend.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    UserService userService;
    @PostMapping(value = "/signup")
    public void signup(@RequestBody UserEntity userEntity){userService.addUser(userEntity);}
}
