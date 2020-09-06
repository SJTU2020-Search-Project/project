package com.backend.backend.daoimpl;

import com.backend.backend.dao.UserDao;
import com.backend.backend.entity.UserEntity;
import com.backend.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoimpl implements UserDao {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserEntity insertUser(UserEntity userEntity) {

        return userRepository.save(userEntity);
    }
}
