package com.backend.backend.dao;

import com.backend.backend.entity.UserEntity;

public interface UserDao {
    UserEntity insertUser(UserEntity userEntity);
}
