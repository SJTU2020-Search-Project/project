package com.backend.backend.dao;

import com.backend.backend.entity.MovieEntity;

import java.util.List;

public interface MovieDao {
    MovieEntity findOne(Integer id);
    List<MovieEntity>findByTitle(String title);
    MovieEntity insertOne(MovieEntity movieEntity);
    void deleteOne(Integer id);
    void updateOne(MovieEntity movieEntity);
}
