package com.backend.backend.dao;

import com.backend.backend.entity.MovieEntity;
public interface MovieDao {
    MovieEntity findOne(Integer id);
}
