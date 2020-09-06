package com.backend.backend.serviceimpl;

import com.backend.backend.dao.UserDao;
import com.backend.backend.entity.UserEntity;
import com.backend.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceimpl implements UserService {
    @Autowired
    UserDao userDao;

    @Override
    public UserEntity addUser(UserEntity userEntity) {
        return userDao.insertUser(userEntity);
    }
}
